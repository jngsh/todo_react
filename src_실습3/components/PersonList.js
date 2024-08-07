import './PersonList.css';
import {Person} from './Person.js';

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
                    <Person person={props.persons}/>
                </tbody>
            </table>

        </div>
    );
}

export default PersonList;