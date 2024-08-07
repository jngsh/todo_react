import { useEffect, useState } from 'react';
import UserList from './UserList.js';
import { fetchEvent, queryClient } from '../http/HttpService.js'; 
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'

function Users(){

    // TanStack Query
    // useQuery는 조회할 때 사용
    const {data, isLoading, isError, error} = useQuery( // fetchEvent에서 리턴하는 값 data가 받음. isLoading 자체적으로 가지고 있음
        { queryKey: ['todos'], // 캐시로 동작. 대괄호라서 여러 개 가능. todos 아니어도 됨. 기본적으로 캐시로 동작해서 성능이 좋아짐
          queryFn: fetchEvent,
          staleTime: 5000, // 5초 안에 다른 작업이 끝나면 fetch 안 되고, 5초 이후에 다시 fetch가 동작됨.
          gcTime: 10000 // 10초동안만 캐시정보 유지
        }
        ); // 이게 먼저 실행됨. todos로 캐시를 저장함. 밑에 loader에서는 그대로 사용. 놔두는 게 성능이 더 좋음.

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
    
    return(
        <>
            <h2>Users</h2>
            {content}
        </>
    );
}

export async function loader() {
    return queryClient.fetchQuery({
        // useQuery에서 fetch한 데이터를 캐시하고, 캐시된 데이터를 사용하게 됨.
        queryKey:['todos'],
        queryFn:fetchEvent
      });
}

export default Users;