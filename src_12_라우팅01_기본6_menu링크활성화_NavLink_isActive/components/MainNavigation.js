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
        </div>
    );
}

export {MainNavigation};