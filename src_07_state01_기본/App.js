import logo from './logo.svg';
import './App.css';

import {useState} from 'react';

function App() {

  const [num, setNum] = useState(0);
  // console.log(useState(0)); [0, f]

  // +에 대한 이벤트 함수
  function up(){
    setNum(num+1); // 반드시 set 메서드로 변경해야 된다.
  }

  // -에 대한 이벤트 함수
  function down(){
    setNum(num > 0 ? num-1 : 0);
  }

  console.log("App"); // 재랜더링 될 때 App 함수도 다시 만들어 진다.(console에 App이 찍힌다.)
  return (
    <div className="App">
      <h2>num값 변경</h2>
      값:{num}<br></br>
      <button onClick={up}>+</button>
      <button onClick={down}>-</button>
    </div>
  );
}

export default App;
