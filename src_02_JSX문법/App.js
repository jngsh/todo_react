import logo from './logo.svg';
import './App.css';

// 한 줄이면 return ()는 없어도 된다. 가독성을 위해 enter를 치면 필수다. 그냥 필수라고 보면 됨.
function App(){
  return <div>한 줄이면 return에 괄호가 없어도 된다.</div>
}

// 9. JSX 주석
function App9() {
  return (
    <div>
      <h2>JSX 주석</h2>
      {/*  JSX 주석  */}
      <h2>App 컴포넌트입니다1.</h2>
      {/*
        <h2>App 컴포넌트입니다2.</h2>
      */}
      </div>
  );
}

// 8. 이벤트 구현 시 이벤트 핸들러는 카멜 표기법을 사용해야 된다.
function App8() {

  function go(){
    console.log("go");
  }

  return (
    <div>
      <h2>이벤트 구현</h2>
      <button onClick={go}>OK</button>
    </div>
  );
}

// 7. {…변수} 형식의 spread 연산자 사용 가능
function App7() {

  let target = {href:"http://google.com", target:"_blank"};

  return (
    <div>
      <h2>spread 연산자</h2>
      <a {...target}>구글</a>
    </div>
  );
}

function Menu() {
  return(
      <div className="Menu">
          <h1>Menu 컴포넌트입니다.</h1>
      </div>
  );
}

// 6. && 이용한 조건부 랜더링
function App6() {

  let flag = false;

  return (
    <div>
      <h2>조건부랜더링</h2>
      { flag && <Menu />}<br></br>
      { !flag && <div>hello</div>}<br></br>
    </div>
  );
}

// 5. class 속성과 style 속성
// class 속성명 대신에 className 사용해야 된다.
// style 사용할 때는 반드시 중첩 중괄호를 사용해야 된다.
// css 문법의 사용했던 케밥표기법(font-size, background-color) 대신에 
// 카멜표기법(fontSize, backgroundColor)을 사용해야 된다.
function App5() {
  return (
    <div style={{color:'red', fontSize:'30px', backgroundColor:'yellow'}}>
      Hello
    </div>
  );
}

// 4. 논리값(true/false)와 null은 {변수값} 사용 시 출력이 안 된다.
function App4() {

  let name = "홍길동";
  let address = null;
  let isMarried = true;

  return (
    <div className="App">
      이름:{name}<br></br>
      주소:{address}<br></br>
      결혼여부:{isMarried}<br></br>
    </div>
  );
}

// 3. {변수값}는 산술연산자, 비교연산자, 논리연산자, 3항연산자 사용 가능하다.
function App3() {

  let name = "홍길동";
  const age = 20;

  return (
    <div className="App">
      이름:{name}<br></br>
      나이:{age}<br></br>
      내년나이:{age+1}<br></br>
      30살보다 적냐?:{age < 30}<br></br>
      30살보다 적고 10살보다 많냐?:{age > 10 && age < 30}<br></br>
      30살보다 많으면 많다 출력하고 적으면 적다 출력:{age > 30 ? '많다' : '적다'}<br></br>
    </div>
  );
}

// 2. JSX에서 JS의 변수값 등을 출력할 때는 {변수값} 사용한다.
function App2() {

  let name = "홍길동";
  const age = 20;

  return (
    <div className="App">
      이름:{name}<br></br>
      나이:{age}<br></br>
    </div>
  );
}

// 1. 반드시 단 하나의 root 태그 필요하다.
function App1() {
  return (
    <>
      <div className="App">
        Hello
      </div>
      <div>
        World
      </div>
    </>
  );
}


function App_template() {
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
