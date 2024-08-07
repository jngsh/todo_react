import {forwardRef, useRef, useImperativeHandle} from 'react';

const Child = forwardRef((props, ref)=>{ // 부모인 App에서 전달한 props와 ref 받음

    const dialog_x = useRef(null); // dialog를 참조하기 위해

    useImperativeHandle(ref, ()=>({modal_open})); // modal_open 메서드가 외부에 있을 때 사용하는 방법

    function modal_open(){
        dialog_x.current.showModal();
    }

    return (
        <div className="Child">
            <h2>Child 컴포넌트</h2>
            <dialog ref={dialog_x}>
                <form method="dialog">
                    아이디:<input /><br></br>
                    비밀번호:<input /><br></br>
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
});

export default Child;