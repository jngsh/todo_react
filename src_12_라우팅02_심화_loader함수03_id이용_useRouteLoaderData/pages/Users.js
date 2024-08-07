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

export default Users;