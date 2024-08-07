import {useState} from 'react';
import {MemberFun} from './MemberFun.js';
import './MemberListFun.css';

function MemberListFun(){ 

    const [memberData, setMemberData] = useState([]);

    const [inputs, setInputs] = useState({
        username:'',
        age:'',
        address:''
    });

    function handleEvent(e){
        var new_inputs = {...inputs, [e.target.name]:e.target.value};
        setInputs(new_inputs);
    }
    
    function handleSave(){
        // console.log(inputs);
        var new_memberData = [...memberData, inputs];
        setMemberData(new_memberData);
    }

    return(
        <div className="MemberListFun">
            이름<input type="text" name="username" value={inputs.username} onChange={handleEvent} /><br/>
            나이<input type="text" name="age" value={inputs.age} onChange={handleEvent} /><br/>
            주소<input type="text" name="address" value={inputs.address} onChange={handleEvent} /><br/>
            <button onClick={handleSave}>저장</button>
            <MemberFun memberData={memberData} />
        </div>
    );
}

export {MemberListFun};