import { useContext } from "react";
import { UserContext } from '../store/user-context';

function UserList() {

    const userList = useContext(UserContext);

    return (
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
                            <td><img src={row.avatar} width={100} height={100} /></td>
                        </tr>
                    )
                }
            </tbody>
        </table>

    );
}

export { UserList };