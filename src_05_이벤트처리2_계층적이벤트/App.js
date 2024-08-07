import logo from './logo.svg';
import './App.css';
import Child from './components/Child';

// 부모 컴포넌트
function App() {
  // 함수
  function handleEvent(name){
    console.log("App.handleEvent", name);
  }

  return (
    <div className="App">
      <h2>App 컴포넌트</h2>
      <Child onParent={handleEvent} /> {/* onParent는 사용자가 만든 속성. json으로 넘어감 */}
    </div>
  );
}

export default App;
