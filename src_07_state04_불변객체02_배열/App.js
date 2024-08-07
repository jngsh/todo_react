import logo from './logo.svg';
import './App.css';

import {useState} from 'react';

function App() {

  const [num, setNum] = useState([]); // 배열

  function handleEvent(){
    // 다음은 불변객체가 아니기 때문에 리액트가 n의 변경사항을 인식하지 못함. 따라서 화면 갱신이 안 됨.
    // num.push(10);
    // setNum(num);

    // 배열 처리는 반드시 다음과 같이 복사본을 만들고 값을 변경하는 방식으로 state를 변경해야 된다.
    var new_num = [...num, 10];
    console.log(new_num, num);
    console.log(new_num === num);

    setNum(new_num);
  }

  return (
    <div className="App">
      <h2>2. 배열 이용한 state 처리</h2>
      값:{num}<br></br>
      <button onClick={handleEvent}>10추가</button>
    </div>
  );
}

export default App;
