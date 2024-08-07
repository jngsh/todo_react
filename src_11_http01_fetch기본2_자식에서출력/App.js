  import logo from './logo.svg';
  import './App.css';

  import { useEffect, useState } from 'react';
  import { UserContext } from './store/user-context';
  import { UserList } from './components/UserList.js';

  function App() {

    const [userList, setUserList] = useState([]);

    var url = "https://reqres.in/api/users?page=2";

    useEffect(() => {
      var req = async function () {
        var response = await fetch(url);
        var json = await response.json();
        var userList = json.data;
        setUserList(userList);
      };
      req();
    }, []);

    return (
      <div className="App">
        <h2>UserList 목록 보기</h2>
        <UserContext.Provider value={userList}>
          <UserList />
        </UserContext.Provider>
      </div>
    );
  }

  export default App;
