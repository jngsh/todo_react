import {useLoaderData} from 'react-router-dom';
import UserList from './UserList';

function UserSinglePage(){

    const xxx = useLoaderData();
    console.log(xxx);

    return(
        <>
            <h2>UserSinglePage</h2>
        </>
    );
}

export default UserSinglePage;