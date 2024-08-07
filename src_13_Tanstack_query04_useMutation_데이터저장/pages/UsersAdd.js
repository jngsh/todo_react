import { useEffect, useState } from 'react';
import UserList from './UserList.js';
import { fetchEvent, fetchUserSave } from '../http/HttpService.js';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';

import { useRef } from 'react';
import {Link, useNavigate} from 'react-router-dom';

function UsersAdd() {

    const navigate = useNavigate();

    // 즉시 호출 안 되고 반드시 mutate 메서드를 호출해야 된다.
    const {mutate, data, isPending, isError, error} = useMutation({ // 객체분해할당. data가 리턴되는 userList 받아옴
        mutationFn: fetchUserSave,
        onSuccess: ()=>{
            // 성공 시 리다이렉트
            navigate("/products");
        }
    });

    const [inputs, setInputs] = useState({ // 추가할 사용자를 저장할 state
        id: "",
        email: "",
        first_name: "",
        last_name: "",
        avatar: "https://reqres.in/img/faces/12-image.jpg" // 서버 연동이 안되기 때문에 파일이 없어서 avatar는 고정된 값으로 줌
    });

    function handleChange(e) {
        var new_inputs = { ...inputs, [e.target.name]: e.target.value };
        setInputs(new_inputs);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("inputs: ", inputs);
        mutate(inputs); // 전달하고자 하는 데이터
    }

    // 화면출력 코드
    let content;
    if(isPending){
        content = "로딩중입니다.";
    }

    if(isError){
        content = "에러 발생됨";
    }

    if(data){
        content = <UserList data={data}/>
    }

    return (
        <>
            <h2>UsersAdd</h2>
            {content}<br/>
            <form onSubmit={handleSubmit}>
                id <input type="text" name="id" onChange={handleChange} value={inputs.id} /><br />
                email <input type="text" name="email" onChange={handleChange} value={inputs.email} /><br />
                first_name <input type="text" name="first_name" onChange={handleChange} value={inputs.first_name} /><br />
                last_name <input type="text" name="last_name" onChange={handleChange} value={inputs.last_name} /><br />
                <button>저장</button>
            </form>
        </>
    );
}

export default UsersAdd;