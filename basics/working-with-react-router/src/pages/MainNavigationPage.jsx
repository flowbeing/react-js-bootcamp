import { Link, NavLink, Router } from "react-router-dom";

export default function MainNavigationPage(){

    // console.log(Router.toString());

    return(
        // <h1>Main Navigation Page</h1>
        <ul className="main-navigation">
            <li><NavLink to="/" end>Homepage</NavLink></li>
            <li><NavLink to="events">Events</NavLink></li>
            <li><NavLink to="register">Register</NavLink></li>
            <li><NavLink to="my-details">My Details</NavLink></li>
            {/* <li><NavLink to="events" relative="path">Events</NavLink></li>
            <li><NavLink to="events">Events</NavLink></li> */}
        </ul>
    )
}