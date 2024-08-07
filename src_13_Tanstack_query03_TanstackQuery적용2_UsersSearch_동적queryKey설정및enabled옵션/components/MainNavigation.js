import { Link } from "react-router-dom";

function MainNavigation(){
    return(
        <div>
            <Link to="/">Home</Link><br/>
            <Link to="/products">Products</Link><br/>
            <Link to="/users">Users</Link><br/>
            <Link to="/usersSearch">UsersSearch</Link><br/>
        </div>
    );
}

export {MainNavigation};