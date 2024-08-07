import {useLoaderData} from 'react-router-dom';
import UserList from './UserList';

function UserMultiPage(){

    const xxx = useLoaderData();
    console.log(xxx);

    return(
        <>
            <h2>UserMultiPage</h2>
        </>
    );
}

export default UserMultiPage;