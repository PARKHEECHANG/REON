# Chorong.md

# 1. Task

- RE:ON에서 제공할 서비스는 원본(배우)의 연기와  원본의 연기를 따라한 사용자의 연기를 비교하여 점수를 산출한다.
    - 여기서 점수 산출 방법은 연기 영상을 7가지 클래스(RE:ON에선 감정)로 분류해서 각각의 클래스들의 확률 값의 차이로 계산한다.
    
    ![task](./assets/AI/AI_task_describe.png)
    

# 2. Models

- Emotion Recognition
    - 감정 인식은 안면 인식과 이미지 분류의 합
        - 얼굴 검출을 하지 않고, 원본 이미지로만 분류할 수 있겠지만,
        얼굴이 어디에 나타나느냐에 따라서 모델의 예측치가 매우 다를 것이다.
            - 예를 들어, 학습 이미지에선 사람의 얼굴이 항상 이미지의 왼쪽에 나타났다고 해보자. 그렇다면 모델의 필터들은 왼쪽에서 많이 활성화되고, 오른쪽에서 덜 활성화 될 것이다. 그리고 실 사용에서 오른쪽에 얼굴이 나온 이미지를 사용한다면, 당연하게 모델의 정확도가 많이 떨어질 것이다.
    
    ### Face Detector
    
    1. Haar-cascade (In Python)
        - OpenCV 에서 제공
        - 처음 AI 서버를 배포할 생각으로 사용한 얼굴 검출 모델이다. 이미지의 명암을 이용해서 얼굴을 찾는 모델이다. 속도는 매우 빠르며, 10년 전 모델이지만, 여전히 좋은 성능을 낸다.
        - Haar-Cascade (OpenCV)
        - [OpenCV: Cascade Classifier](https://docs.opencv.org/3.4/db/d28/tutorial_cascade_classifier.html)
        
    2. Tiny Face Detector (In Javascript)
        - 모델을 브라우저에 띄우기 위해서 OpenCV의 Haar-Cascade를 포기하고 face-api에서 제공하는 얼굴 검출 모델을 사용
        - 유명한 객체 검출 모델인 Yolo V2에서 파생된 모델
        - face-api.js
        - [GitHub - justadudewhohacks/face-api.js: JavaScript API for face detection and face recognition in the browser and nodejs with tensorflow.js](https://github.com/justadudewhohacks/face-api.js#models-face-detection)
        
        - 요약
            - MobileNet 보다 빠르고, 작으며, 적은 리소스를 필요로 한다.
    
    ### Image Classifier
    
    **EfficientNet-B0**
    
    - 이미지 분류 모델
    - 논문 원본
    
        - [EfficientNet: Rethinking Model Scaling for Convolutional Neural Networks](https://arxiv.org/abs/1905.11946)
    
    - 한글판(리뷰)
    
        - [Python, Machine & Deep Learning](https://greeksharifa.github.io/computer%20vision/2022/03/01/EfficientNet/)
    
    - 모델
    - Why EfficientNet-B0 ?
        - EfficientNet을 선정한 이유
            - RE:ON의 서비스는 동영상을 각 프레임마다 감정 인식 모델의 Input으로 사용해서 Output으로 점수를 산정하는 시스템을 가지고 있다.
            - 사진 한 장이 아닌, 동영상의 프레임을 분류해내야 하므로 많은 연산을 필요로 한다. == 한 동영상 당 시간이 오래 걸린다.

# 3. Dataset

- AI hub (한국인 감정인식을 위한 복합영상)

    - [AI-Hub](https://aihub.or.kr/aihubdata/data/view.do?currMenu=&topMenu=&aihubDataSe=realm&dataSetSn=82)

- 데이터셋 요약

| 카테고리(종) | 이미지 개수(개) | 분포(%) |
| --- | --- | --- |
| 기쁨 | 70,735 | 14.47% |
| 당황 | 70,457 | 14.41% |
| 분노 | 68,835 | 14.08% |
| 불안 | 69,965 | 14.31% |
| 상처 | 70,103 | 14.34% |
| 슬픔 | 70,508 | 14.42% |
| 중립 | 68,173 | 13.94% |
| 평균 | 69,825 | 14.28 |

- **데이터 용량이 800GB에 달하기 때문에, 4분할로 나누어 학습**

# 4. Train

### Data Preprocessing

- Emotion Recognition는 Face Detection과 Image Classifier, 두 Task로 나뉜다. RE:ON에서 학습할 모델은 Image Classifier를 담당하는 EfficientNet-B0 이다. Emotion Recognition의 실제 Task처럼 Image Classifier를 학습할 때는 원본 이미지를 Face Detection을 통해서 나온 결과물을 학습 데이터로 사용할 예정이다.

### Fine tuning

- Pytorch 에서 제공하는 EfficientNet-B0 사전 학습 된 가중치를 사용하여 Fine-tuning
- 데이터 1분할 학습
    - 사진 약 20만장
    - 학습시간 26시간
    
    | Batch Size | Epochs | Learning Rate | Optimizer | 기타 |
    | --- | --- | --- | --- | --- |
    | 128 | 10 | 0.05 | SGD | momentum=0.9 |
    
    ![fine-tuning](./assets/AI/AI_fine-tuning.png)

- 학습 데이터에 대한 Acc(파랑), Loss(초록)만 좋은 모양을 띄고, 검증데이터에 대한 Acc(빨강), Loss(검정)은 그래프가 진동하며 학습이 되고 있지 않은 모습이다. 사전 학습된 가중치는 학습 데이터가 1000개의 클래스를 가지고 있는 Image-net으로 학습되어서 RE:ON에서 제공할 서비스인 얼굴 검출 및 분류와 괴리가 있어서 이러한 양상을 띄는 듯 하다.
- 배치를 줄이고 학습률을 낮춰서 한번 더 실험해볼 수 있지만, 데이터가 많기 때문에, fine-tuning 대신 처음부터 모델을 학습하기로 결정

### Total training

- 전체적인 방향
    - 사전 학습된 가중치를 사용하지 않고, 처음부터 학습한다. 이에 대한 용어를 정확히 몰라, Total training이라고 하겠다.
    - 데이터 분할별 학습마다 전 결과치를 토대로 배치사이즈 및 학습률을 설정할 계획
- 데이터 1분할 학습
    
    
    | Batch Size | Epochs | Learning Rate | Optimizer | 기타 |
    | --- | --- | --- | --- | --- |
    | 128 | 10 | 0.001 | SGD | momentum=0.9 |

    ![reon-result-1](./assets/AI/AI_reon-result-1.png)

    ![reon-info-1](./assets/AI/AI_reon-info-1.png)
    
    - 종합평가
        - 학습 데이터와 검증 데이터에 대해 모두 좋은 결과를 얻었다. 데이터 2,3,4 분할로 조금 더 학습시키면 좋은 결과를 얻을 수 있을 듯 하다. 4epoch부터 다소 그래프가 평평해진 모습으로 보았을 때, 배치사이즈와 학습률을 낮춰서 다음 학습을 진행시키면 될 듯 하다.
- 데이터 2분할 학습
    
    
    | Batch Size | Epochs | Learning Rate | Optimizer | 기타 |
    | --- | --- | --- | --- | --- |
    | 32 | 10 | 0.0001 | SGD | momentum=0.99 |
    
    ![reon-result-2](./assets/AI/AI_reon-result-2.png)

    ![reon-info-2](./assets/AI/AI_reon-info-2.png)
    
    - 종합평가
        - 데이터 1분할에 비해 크게 나아진 점은 없다. 좋은 점이라면 새로운 데이터(2분할 데이터)에 대해서 예측 성능이 떨어지지 않았다는 점이고, 나쁜 점이라면, 새로운 학습에 대해서 예측 성능이 나아지지 않았다는 것이다. 일단 3분할 4분할 데이터에 대해서도 학습을 진행
        - 배치와 학습률 낮춰서 다음 학습 진행
- 데이터 3분할 학습
    
    
    | Batch Size | Epochs | Learning Rate | Optimizer | 기타 |
    | --- | --- | --- | --- | --- |
    | 16 | 30 | 0.00001 | SGD | momentum=0.99 |
    
    ![reon-result-3](./assets/AI/AI_reon-result-3.png)

    ![reon-info-3](./assets/AI/AI_reon-info-3.png)
    
    - 종합 평가
        - 정확도가 오르긴 했지만, 과적합 된 상황이 눈에 띈다. 정확도는 10epoch 이후에 크게 달라진 점이 없고, Loss는 점점 증가하는 추세다.
        - 여기서 학습을 종료해도 되지만, 프로젝트 진행 기간을 생각해봤을 때, 4분할 학습 데이터까진 학습이 가능할 것으로 생각되어 4분할 데이터도 학습
- 데이터 4분할 학습
    
    
    | Batch Size | Epochs | Learning Rate | Optimizer | 기타 |
    | --- | --- | --- | --- | --- |
    | 16 | 50 | 0.0001 | SGD | momentum=0.9 |

    ![reon-result-4](./assets/AI/AI_reon-result-4.png)

    ![reon-info-4](./assets/AI/AI_reon-info-4.png)
    
    - 종합평가
        - 항상 검증 데이터에 대한 정확도는 상한이 80이고, 손실은 0.6정도가 하한이다. 일정 수준에서 항상 못벗어나는 모습을 보이는데, 아마 local minima에 갇힌 듯 보인다. 2분할 학습으로 돌아가거나 처음부터 AdamW를 활용해서 학습을 해도 되겠지만, 프로젝트 기간 상 여기서 학습을 종료한다.

# 5. Feedback

- Good
    - 데이터 분할 학습은 처음이라 다소 부족한 부분이 있었을 것이다. 하지만 처음 사용에 염두에 두었던 모델에 비해 훨씬 좋은 성능을 보였고, 서비스를 제공하는 데에 문제는 없을 듯 하다.
    
    ![beforeafter](./assets/AI/AI_beforeafter.png)
    
- Bad
    - 학습 후에 결과에 대한 저장이나 관리가 다소 소홀했다. 결과 그래프나 다른 부분들을 자주 놓쳐서 다시 학습하는 일도 발생했다.
- Add
    - 데이터를 전처리하면서 데이터셋 용량이 1/40로 줄었다. 그래서 이를 이용해서 전체 데이터셋으로 학습을 해보면 더 좋은 결과를 기대할 수 있을 것 같다.
    - Optimizer를 선택할 때, 참고한 레퍼런스를 따라하기만 했는데, 좀 더 알아보고, AdamW나 다른 것들을 선택했다면 더 좋은 결과를 기대할 수 있었다.
    - 모델 최적화를 통해서 브라우저에서 더욱 원활하게 실행할 수 있도록 했으면 좋을 것 같다.
