import { forwardRef } from "react";

const Child = forwardRef(
    (props, ref) => { // ref는 props와 따로 받아옴

        console.log(props, ref); // props로는 mesg만 넘어오고 ref는 넘어오지 않음

        return (
            <div className="Child">
                <h2>Child 컴포넌트</h2>
                mesg:{props.mesg}<br></br>
                아이디:<input ref={ref} />
            </div>
        );
    }
);

export default Child;