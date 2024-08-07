import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';
import { fetchUserList } from './http/HttpService.js';
import UserList from './components/UserList.js';
import ResponseError from './components/ResponseError.js';

function App() {

  const [userList, setUserList] = useState([]);
  const [error, setError] = useState(null); // 정상적인 경우 error는 null, 비정상적인 경우는 catch에서 처리

  useEffect(() => {

    var req = async function () {

      try{
        var userList = await fetchUserList(2); // 함수를 호출해서 에러가 발생됨
        setUserList(userList);
      }catch(err){
        console.log("App.fetchUserList", err); // err은 에러 정보
        setError({message:"fetchUserList 에러 발생"}); // 여기서는 json으로 함. 마음대로
      }
    };
    req();
  }, []);


  {/* 에러 발생했을 때에만 ResponseError 화면 보여주기. state값이 null이 아닐 때에만 보여주기
      조건부랜더링 null은 false */}
  return (
    <div className="App">
      <h2>UserList 목록보기</h2>
      { error && <ResponseError message={error} /> }
      { !error && <UserList data={userList} />}
    </div>
  );
}

export default App;
