import logo from './logo.svg';
import './App.css';

import {useRef, useState} from 'react';

function App() {

  let xxx = useRef(0); // 일반데이터 저장 용도 (드문 경우). {current:0}. 값이 변경돼도 화면 재랜더링이 안 됨. UI 변경과 무관

  function up(){
    console.log(xxx);
    xxx.current = xxx.current + 1;
    console.log(xxx.current);
  }

  console.log("App"); // 한 번만 랜더링됨. 값 변경해도 화면 재랜더링 안 됨.
  return (
    <div className="App">
      <h2>ref 사용</h2>
      ref값: {xxx.current}
      <button onClick={up}>+</button>
    </div>
  );
}

export default App;
