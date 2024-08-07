import logo from './logo.svg';
import './App.css';

import {useState} from 'react';

function App() {

  const [userid, setUserid] = useState('');
  const [passwd, setPasswd] = useState('');

  function handleEvent(e){
    // console.log(e.target);
    if(e.target.name=='userid'){
      setUserid(e.target.value);
    }else if(e.target.name=='passwd'){
      setPasswd(e.target.value);
    }
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(userid, passwd);
  }

  return (
    <div className="App">
      <h1>사용자 입력 태그 + state 사용</h1>
      <form onSubmit={handleSubmit}>
        아이디:<input type="text" name="userid" value={userid} onChange={handleEvent} /><br></br>
        비밀번호:<input type="text" name="passwd" value={passwd} onChange={handleEvent} /><br></br>
        <input type="submit" value="로그인" />
      </form>
    </div>
  );
}

export default App;
