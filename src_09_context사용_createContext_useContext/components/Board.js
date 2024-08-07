import { useContext } from "react";
import { UserContext } from '../store/user-context';

function Board(){

    const value = useContext(UserContext);

    return(
        <div className="Board">
            이름:{value}
        </div>
    );
}

export default Board;