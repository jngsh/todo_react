
export async function fetchUserList(n) {

    var url = `https://reqres.in/api/users?page=${n}`;

    var response = await fetch(url,{
        method:'GET'
    });

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

// POST 및 PUT 요청은 반드시 다음과 같은 코드를 사용해야 된다. **********************************
export async function fetchUserSave(user){ // user는 json. 이걸 서버에 전달
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
    return userList;
    
}