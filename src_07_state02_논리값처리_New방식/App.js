import logo from './logo.svg';
import './App.css';

import {useState} from 'react';

function App() {

  const [isEditing, setIsEditing] = useState(true);

  // 이벤트 함수
  function handleEvent(){
    // OLD 방식
    // setIsEditing(!isEditing);
    // setIsEditing(!isEditing);
    // 2번 하면 값이 안 바뀌어야 되는데 바뀜. 2개가 다 실행되지 않음. 한 번만 실행됨.

    // NEW 방식
    setIsEditing(isEditing=>!isEditing);
    setIsEditing(isEditing=>!isEditing);
    // 2번 하면 값이 안 바뀜. 둘 다 실행됨.
    // 따라서 논리값과 관련된 연산은 arrow 함수 사용
  }

  return (
    <div className="App">
      <h2>논리값 state</h2>
      값:{isEditing?"true":"false"}<br></br> {/* 논리값은 출력이 안 되기 때문에 3항연산자로 출력함 */}
      <button onClick={handleEvent}>edit</button>
    </div>
  );
}

export default App;
