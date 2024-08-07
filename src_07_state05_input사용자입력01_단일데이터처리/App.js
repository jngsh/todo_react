import logo from './logo.svg';
import './App.css';

import {useState} from 'react';

function App() {

  const [userid, setUserid] = useState('');

  function handleEvent(e){
    setUserid(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();

    console.log("입력값:", userid);
  }

  return (
    <div className="App">
      <h1>사용자 입력 태그 + state 사용</h1>
      입력값:{userid}<br></br>
      <form onSubmit={handleSubmit}>
        아이디:<input type="text" name="userid" value={userid} onChange={handleEvent} />
        <input type="submit" value="로그인" />
      </form>
    </div>
  );
}

export default App;
