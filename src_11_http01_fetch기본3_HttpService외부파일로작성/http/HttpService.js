
export async function fetchUserList(n) {

    var url = `https://reqres.in/api/users?page=${n}`; // 페이지 다르게
    var response = await fetch(url);
    var json = await response.json();
    var userList = json.data;
    return userList;
}

export async function fetchUserUpdate(){

}


export async function fetchUserSave(){
    
}