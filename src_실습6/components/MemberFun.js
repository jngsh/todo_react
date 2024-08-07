import './MemberFun.css';

function MemberFun(props) {
    return (
        <div className="MemberFun">
            <table >
                {props.memberData.map((member, index) => (
                    <tr key={index}>
                        <td>{member.username}</td>
                        <td>{member.age}</td>
                        <td>{member.address}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export { MemberFun };
