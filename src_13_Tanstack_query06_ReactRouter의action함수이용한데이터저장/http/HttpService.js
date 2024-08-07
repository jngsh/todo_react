import { QueryClient } from "@tanstack/react-query";

// select 용
var fetchEvent = async function(searchParam){

    // Users 클릭 시 전달되는 파라미터는 {queryKey:['todos'], meta:} 임.
    // UsersSearch 클릭 시 입력시킨 page값이 전달됨.

    console.log("searchParam: ", searchParam);

    console.log("fetchEvent 용");
    // 서버에 있는 데이터 자동으로 싱크를 맞춰줌. 비동기
    // select를 하고 다시 fetchEvent를 할 필요가 없다.

    var url = "https://reqres.in/api/users";

    if(searchParam.queryKey){
        url+="?page=2";
    }else{
        url+=`?page=${searchParam}`;
    }
    
    var response = await fetch(url, {method:"get"} ); // put 명시적 예외 발생 

    // 에러 처리
    if(!response.ok){
        throw new Error("에러발생");
    }

    var json = await response.json();
    var userList = json.data;
    return userList;
};

// insert 용
var fetchUserSave = async function (user){ // user는 json. 이걸 서버에 전달

    console.log("fetchUserSave 용");

    var url = `https://reqres.in/api/users`; // https와 http 차이
    var response = await fetch(url,{
        method:'POST',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(user) // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
    });

    if(!response.ok){ // ok 상태코드값 200
        console.log("fetchUserList Error 발생");
        throw new Error("fetchUserList Error 발생");
    }

    var json = await response.json();
    var userList = json.data;
    console.log("잘 동작했는지 확인 용도: ", userList);
    return userList;
    
}

// update 용
// delete 용

// 이곳에서 한 번만 생성함. 필요 시 import해서 사용함.
const queryClient = new QueryClient();
export {fetchEvent, fetchUserSave, queryClient};