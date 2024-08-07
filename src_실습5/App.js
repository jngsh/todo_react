import logo from './logo.svg';
import './App.css';

import {useState} from 'react';

function App() {

  const [step, setStep] = useState(1);
  const [num, setNum] = useState(0);

  function handleEvent(e){
    // console.log(e.target);
    // setStep(e.target.selectedIndex + 1);
    setStep(Number.parseInt(e.target.value));
  }

  function down(){
    setNum(num - step > 0 ? num - step : 0);
  }

  function up(){
    setNum(num + step);
  }

  return (
    <div className="App">
      <h2>state 실습</h2>
      step:
      <select onChange={handleEvent}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select><br></br>
      num:{num}<br></br>
      <button onClick={()=>down()}>-</button>
      {/* <button onClick={down}>-</button> */}
      <button onClick={()=>up()}>+</button>
      {/* <button onClick={up}>+</button> */}
    </div>
  );
}

export default App;
