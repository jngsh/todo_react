import { useLoaderData } from 'react-router-dom';

function UserList({ userList }) {

    // 방법 1. loader의 리턴값을 Users에서 props로 받아올 수 있다.
    // 방법 2. Users의 자식인 UserList에서도 loader의 리턴값 바로 가져올 수 있다. useLoaderData 이용
    // const xxx = useLoaderData();
    // console.log(xxx);

    return (
        <>
            <h2>UserList</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>email</th>
                        <th>first_name</th>
                        <th>avatar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList.map((row, idx) =>
                            <tr key={idx}>
                                <td>{row.id}</td>
                                <td>{row.email}</td>
                                <td>{row.first_name}</td>
                                <td><img src={row.avatar} width={100} height={100} alt="" /></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    );
}

export default UserList;