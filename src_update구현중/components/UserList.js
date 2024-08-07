

function UserList({data, onRemove}){
    
   // 데이터는 부모가 가지고 있음
   // 자식 버튼 누르면 자식 함수 호출되고 거기서 부모 함수 호출

   //삭제
  function handleRemove(id){
   console.log("UserList.handleRemove", id);
   onRemove(id);
  }

  // 수정
  function handleUpdate(id){
   console.log("UserList.handleUpdate", id);
   ontimeupdate(id);
  }
 
    return(
        <table border="1">
         <thead>
           <tr>
             <th>id</th>
             <th>email</th>
             <th>first_name</th>
             <th>avatar</th>
             <th>삭제</th>
             <th>수정</th>
           </tr>
           </thead>
           <tbody>
            {
               data.map((row,idx)=>
               <tr key={idx}>
                  <td>{row.id}</td>
                  <td>{row.email}</td>
                  <td>{row.first_name}</td>
                  <td><img src={row.avatar} width={100} height={100} alt="" /></td>
                  <td><button onClick={()=>handleRemove(row.id)}>삭제</button></td>
                  <td><button onClick={()=>handleUpdate(row.id)}>수정</button></td>
               </tr>
            ) 
            }
           </tbody>
       </table>
    );
}

export default   UserList;