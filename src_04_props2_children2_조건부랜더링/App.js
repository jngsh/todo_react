import logo from './logo.svg';
import './App.css';
import daum from './assets/logo_daum.png';

// 자식 컴포넌트
const Avatar = ({username, age, children})=>{
  return(
    <div className="Avatar">
      이름:{username}<br></br>
      나이:{age}<br></br>
      {children}<br></br>
    </div>
  );
}

// 부모 컴포넌트
function App() {

  const person = {username:"홍길동", age:20};

  // 조건에 해당하는 변수
  var showImage = true;

  return (
    <div className="App">
      <h1>App 컴포넌트</h1>

      <Avatar {...person}>
        {/* 
            조건부 랜더링 문법
            {변수 && JSX|값}
        */}
        {
          showImage && 
          <>
            <h2>사진</h2>
            <img src={daum} width="100" height="100" />
          </>
        }
      </Avatar>
    </div>
  );
}

export default App;
