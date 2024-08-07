import logo from './logo.svg';
import './App.css';

import {useState} from 'react';

function App() {

  const [isEditing, setIsEditing] = useState(true);

  // 이벤트 함수
  function handleEvent(){
    // OLD 방식
    // setIsEditing(!isEditing);

    // NEW 방식
    setIsEditing(isEditing=>!isEditing);
  }

  // 조건부 랜더링 방식 1
  let tag = <>
              <span>홍길동</span>
            </>

  if(!isEditing){
    tag = <>
            <input />
          </>
  }

  return (
    <div className="App">
      <h2>1. if문 이용한 조건부 랜더링</h2>
      {tag}
      <button onClick={handleEvent}>{!isEditing?'SAVE':'EDIT'}</button>

      <h2>2. 3항연산자 이용한 조건부 랜더링</h2>
      {isEditing?<span>홍길동</span>:<input />}
      <button onClick={handleEvent}>{!isEditing?'SAVE':'EDIT'}</button>

      <h2>3. && 이용한 조건부 랜더링</h2>
      {isEditing && <span>홍길동</span>}
      {!isEditing && <input />}
      <button onClick={handleEvent}>{!isEditing?'SAVE':'EDIT'}</button>
    </div>
  );
}

export default App;
