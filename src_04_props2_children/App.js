import logo from './logo.svg';
import './App.css';
import daum from './assets/logo_daum.png';

// 자식 컴포넌트
const Avatar = (props)=>{

  console.log(props);
  var username = props.username;
  var age = props.age;
  var children = props.children;

  return(
    <div className="Avatar">
      이름:{username}<br></br>
      나이:{age}<br></br>
      {children}<br></br>
    </div>
  );
}

// 객체분해할당 1 (권장)
const Avatar2 = ({username, age, children})=>{
  return(
    <div className="Avatar2">
      이름:{username}<br></br>
      나이:{age}<br></br>
      {children}<br></br>
    </div>
  );
}
// 객체분해할당 2
const Avatar3 = (props)=>{

  const {username, age, children} = props;

  return(
    <div className="Avatar3">
      이름:{username}<br></br>
      나이:{age}<br></br>
      {children}<br></br>
    </div>
  );
}

// 부모 컴포넌트
function App() {

  const person = {username:"홍길동", age:20};

  return (
    <div className="App">
      <h1>App 컴포넌트</h1>

      <Avatar {...person}>
        <h2>사진</h2>
        <img src={daum} width="100" height="100" />
      </Avatar>
      <hr></hr>
      <Avatar2 {...person}>
        <h2>사진</h2>
        <img src={daum} width="100" height="100" />
      </Avatar2>
      <hr></hr>
      <Avatar3 {...person}>
        <h2>사진</h2>
        <img src={daum} width="100" height="100" />
      </Avatar3>
    </div>
  );
}

export default App;
