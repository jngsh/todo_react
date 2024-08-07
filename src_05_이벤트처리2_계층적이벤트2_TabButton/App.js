import logo from './logo.svg';
import './App.css';
import TabButton from './components/TabButton';

function App() {

  function handleEvent(mesg){
    console.log("클릭한 값: ", mesg); // 예> 클릭한 값: Java
  }

  return (
    <div className="App">
      <h2>App</h2>
      <TabButton onParent={handleEvent}>Java</TabButton>
      <TabButton onParent={handleEvent}>SQL</TabButton>
      <TabButton onParent={handleEvent}>React</TabButton>
      <TabButton onParent={handleEvent}>Spring</TabButton>
    </div>
  );
}

export default App;
