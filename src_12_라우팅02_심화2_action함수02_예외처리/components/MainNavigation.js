import { NavLink } from "react-router-dom";
import './MainNavigation.css';

function MainNavigation(){
    return(
        <div>
            <NavLink 
                to="/" 
                className={({isActive})=>isActive?'menu':undefined}
            >Home</NavLink><br/>
            <NavLink 
                to="/products"
                className={({isActive})=>isActive?'menu':undefined}
            >Products</NavLink><br/>
            <NavLink 
                to="/users"
                className={({isActive})=>isActive?'menu':undefined}
            >Users</NavLink><br/>
            <NavLink 
                to="/add-user"
                className={({isActive})=>isActive?'menu':undefined}
            >AddUser</NavLink><br/>
        </div>
    );
}

export {MainNavigation};