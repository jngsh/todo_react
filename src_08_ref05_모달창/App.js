import logo from './logo.svg';
import './App.css';

import {useRef} from 'react';
import Child from './components/Child';

function App() {

  const xxx = useRef(null);

  function show_modal(){ // show_modal()은 App의 메서드
    // Child의 메서드 호출
    xxx.current.modal_open(); // modal_open()은 Child의 메서드
  }

  return (
    <div className="App">
      <h2>App 컴포넌트</h2>
      <button onClick={show_modal}>모달창 열기</button>
      <Child ref={xxx} />
    </div>
  );
}

export default App;
