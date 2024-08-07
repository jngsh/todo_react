import logo from './logo.svg';
import './App.css';

import {useEffect, useState} from 'react';

import UserList  from './components/UserList.js';
import { fetchUserList } from './http/HttpService.js';
import ResponseError from './components/ResponseError.js';

function App() {

  const [userList, setUserList] = useState([]);
  const [error, setError] = useState(null); // 정상적인 경우 error는 null, 비정상적인 경우는 catch에서 처리
  const [modalIsOpen, setModelIsOpen] = useState(false);
  const [user, setUser] = useState(null); // 삭제한 id를 저장할 state

  useEffect(()=>{
      var req = async function(){
        try{
         var userList = await fetchUserList(2);
         setUserList(userList);
        }catch(err){
          console.log("App.fetchUserList", err);
          setError({message:"fetchUserList 에러발생"});
        }
      };
      req();
  },[]);

  //삭제-모달창이용해서 확인. 자식에서 호출
  function handleRemove(del_id){
     console.log("App.handleRemove", del_id);
     setModelIsOpen(modalIsOpen=>!modalIsOpen); // 논리값 처리 New 방법
     setUser(del_id); // 삭제할 id 저장
  }

  function handleRemoveConfirm(){
    console.log("App.handleRemoveConfirm");
    setModelIsOpen(modalIsOpen=>!modalIsOpen);

    var new_userList = userList.filter((row, idx)=>row.id !== user); // 배열에서 어떤 값을 삭제할 때. 삭제할 값을 뺀 나머지를 리턴
    console.log(new_userList);
    setUserList(new_userList);
  }

  return (
    <div className="App">
       {/* 모달창 open이 true냐 false냐에 따라 보이거나 안 보이거나. open은 state로 */}
       <dialog open={modalIsOpen}>
         <h2>진짜로 삭제할까요?</h2>
         <button onClick={()=>setModelIsOpen(modalIsOpen=>!modalIsOpen)}>cancel</button>
         <button onClick={handleRemoveConfirm}>ok</button>
      </dialog>

       <h2>UserList 목록보기</h2>
        { error && <ResponseError message={error} /> }
        { !error && <UserList data={userList}  onRemove={handleRemove} /> }  
    </div>
  );
}

export default App;
