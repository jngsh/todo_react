import { useRouteError } from "react-router-dom";
import { MainNavigation } from "../components/MainNavigation";

function ErrorPage(){
    const error = useRouteError();
    console.log(error);

    return(
        <>
            <MainNavigation />
            <hr/>
            <h2>에러 페이지</h2>
            status:{error.status}<br/>
            message:{error.data.message}<br/>
            message2:{error.data.message2}<br/>
        </>
    );
}

export default ErrorPage;