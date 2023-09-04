# 웹/모바일(웹 기술) WebRTC 프로젝트

<!-- 필수 항목 -->

## 카테고리

| Application | Domain | Language | Framework |
| ---- | ---- | ---- | ---- |
| :white_check_mark: Desktop Web | :white_check_mark: AI | :white_check_mark: JavaScript | :black_square_button: Vue.js |
| :white_check_mark: Mobile Web | :white_check_mark: Big Data | :black_square_button: TypeScript | :white_check_mark: React |
| :white_check_mark: Responsive Web | :black_square_button: Blockchain | :black_square_button: C/C++ | :black_square_button: Angular |
| :black_square_button: Android App | :black_square_button: IoT | :black_square_button: C# | :white_check_mark: Node.js |
| :black_square_button: iOS App | :black_square_button: AR/VR/Metaverse | :white_check_mark: Python | :black_square_button: Flask/Django |
| :black_square_button: Desktop App | :white_check_mark: Game | :white_check_mark: Java | :white_check_mark: Spring/Springboot |

<!-- 필수 항목 -->

## 프로젝트 소개

* 프로젝트명: RE:ON (레온) AI를 활용한 연기 플랫폼
* 주요 기능
  - 연기 배틀 (1vs1로 연기 배틀)
  - 연기 연습 (제공되는 영상으로 연기 연습 가능)
  - AI를 활용한 연기 점수 측정
  - 본인의 연기 영상을 업로드하여 소통할 수 있는 SNS
* 주요 기술
  - WebRTC, WebSocket, OpenVidu
  
  - EC2, GCP(Google Cloud Platform)

  - Springboot, Spring Security, JPA, QueryDSL, JWT Authentication, OAuth, REST API, Swagger
  
  - React.js, Tailwind, Node.js, Tailwind, MUI

  - Face API, ONNX, axios

* 참조 리소스
  * Vuetify: 디자인 전반 적용
  * Vue Argon Design System: 디자인 전반 적용
  * Vue Black Dashboard Pro(유료): 캘린더 컴포넌트 사용
  * AR Core: 구글에서 제공하는 AR 지원 라이브러리. 이미지 인식 및 오버레이 영상에 활용
  * Color Thief: 이미지 색상 추출 라이브러리. 커버 사진 색상 추출 및 배경 변경에 활용
  * Animation.css: CSS 애니메이션 지원 라이브러리. 메인 페이지 진입 애니메이션에 활용
* 배포 환경
  - URL: https://i9c203.p.ssafy.io

<!-- 자유 양식 -->

<!-- 프로젝트 로고 -->
# RE:ON 연기 연습 플랫폼📸

<div align=center>


![로고](./assets/images/logo.png){: width="800" height=""}

:alarm_clock: 프로젝트 기간  : 2023-07-04 ~ 2023-08-18

## [RE:ON](https://i9c203.p.ssafy.io/) :film_frames:
연기를 쉽고 재밌게!!:cool: <br>

</div>


# REON 기획 :satellite:

SNS와 유튜브 등에서 밈과 성대모사가 활발하게 퍼져나가고 있습니다.<br>
이러한 트렌드를 반영하여, **사용자들이 연기를 손쉽게 연습하고, 공유하고 즐길 수 있는 플랫폼**의 필요성을 인지하게 되었습니다.

# REON 소개📄
* REON은 다양한 작품의 명장면을 따라하며 즐겁게 연기하는 서비스입니다.:astonished:
* 홀로 **연기 연습**, 다른 유저와 **연기 베틀**이 가능합니다.:film_frames:
* 사용자의 연기를 **AI가 평가**한 후 연기 점수를 제공합니다.:100:
* 자신의 연기 영상을 공유하며 다른 사용자들과 소통할 수 있습니다.	:clap:

# 기능 소개💡
* REON의 주요 기능은 다음과 같습니다!

## 같이하기 :movie_camera:

