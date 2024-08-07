import {Link} from 'react-router-dom';

function Home(){
    return(
        <>
            <h2>Home</h2>
            <p>
                <a href="/products">products로 가기(a태그이용)</a>
            </p>
            <p>
                <Link to="/products">products로 가기(Link태그이용)</Link>
            </p>
        </>
    );
}

export default Home;