import logo from './logo.svg';
import './App.css';

import {useState} from 'react';

function App() {

  const [inputs, setInputs] = useState({userid:'', passwd:''});

  
  function handleEvent(e){
    var new_inputs = {...inputs, [e.target.name]:e.target.value};
    setInputs(new_inputs);
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(inputs);
  }

  return (
    <div className="App">
      <h1>사용자 입력 태그 + state 사용</h1>
      <form onSubmit={handleSubmit}>
        아이디:<input type="text" name="userid" onChange={handleEvent} value={inputs.userid} /><br></br>
        비밀번호:<input type="text" name="passwd" onChange={handleEvent} value={inputs.passwd} /><br></br>
        <input type="submit" value="로그인" />
      </form>
    </div>
  );
}

export default App;
