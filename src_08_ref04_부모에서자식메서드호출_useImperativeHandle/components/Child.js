import { forwardRef, useImperativeHandle, useRef } from "react";

const Child = forwardRef(
    (props, ref) => {

        console.log(props, ref);

        const input_ref = useRef(null); // 함수 호출한다고 ref를 썼기 때문에 새로 만들어 주는 것.

        //////////////////////////////////////////
        // 방법 1: 외부에서 작성된 함수 선언식 이용
        // ({함수명, 함수명2})
        useImperativeHandle(ref, ()=>({open2}));
        // App에서 호출할 메서드
        function open2(){
            console.log("open 메서드 방법 1");
        }

        // 방법 2: return {} 안에서 작성된 함수 선언식 이용 (권장)
        useImperativeHandle(ref, ()=>{
            return {
                // 메서드 여러 개 가능
                open(x){
                    console.log("open 메서드 방법 2", x);
                },
                close(){
                    console.log("close 메서드");
                },
                input_value(){
                    return input_ref.current.value; // 메서드에서 부모한테 리턴해줌
                }
            }
        });
        //////////////////////////////////////////

        return (
            <div className="Child">
                <h2>Child 컴포넌트</h2>
                mesg:{props.mesg}<br></br>
                아이디:<input ref={input_ref} />
            </div>
        );
    }
);

export default Child;