import './Bottom.css';

// 함수표현식
const Bottom = function(){
    return(
        <div className="Bottom">
            <h1>Bottom 컴포넌트입니다.</h1>
        </div>
    );
}

// arrow 함수
const Bottom2 = ()=>{
    return(
        <div className="Bottom">
            <h1>Bottom2 컴포넌트입니다.</h1>
        </div>
    );
}

export {Bottom, Bottom2};