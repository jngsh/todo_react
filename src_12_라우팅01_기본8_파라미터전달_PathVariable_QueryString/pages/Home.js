import {Link, useNavigate} from 'react-router-dom';

function Home(){

    const naviagte = useNavigate();
    function handleEvent(){{
        naviagte("/products");
    }}

    return(
        <>
            <h2>Home</h2>
            <p>
                <a href="/products">products로 가기(a태그이용)</a>
            </p>
            <p>
                <Link to="/products">products로 가기(Link태그이용)</Link>
            </p>
            <p>
                <button onClick={handleEvent}>products로 가기(프로그래밍)</button>
            </p>
        </>
    );
}

export default Home;