|같이하기-백스테이지|같이하기-베틀룸|
|:---:|:---:|
| ![같이하기-백스테이지](./assets/gif/같이하기-백스테이지GIF.gif) | ![같이하기-배틀룸GIF.gif](./assets/gif/같이하기-배틀룸GIF.gif) |
|연기 대결을 하기 전 백스테이지입니다!|연기 대결을 진행하는 베틀룸입니다!|
- 1:1 화상 연기 배틀을 진행합니다.
- 표정과 음성을 이용하여 연기를 채점합니다.
- AI 모델로 원본 영상과의 감정을 비교하여 채점합니다.
- 사용자의 음성을 STT로 변환하여 원본 영상의 대본과 비교하여 채점합니다.

## 투표해줘 :clipboard:
|연기영상 업로드|투표해줘 게시판|
|:---:|:---:|
| ![마이페이지-업로드](./assets/gif/마이페이지-업로드GIF.gif) | ![투표해줘-일반](./assets/gif/투표해줘-일반GIF.gif) |
|저장한 연기영상을 투표해줘 게시판에 업로드 할 수 있습니다!|유저들이 업로드한 연기영상을 볼 수 있습니다!|

|이달의 인기영상|커뮤니케이션|
|:---:|:---:|
| ![투표해줘-인기영상](./assets/gif/투표해줘-인기영상GIF.gif) | ![투표해줘-좋아요댓글](./assets/gif/투표해줘-좋아요댓글GIF.gif) |
|유저들이 업로드한 연기영상을 볼 수 있습니다!|댓글과 좋아요로 소통할 수 있습니다!|

- 연기 배틀을 종료하고, 여러분의 연기를 저장할 수 있습니다.
- 저장한 연기 영상을 공유하여 다른 사용자들과 소통하고 평가할 수 있습니다.
- 많은 사랑을 받은 연기는 REON 인기 영상으로 진입합니다.

## 혼자하기 :selfie:
|연기 연습|연기 영상 교체|
|:---:|:---:|
| ![혼자하기-게임](./assets/gif/혼자하기-게임GIF.gif) |![혼자하기-게임변경](./assets/gif/혼자하기-게임변경GIF.gif) | 
|혼자 연기연습을 할 수 있습니다!|연기 영상 변경이 가능합니다!|
- 연기 배틀에 부담을 느끼거나 연습을 하고 싶을때 홀로 연기연습을 할 수 있습니다.
- 홀로 연기하고 채점을 진행하면서 연기 실력을 향상시킬 수 있습니다.



# 서비스 이용 시나리오

|메인페이지|메인페이지|
|:---:|:---:|
| ![메인페이지1](./assets/images/메인페이지.png) | ![메인페이지2](./assets/images/메인페이지2.png) |
|상단 메뉴바를 이용하여 원하는 서비스를 이용할 수 있습니다.|사용자 메뉴를 선택하여 로그인, 로그아웃, 마이페이지 이동이 가능합니다.|

|같이하기-백스테이지|같이하기-튜토리얼|
|:---:|:---:|
| ![같이하기-백스테이지](./assets/images/같이하기-벡스테이지.png) | ![같이하기-튜토리얼](./assets/images/같이하기-튜토리얼.png) |
|상단 메뉴 같이하기 선택 시 입장하게 되는 페이지입니다.<br> 개인의 배틀 정보와 현재 top랭킹을 확인 할 수 있습니다.|게임을 시작하기에 앞서 튜토리얼을 통해 게임 방법을 확인 할 수 있습니다.|

|같이하기- 베틀페이지(1)|같이하기- 베틀페이지(2)|
|:---:|:---:|
| ![같이하기-베틀페이지1](./assets/images/같이하기-베틀페이지1.png) | ![같이하기-베틀페이지2](./assets/images/같이하기-베틀페이지2.png) |
|매칭된 유저의 화면이 보이고 가운데에 연기할 연기 영상 및 대본이 보입니다.|연기 영상이 보여진 후 차례대로 연기를 진행합니다.|

