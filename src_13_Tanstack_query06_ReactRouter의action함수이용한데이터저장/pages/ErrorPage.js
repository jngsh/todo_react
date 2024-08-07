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
            statusText:{error.statusText}<br/>
            message:{error.data}<br/>
        </>
    );
}

export default ErrorPage;