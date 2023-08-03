import RankerItem from './RankerItem';
import { SContainer, SSNSContainer, SRank } from "../BackStage/UserInfo/style";

const DummyData = [
  {
    name: '유저1',
    tier: 'Gold',
  },
  {
    name: '유저2',
    tier: 'Gold',
  },
  {
    name: '유저3',
    tier: 'Gold',
  },
  {
    name: '유저4',
    tier: 'silver',
  },
  {
    name: '유저5',
    tier: 'silver',
  },
];
const RankerList = () => {

//   return (

//     <div className="">
//       🏆랭크순위
//       {DummyData.map((ranker, index) => (
//         <RankerItem key={index} result={ranker} />
//       ))}
//     </div>
  
//   ); 
// };


  return (
    <SContainer>
     
  
      <div className="profile-container">
      
        🏆랭크순위
   
        {DummyData.map((ranker, index) => (
        <RankerItem key={index} result={ranker} />
        ))}
      </div>

    
    </SContainer>
  );
};


export default RankerList;