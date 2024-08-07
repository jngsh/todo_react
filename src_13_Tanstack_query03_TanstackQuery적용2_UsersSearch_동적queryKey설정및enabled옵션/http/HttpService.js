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
// update 용
// delete 용

export {fetchEvent};