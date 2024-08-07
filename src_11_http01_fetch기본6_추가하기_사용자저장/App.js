import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';
import UserList from './components/UserList.js';
import { fetchUserList, fetchUserSave } from './http/HttpService.js';
import ResponseError from './components/ResponseError.js';

function App() {

  const [userList, setUserList] = useState([]);
  const [error, setError] = useState(null); // 정상적인 경우 error는 null, 비정상적인 경우는 catch에서 처리
  const [modalIsOpen, setModelIsOpen] = useState(false);
  const [user, setUser] = useState(null); // 삭제한 id를 저장할 state
  const [isEdit, setIsEdit] = useState(false);
  const [inputs, setInputs] = useState({ // 추가할 사용자를 저장할 state
    id:"",
    email:"",
    first_name:"",
    last_name:"",
    avatar:"https://reqres.in/img/faces/12-image.jpg" // 서버 연동이 안되기 때문에 파일이 없어서 avatar는 고정된 값으로 줌
  });

  useEffect(() => {
    var req = async function () {
      try {
        var userList = await fetchUserList(2);
        setUserList(userList);
      } catch (err) {
        console.log("App.fetchUserList", err);
        setError({ message: "fetchUserList 에러발생" });
      }
    };
    req();
  }, []);

  //삭제-모달창이용해서 확인. 자식에서 호출
  function handleRemove(del_id) {
    console.log("App.handleRemove", del_id);
    setModelIsOpen(modalIsOpen => !modalIsOpen); // 논리값 처리 New 방법
    setUser(del_id); // 삭제할 id 저장
  }

  function handleRemoveConfirm() {
    console.log("App.handleRemoveConfirm");
    setModelIsOpen(modalIsOpen => !modalIsOpen);

    var new_userList = userList.filter((row, idx) => row.id !== user); // 배열에서 어떤 값을 삭제할 때. 삭제할 값을 뺀 나머지를 리턴
    console.log(new_userList);
    setUserList(new_userList);
  }

  // 추가 버튼 state
  function handleIsEdit() {
    console.log("App.handleSave");
    setIsEdit(isEdit => !isEdit);
  }

  function handleChange(e) {
    // console.log(e.target);
    var new_inputs = {...inputs, [e.target.name]:e.target.value};
    setInputs(new_inputs);
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log("inputs: ", inputs);

    // 서버연동
    let response = fetchUserSave();
    console.log("response: ", response);

    // 로컬 변경
    var new_userList = [...userList, inputs]; // 삭제는 안 됨
    setUserList(new_userList);
    setIsEdit(isEdit => !isEdit);
  }

  console.log("userList: ", userList); // 함수가 끝나고 state가 바뀜. React 특징. 비동기


  return (
    <div className="App">
      {/* 모달창 open이 true냐 false냐에 따라 보이거나 안 보이거나. open은 state로 */}
      <dialog open={modalIsOpen}>
        <h2>진짜로 삭제할까요?</h2>
        <button onClick={() => setModelIsOpen(modalIsOpen => !modalIsOpen)}>cancel</button>
        <button onClick={handleRemoveConfirm}>ok</button>
      </dialog>

      <h2>UserList 목록보기</h2>
      {error && <ResponseError message={error} />}
      {!error && <UserList data={userList} onRemove={handleRemove} />}

      <hr />
      {!isEdit && <button onClick={handleIsEdit}>추가</button>}

      {isEdit &&
        <form onSubmit={handleSubmit}>
          id <input type="text" name="id" onChange={handleChange} value={inputs.id} /><br />
          email <input type="text" name="email" onChange={handleChange} value={inputs.email} /><br />
          first_name <input type="text" name="first_name" onChange={handleChange} value={inputs.first_name} /><br />
          last_name <input type="text" name="last_name" onChange={handleChange} value={inputs.last_name} /><br />
          <button>저장</button>
        </form>
      }
    </div>
  );
}

export default App;
