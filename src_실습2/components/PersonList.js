import './PersonList.css';

function PersonList(props) {

    console.log(props);

    return (
        <div className="PersonList">
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>나이</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.persons.map((data, idx) =>
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>{data.name}</td>
                                    <td>{data.age}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    );
}

export default PersonList;