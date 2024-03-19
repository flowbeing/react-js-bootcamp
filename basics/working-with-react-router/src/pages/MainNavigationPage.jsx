import { Link, NavLink, Router, form } from "react-router-dom";
import { useState } from "react";

export default function MainNavigationPage(){

    // console.log(Router.toString());
    const [isLogin, setIsLogin] = useState(false);

    return(
        // <h1>Main Navigation Page</h1>
        <ul className="main-navigation">
            <li><NavLink to="/" end>Homepage</NavLink></li>
            <li><NavLink to="events">Events</NavLink></li>
            <li><NavLink to={isLogin ? "/login" : "/register"} onClick={() => setIsLogin(prev => !prev)}>Auth</NavLink></li>
            <li><NavLink to="my-details">My Details</NavLink></li>
            {/* <li><NavLink to="events" relative="path">Events</NavLink></li>
            <li><NavLink to="events">Events</NavLink></li> */}
        </ul>
    )
}