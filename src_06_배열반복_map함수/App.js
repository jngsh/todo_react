import logo from './logo.svg';
import './App.css';

////////////////////////////////////////////////
const userList = [{ username: "홍길동1", age: 20, address: "서울1" },
{ username: "홍길동2", age: 50, address: "서울2" },
{ username: "홍길동3", age: 60, address: "서울3" }
];

// js - map 함수
var result = userList.map(function (data, idx) {
  console.log(data, idx);
  return data;
});

var result = userList.map((data, idx) => data);

console.log(result);

////////////////////////////////////////////////

// 컴포넌트
function Avatar({ username, age, address }) {
  return (
    <span className="Avatar">
      이름:{username}, 나이:{age}, 주소:{address}
    </span>
  );
}

function App() {
  return (
    <div className="App">
      <h2>1. 배열의 첨자 이용해서 개별 접근</h2>
      회원1: 이름:{userList[0].username}, 나이:{userList[0].age}, 주소:{userList[0].address}<br></br>
      회원2: 이름:{userList[1].username}, 나이:{userList[1].age}, 주소:{userList[1].address}<br></br>
      회원3: 이름:{userList[2].username}, 나이:{userList[2].age}, 주소:{userList[2].address}<br></br>

      <h2>2. Avatar 컴포넌트 이용</h2>
      회원1: <Avatar {...userList[0]} /><br></br>
      회원2: <Avatar {...userList[1]} /><br></br>
      회원3: <Avatar {...userList[2]} /><br></br>

      <h2>3. 배열의 첨자 반복</h2>
      {/*
          map 함수
          var result = userList.map(function(data, idx){
            console.log(data, idx);
            return data;
          });

          var result = userList.map((data, idx)=>data);

          //////////////////////////////////////////////////////////////////////////////////////////////////////
          key={idx}로 유일한 값 줘서 뭐가 변경됐는지 가상 DOM과 비교 가능하게 함. 유일한 값이면 다 가능. 일반적으로 idx
      */}
      {
        userList.map((data, idx) => {
          return <div key={idx}>회원{idx + 1}: 이름:{data.username}, 나이:{data.age}, 주소:{data.address}</div>
        })
      }

      <h2>4. Avatar 컴포넌트 반복 1</h2>
      {
        userList.map((data, idx) => {
          return <>
            회원{idx+1}: <Avatar key={idx} {...data} /><br></br>
          </>
        })
      }

      <h2>4. Avatar 컴포넌트 반복 2</h2>
      {
        userList.map((data, idx) => {
          return <>
            회원{idx+1}: <Avatar key={idx} username={data.username} age={data.age} address={data.address} /><br></br>
          </>
        })
      }

      <h2>5. Avatar 컴포넌트 반복 3</h2>
      {
        userList.map((data, idx)=><>회원{idx+1}: <Avatar key={idx} {...data} /><br></br></>)
      }

    </div>
  );
}

export default App;
