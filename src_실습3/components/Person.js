import './Person.css';

function Person(props) {

    console.log(props);

    return (
        <>
            {
                props.person.map((data, idx) =>
                    <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>{data.name}</td>
                        <td>{data.age}</td>
                    </tr>
                )
            }
        </>
    );
}

export { Person };