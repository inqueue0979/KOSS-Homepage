import '../styles/App.css';
import '../styles/output.css';


function Recruit()
{
  
  return (
    <div className="back" style={{backgroundColor:'black', height: 850}}>
    <div className="square">
      <span></span>
      <span></span>
      <span></span>
      <div>
        <h1 style={{fontSize: 28, fontWeight:500}}>학술 활동과 학교 생활의 즐거움 모두를 손에 쥘 준비가 되셨나요?</h1>
        <button className="a" style={{marginTop: 20, padding:20, fontWeight:700}}>2024-1 KOSS 지원하기</button>
      </div>
    </div>
  </div>
  );
}

export default Recruit;