import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';

function App() {

  const [userList, setUserList] = useState([]);

  var url = "https://reqres.in/api/users?page=2";

  useEffect(() => {
    var req = async function () {
      var response = await fetch(url);
      var json = await response.json();
      var userList = json.data;
      setUserList(userList);
      // console.log(userList);
    };
    req(); // 호출
  }, []); // 옵션은 빈 배열. 단 한 번만 실행하는 게 베스트

  return (
    <div className="App">
      <table border="1">
        <tr>
          <th>id</th>
          <th>email</th>
          <th>first_name</th>
          <th>avatar</th>
        </tr>
      {
        userList.map((row, idx)=>
            <tr key={idx}>
              <td>{row.id}</td>
              <td>{row.email}</td>
              <td>{row.first_name}</td>
              <td><img src={row.avatar} width={100} height={100} /></td>
            </tr>
        )
      }
      </table>
    </div>
  );
}

export default App;
