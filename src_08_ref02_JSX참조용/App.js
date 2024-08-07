import logo from './logo.svg';
import './App.css';

import {useRef} from 'react';

function App() {

  const userid = useRef(null);
  const passwd = useRef(null);

  function handleSubmit(e){
    e.preventDefault();
    console.log(userid.current.value, passwd.current.value);
  }

  return (
    <div className="App">
      <h1>사용자 입력 태그 + ref 사용</h1>
      <form onSubmit={handleSubmit}>
        아이디:<input type="text" name="userid" ref={userid} />
        비밀번호:<input type="text" name="passwd" ref={passwd} />
        <input type="submit" value="로그인" />
      </form>
    </div>
  );
}

export default App;
