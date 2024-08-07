import logo from './logo.svg';
import './App.css';
import {Menu} from './components/Menu.js';
import {Bottom, Bottom2} from './components/Bottom.js';

function App() {
  return (
    <div className="App">
      <Menu/>
      <hr></hr>
      App 컴포넌트입니다.
      <hr></hr>
      <Bottom/>
      <Bottom2/>
    </div>
  );
}

export default App;