|같이하기-베틀페이지(3)|같이하기-베틀페이지(4)|
|:---:|:---:|
| ![같이하기-베틀페이지3](./assets/images/같이하기-베틀페이지3.png) | ![같이하기-베틀페이지4](./assets/images/같이하기-베틀페이지4.png) |
|자신의 차례가 아니라면 음소거 처리됩니다.|게임이 종료되면 승패 여부가 보여지고 자신의 연기 영상을 저장할 수 있습니다.|

|마이페이지|마이페이지-프로필 수정|
|:---:|:---:|
| ![마이페이지](./assets/images/마이페이지.png) | ![마이페이지-프로필수정](./assets/images/마이페이지-프로필수정.png) |
|유저 정보와 공개 연기영상, 비공개 연기영상, 좋아요를 누른 연기영상을 볼 수 있습니다.<br>다른 유저의 페이지라면 해당 유저가 공개한 연기 영상만 확인이 가능합니다.|프로필 이미지 수정이 가능합니다.|

|마이페이지-프로필 수정|마이페이지-비공개 영상 상세보기|
|:---:|:---:|
| ![마이페이지-프로필수정2](./assets/images/마이페이지-프로필수정2.png) | ![마이페이지-비공개영상상세보기](./assets/images/마이페이지-비공개영상상세보기.png) |
|자신의 닉네임, 자기소개 수정이 가능합니다.|저장된 연기영상을 볼 수 있고 투표해줘 게시판에 작성이 가능합니다.|

|마이페이지-게시글|마이페이지-좋아요|
|:---:|:---:|
| ![마이페이지-게시글](./assets/images/마이페이지-게시글.png) | ![마이페이지-좋아요](./assets/images/마이페이지-좋아요.png) |
|투표해줘 게시판에 올린 연기영상을 의미합니다.<br> 좋아요와 댓글로 소통이 가능합니다.|내가 좋아요를 누른 다른 사람의 연기영상을 볼 수 있습니다.|

|투표해줘 게시판|투표해줘-인기영상|
|:---:|:---:|
| ![투표해줘-게시판](./assets/images/투표해줘-게시판.png) | ![투표해줘-인기영상](./assets/images/투표해줘-인기영상.png) |
|소통과 평가를 위해 공개한 연기 영상들을 볼 수 있습니다.|한달동안 가장 좋아요를 많이 받은 영상들을 보여줍니다.|

|혼자하기|혼자하기|
|:---:|:---:|
| ![혼자하기](./assets/images/혼자하기.png) | ![혼자하기2](./assets/images/혼자하기2.png) |
|혼자 연기 연습을 할 수 있는 페이지입니다.|연기를 진행한 뒤 베틀과 동일하게 AI로 채점을 진행합니다.|


# AI 소개🛴
### 사용자의 연기 영상을 원본 영상(배우의 연기 영상) 과 비교하여 점수를 산출합니다.
- 비교 방법은 감정 분류를 통해 나온 감정 확률 값의 차이를 이용합니다.
- 감정 분류는 얼굴 검출과 이미지 분류, 2가지 Task로 구성됩니다.
- ![taskdescribe](./assets/AI/AI_task_describe.png)


