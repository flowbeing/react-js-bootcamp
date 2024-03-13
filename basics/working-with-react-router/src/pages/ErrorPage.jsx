import { useRouteError, useLocation } from "react-router-dom";
import { useEffect} from "react";

export default function ErrorPage() {

    const error = useRouteError();
    const location = useLocation();
    
    // useEffect(()=>{
    //     Object.entries(error).map((entry) => console.log(`${entry[0]}: ${entry[1]}`));
    // }, []);
    
    

    return (
        <>
            <p style={{textAlign:"center", fontWeight: "bold"}}>Active Link: {location.pathname}</p>
            <h1>Error Page</h1>
            <p>{Object.entries(error).map((entry) => console.log(`${entry[0]}: ${entry[1]}`))}</p>
            
        </>
    )
}