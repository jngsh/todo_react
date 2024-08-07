import logo from './logo.svg';
import './App.css';
import PersonList from './components/PersonList';

let persons = [
  {name:"홍길동", age:20},
  {name:"이순신", age:30},
  {name:"유관순", age:40},
  {name:"강감찬", age:50}
];

function App() {
  return (
    <div className="App">
      <h1>학생 정보</h1>
      <PersonList persons={persons} />
    </div>
  );
}

export default App;
