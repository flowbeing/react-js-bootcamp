import { Outlet, Router, NavLink, useLocation} from "react-router-dom";

import MainNavigationPage from "./MainNavigationPage";

// Active Link: {location.pathname}

export default function RootLayout(){

    const location = useLocation();
    return(
        <>
            <MainNavigationPage/>
            <p style={{textAlign:"center", fontWeight: "bold",  fontFamily: "monospace"}}>Active Route: {location.pathname}</p> 
            <Outlet/>
        </>
    );
    
}