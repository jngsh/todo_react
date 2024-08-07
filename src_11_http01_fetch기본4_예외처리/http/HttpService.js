
export async function fetchUserList(n) {

    var url = `https://reqres.in/api/users?page=${n}`;

    var response = await fetch(url,{
        method:'PUT'
    }); // 일부러 예외 발생. GET 방식인데 PUT으로

    if(!response.ok){ // ok 상태코드값 200
        console.log("fetchUserList Error 발생");
        throw new Error("fetchUserList Error 발생");
    }


    var json = await response.json();
    var userList = json.data;
    return userList;
}

export async function fetchUserUpdate(){

}


export async function fetchUserSave(){
    
}