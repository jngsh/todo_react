import logo from './logo.svg';
import './App.css';

import {useRef} from 'react';
import Child from './components/Child';

function App() {

  const xxx = useRef(null);

  function handleEvent(){
    // console.log("Child input값 출력:", xxx.current.value);
    console.log("Child input값 출력:", xxx.current.input_value());
    
    // Child open 메서드
    xxx.current.open(100);
    xxx.current.close();
  }

  return (
    <div className="App">
      <h2>App 컴포넌트</h2>
      <Child ref={xxx} mesg="hello" /><br></br>
      <button onClick={handleEvent}>Child의 input값 얻기</button>
    </div>
  );
}

export default App;
