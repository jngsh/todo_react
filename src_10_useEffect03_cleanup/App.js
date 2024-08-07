import logo from './logo.svg';
import './App.css';

import {useEffect, useState} from 'react';

function App() {

  const [num, setNum] = useState(0);

  useEffect(
    // 부수기능
    ()=>{
      console.log("useEffect");

      // clean-up
      return ()=>{console.log("clean-up")};
    } // 맨 처음 실행했을 때에는 실행 안 됨. 다음 부수함수가 실행되고 실행된다.
    // }, [state]
    // }, [] // 빈 배열은 한 번만 실행된다. clean-up은 두 번째부터 실행되기 때문에 빈 배열이면 clean-up 실행 안 됨. 따라서 clean-up 쓸 때에는 빈 배열 쓰면 안 됨. 옵션 안 쓰거나 state 쓰거나 둘 중 하나
  );

  function up(){
    setNum(num+1);
  }

  console.log("App");
  return (
    <div className="App">
      값:{num}<br/>
      <button onClick={up}>+</button>
    </div>
  );
}

export default App;
