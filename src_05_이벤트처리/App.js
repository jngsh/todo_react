import logo from './logo.svg';
import './App.css';

// 함수형 컴포넌트
function App() {

  // 이벤트 핸들러 함수
  function handleEvent(e){
    console.log("handleEvent", e, e.target, e.target.innerText); // 이벤트 객체에서 필요한 정보 가져올 수 있다.
  }
  function handleEvent1(e){
    console.log("handleEvent1", e);
  }
  function handleEvent2(name, e){
    console.log("handleEvent2", name, e);
  }

  return (
    <div className="App">
      <h2>App 컴포넌트</h2>
      <button onClick={handleEvent}>OK</button>
      <button onClick={()=>handleEvent1()}>OK2</button>
      <button onClick={(e)=>handleEvent1(e)}>OK3</button>
      <button onClick={(e)=>handleEvent2("홍길동", e)}>OK4</button>
    </div>
  );
}

export default App;