- AI 모델 설정과 학습에 대한 상세한 설명은 [Chorong.md](https://lab.ssafy.com/s09-webmobile1-sub2/S09P12C203/-/blob/dev/Chorong.md).

# API 연동 규격서 
https://i9c203.p.ssafy.io/swagger-ui/index.html#/

# 시스템 구조도🏗️

![systemarchitecture](./assets/images/REON_SYSTEMARCHITECTURE.PNG)

# 개발 스택🔧

## Frontend
![frontend](./assets/images/REON_FRONTEND.PNG){: width="600" height=""}

## Backend
![backend](./assets/images/REON_BACKEND.PNG){: width="600" height=""}

## Infra

![INFRA](./assets/images/REON_INFRA.PNG)

## AI

![AI](./assets/images/REON_AI.PNG)

## Tool

![tool](./assets/images/REON_TOOL.PNG){: width="500" height=""}

# 팀원소개 🤝

<table align="center">
    <tr align="center">
        <td>
            Backend
        </td>
        <td>
            Backend
        </td>
        <td>
            Frontend
        </td>
        <td>
            Frontend
        </td>
        <td>
            Frontend
        </td>
        <td>
            Frontend
        </td>
    </tr>
    <tr align="center">
        <td style="min-width: 150px;">
            <a href="https://github.com/marugy">
              <img src="https://avatars.githubusercontent.com/u/91540464?v=4?s=100" width="200">
              <br />
              <b>marugy</b>
            </a> 
        </td>
        <td style="min-width: 150px;">
            <a href="https://github.com/jinsikhong">
              <img src="https://avatars.githubusercontent.com/u/28581484?v=4" width="200">
              <br />
              <b>jinsikhong</b>
            </a>
        </td>
        <td style="min-width: 150px;">
            <a href="https://github.com/PARKHEECHANG">
              <img src="https://avatars.githubusercontent.com/u/122577719?v=4" width="200">
              <br />
              <b>parkheechan</b>
            </a> 
        </td>
        <td style="min-width: 150px;">
            <a href="https://github.com/non-inss">
              <img src="https://avatars.githubusercontent.com/u/122503960?v=4" width="200">
              <br />
              <b>non-inss</b>
            </a> 
        </td>
        <td style="min-width: 150px;">
            <a href="https://github.com/skqlck">
              <img src="https://avatars.githubusercontent.com/u/95553204?v=4" width="200">
              <br />
              <b>skqlck-</b>
            </a> 
        </td>
        <td style="min-width: 150px;">
            <a href="https://github.com/park-js515">
              <img src="https://avatars.githubusercontent.com/u/122588631?v=4" width="200">
              <br />
              <b>park-js515</b>
            </a> 
        </td>
    </tr>
    <tr align="center">
        <td>
            신규람
        </td>
        <td>
            홍진식
        </td>
        <td>
            박희창
        </td>
        <td>
            이명인
        </td>
        <td>
            안종상
        </td>
        <td>
            박주성
        </td>
    </tr>
</table>

#  RE:ON 문화 :passport_control:

#### 1. 혼자 고민하지 않기!
+ 최소 30분, 최대 1시간까지 고민하고 서로에게 질문해요.
+ 문제를 빠르게 해결하면 팀 전체의 개발 효율성을 높일 수 있어요.
#### 2. 알고 있는 지식을 나누기!
+ 프로젝트 진행시 알게된 지식을 나눠요.
+ 다른 이슈에도 적용할 수 있어요.
#### 3. MR에 대해서는 코드 리뷰 꼭하기!
+ MR을 할 때는 항상 코드 리뷰를 진행해요.
+ 서로의 코드를 검토하고 피드백을 주고받으면 품질을 높일 수 있어요.
#### 4. 싫어요 외치기!
+ 무조건적인 좋아요는 금지!
+ 솔직한 피드백으로 프로젝트 완성도를 높일 수 있어요.
#### 5. 자유롭게 의견 공유하기!
+ 자유롭게 솔직한 의견을 공유해요.
+ 다양한 아이디어와 관점을 고려하여 팀의 창의성과 협업을 촉진시킬 수 있어요.
#### 6. 컨벤션 지키기!
+ 정해놓은 Jira, Branch, Commit 컨벤션을 지켜요.
+ 통일화된 컨벤션으로 작업에 대한 정보를 쉽게 알 수 있어요.
#### 7. 쉬운 길보다 옳은 길 찾기!
+ 확장성과 구조를 생각하며 구현해요.
+ 코드의 품질과 안정성을 중요하게 여기며 탄탄하게 코드를 작성해요
#### 8. 웃음을 잃지 않기!
+ 힘들어도 웃음을 잃지 않아요.
+ 항상 긍정적인 마인드로 좋은 분위기를 형성해요.

