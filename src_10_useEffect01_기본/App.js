import logo from './logo.svg';
import './App.css';

import {useEffect, useState} from 'react';

function App() {

  const [num, setNum] = useState(0);

  useEffect(()=>{console.log("useEffect1")}, []); // App가 처음 랜더링 된 후 후 단 한 번 실행. 콜백
  useEffect(()=>{console.log("useEffect2")}); // App가 랜더링 될 때마다 실행. 콜백
  useEffect(()=>{console.log("useEffect3")}, [num]); // num이 변경될 때마다 실행. 콜백

  function up(){
    setNum(num+1);
  }

  console.log("App"); // 랜더링 될 때마다 실행
  return (
    <div className="App">
      값:{num}<br></br>
      <button onClick={up}>+</button>
    </div>
  );
}

export default App;
