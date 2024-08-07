import logo from './logo.svg';
import './App.css';

import {useState} from 'react';

function App() {

  const [num, setNum] = useState({n:0}); // JSON

  function handleEvent(){
    // 다음은 불변객체가 아니기 때문에 리액트가 n의 변경사항을 인식하지 못함. 따라서 화면 갱신이 안 됨.
    // num.n += 1;
    // setNum(num);

    // JSON 처리는 반드시 다음과 같이 복사본을 만들고 값을 변경하는 방식으로 state를 변경해야 된다.
    const new_num = {...num, n:num.n+1}; // 복사는 spread 연산자 이용. {n:0, n:1} => key가 똑같아서 병합됨. {n:1}만 남음 
    console.log(new_num, num); // 값 비교
    console.log(new_num === num); // 주소 비교

    setNum(new_num); 
  }

  return (
    <div className="App">
      <h2>1. JSON 이용한 state 처리</h2>
      값:{num.n}<br></br>
      <button onClick={handleEvent}>+</button>
    </div>
  );
}

export default App;
