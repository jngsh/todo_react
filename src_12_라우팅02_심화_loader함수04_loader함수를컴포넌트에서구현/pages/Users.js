import {useLoaderData, useRouteLoaderData} from 'react-router-dom';
import UserList from './UserList';

function Users(){

    // const xxx = useLoaderData(); // 본인 loader 리턴값
    const xxx = useRouteLoaderData("root"); // 부모(id="root") loader 리턴값
    console.log(xxx);

    return(
        <>
            <h2>Users</h2>
            <UserList userList={xxx} />
        </>
    );
}
//////////////////////////////////////
// loader는 외부파일로 만들고 import해서 사용하기
export async function loader() {
    var url = "https://reqres.in/api/users?page=2";
    var response = await fetch(url);
    var json = await response.json();
    var userList = json.data;
    return userList;
}
//////////////////////////////////////
export default Users;