import { useEffect, useState } from 'react';
import UserList from './UserList.js';
import { fetchEvent } from '../http/HttpService.js'; 
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query';

import { useRef } from 'react';

function UsersSearch(){

    const [searchPage, setSearchPage] = useState('');
    const searchElement = useRef();

    function handleSubmit(event){
        event.preventDefault();
        setSearchPage(searchElement.current.value);
    }

    ///////////////////////////////////////
    const {data, isLoading, isError, error} = useQuery( // fetchEvent에서 리턴하는 값 data가 받음. isLoading 자체적으로 가지고 있음
        { queryKey: ['todos', {page:searchPage}], // Users의 queryKey와 같으면 fetch 안 돼서 searchParam이 안 넘어간다. page가 달라지면 fetch가 됨. queryKey를 동적으로
          queryFn: ()=>fetchEvent(searchPage), // 값을 전달하기 위해 arrow로
          staleTime: 5000, // 5초 안에 다른 작업이 끝나면 fetch 안 되고, 5초 이후에 다시 fetch가 동작됨.
        //   gcTime: 10000 // 10초동안만 캐시정보 유지
          enabled: searchPage!=='' // 검색하지 않아도 fetch가 되는 것을 방지. false면 fetch가 안 됨.
        }
        );

    // 화면출력 코드
    let content;
    if(isLoading){
        content = "로딩중입니다."; // 진행되고 있다는 표시의 동그란 아이콘도 가능
    }

    if(isError){
        content = "에러 발생됨";
    }

    if(data){
        content = <UserList data={data}/>
    }
    ///////////////////////////////////////

    return(
        <>
            <h2>UsersSearch</h2>
            <form onSubmit={handleSubmit}>
                page:<input type="text" ref={searchElement}/>
                <button>검색</button>
            </form>
            <>
                {content}
            </>
        </>
    );
}

export default UsersSearch;