import { Outlet } from "react-router-dom";

import MainNavigationPage from "./MainNavigationPage";

export default function RootLayout(){
    
    return(
        <>
            <MainNavigationPage/>
            <Outlet/>
        </>
    );
}