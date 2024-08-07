// select 용
var fetchEvent = async function(){

    console.log("fetchEvent 용");
    // 서버에 있는 데이터 자동으로 싱크를 맞춰줌. 비동기
    // select를 하고 다시 fetchEvent를 할 필요가 없다.

    var url = "https://reqres.in/api/users?page=2";
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
// update 용
// delete 용

export {fetchEvent};