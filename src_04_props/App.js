import logo from './logo.svg';
import './App.css';

// 자식 컴포넌트
function Avatar(props){
  
  console.log("props:", props); // json 형태로 전달
  var username = props.username; // key를 이용해서 얻어옴
  var age = props.xxx;

  return(
    <div className="Avatar">
      이름:{username}<br></br>
      나이:{age}<br></br>
      주소:{props.address}<br></br>
    </div>
  );
}

function Avatar2(props){

  // 객체분해할당
  const {username, xxx, address} = props;

  return(
    <div className="Avatar2">
      이름:{username}<br></br>
      나이:{xxx}<br></br>
      주소:{address}<br></br>
    </div>
  );
}

function Avatar3({username, xxx, address}){
  return(
    <div className="Avatar3">
      이름:{username}<br></br>
      나이:{xxx}<br></br>
      주소:{address}<br></br>
    </div>
  );
}

function Avatar4({username, xxx, address="부산"}){

  console.log("address:", address); // "부산" 없으면 undefined

  return(
    <div className="Avatar4">
      이름:{username}<br></br>
      나이:{xxx}<br></br>
      주소:{address}<br></br> {/* "부산" 없으면 값이 안 나옴 */}
    </div>
  );
}

function Avatar5({username, age, address}){
  return(
    <div className="Avatar5">
      이름:{username}<br></br>
      나이:{age}<br></br>
      주소:{address}<br></br>
    </div>
  );
}

function Avatar6(props){
  return(
    <div className="Avatar6">
      이름:{props.username}<br></br>
      나이:{props.age}<br></br>
      주소:{props.address}<br></br>
    </div>
  );
}

// 부모 컴포넌트
function App() {

  var username = "홍길동";
  var age = 20;
  var address = "서울";

  var person = {username:"이순신", age:20, address:"부산"};

  return (
    <div className="App">
      <h2>App 컴포넌트</h2>
      1:<Avatar username={username} xxx={age} address={address} /><br></br>
      2:<Avatar2 username={username} xxx={age} address={address} /><br></br>
      3:<Avatar3 username={username} xxx={age} address={address} /><br></br>
      4:<Avatar4 username={username} xxx={age} /><br></br>
      5:<Avatar5 {...person}/><br></br>
      6:<Avatar6 {...person}/><br></br>
    </div>
  );
}

export default App;
