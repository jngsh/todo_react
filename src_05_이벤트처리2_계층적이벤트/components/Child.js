
// 자식 컴포넌트
function Child(props) {
    console.log(props);
    var fun = props.onParent;

    // 이벤트함수
    function handleChildEvent() {
        // 복잡한 코드 작업
        fun("홍길동");
    }

    return (
        <div className="Child">
            <h2>Child 컴포넌트</h2>
            <button onClick={fun}>부모함수호출1</button><br></br>
            <button onClick={() => fun("홍길동")}>부모함수호출2</button><br></br>
            <button onClick={() => handleChildEvent()}>부모함수호출3</button><br></br>
        </div>
    );
}

export default Child;