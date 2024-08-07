import {useLoaderData} from 'react-router-dom';
import UserList from './UserList';

function Users(){

    const xxx = useLoaderData();
    console.log(xxx);

    return(
        <>
            <h2>Users</h2>
            <UserList userList={xxx} />
        </>
    );
}

export default Users;