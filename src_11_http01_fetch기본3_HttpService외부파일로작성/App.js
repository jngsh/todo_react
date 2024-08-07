import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';
import { fetchUserList } from './http/HttpService.js';
import UserList from './components/UserList.js';

function App() {


  const [userList, setUserList] = useState([]);


  useEffect(() => {

    var req = async function () {

      var userList = await fetchUserList(2); // 2 페이지
      setUserList(userList);
    };
    req();
  }, []);


  return (
    <div className="App">
      <h2>UserList 목록보기</h2>
      <UserList data={userList} />
    </div>
  );
}

export default App;
