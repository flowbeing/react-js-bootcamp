import { Link, NavLink } from "react-router-dom";

export default function MainNavigationPage(){

    return(
        // <h1>Main Navigation Page</h1>
        <ul className="main-navigation">
            <li><NavLink to="/" end>Homepage</NavLink></li>
            <li><NavLink to="events" end>Events</NavLink></li>
        </ul>
    )
}