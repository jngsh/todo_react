
import { useEffect, useState } from 'react';
import UserList from './UserList.js';

function Users(){

    const [userList, setUserList] = useState(); // 서버와 연동해서 실제 데이터를 저장
    const [error, setError] = useState(); // 에러가 났을 때
    const [isLoading, setIsLoading] = useState(false); // 로딩 중인지 아닌지
    // 로딩 오래 걸릴 때 사용자에게 진행되고 있다고 보여주기

    useEffect(() => {

        // setIsLoading(isLoading=>!isLoading);
        setIsLoading(true);

        var url = "https://reqres.in/api/users?page=2";
        var req = async function () {
          var response = await fetch(url, {method:"put"} ); // put 명시적 예외 발생 

          // 에러 처리
          if(!response.ok){
            throw new Error("에러발생");
          }

          var json = await response.json();
          var userList = json.data;
          return userList;
        };
        // promise
        req()
        .then((userList)=>setUserList(userList)) // 성공 시 처리
        .catch((error)=>setError(error)) // 에러 발생 시 처리
        .finally(()=>setIsLoading(false)); // 성공이든 에러 발생이든 반드시 실행 
    }, []);

    // 화면출력 코드
    let content;
    if(isLoading){
        content = "로딩중입니다."; // 진행되고 있다는 표시의 동그란 아이콘도 가능
    }

    if(error){
        content = "에러 발생됨";
    }

    if(userList){
        content = <UserList data={userList}/>
    }
    
    return(
        <>
            <h2>Users</h2>
            {content}
        </>
    );
}

export default Users;