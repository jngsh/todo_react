import logo from './logo.svg';
import './App.css';

function Menu(){
  return(
    <div className="Menu">
      <h1>Menu 화면입니다.</h1>
    </div>
  );
}

function Bottom(){
  return(
    <div className="Bottom">
      <h1>Bottom 화면입니다.</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Menu />
      <hr></hr>
      App 컴포넌트입니다.
      <hr></hr>
      <Bottom />
    </div>
  );
}

export default App;
