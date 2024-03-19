import { Form, useFetcher, useLocation, redirect, useLoaderData, defer, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

export default function LoginPage(){

    // a template of useQuery
    const { tdata, isPending, isError } = useQuery({
            queryKey: ['someFunction'],
            queryFn: () => {fetch("https://example.com/")}
        });

    const params = useParams();
    Object.keys(params).map((key) => console.log(`${key}:${params[key]}`));

    const fetcher = useFetcher();
    let { data, state } = fetcher;

    if (data == null) data = {};


    useEffect(() => {

        console.log(`LoginPageAction data: ${data}, LoginPageAction state: ${state}`);

    }, [data, state]);


    return (
        <>
            <h1>Login Page</h1>
            <div style={{ display: "flex", justifyContent: "center"}}>
                <button 
                    style={{ 
                        width: "16rem", 
                        // height: "1.7rem", 
                        // margin: "0 auto",
                        marginBottom: "1rem",
                        padding: ".5rem 0rem",
                        border: "1px solid transparent",
                        // borderTop: "1px solid white",
                        fontFamily: "monospace",
                        fontWeight: "bold",
                        // textDecoration: "overline",
                        background: "transparent",
                        color: "white",
                    }}
                >
                        Enter Your Details To Signup 🎉
                </button>
            </div>
            <div className="register-form" style={{height: "13.5rem"}}>
                <fetcher.Form method="POST">
                    <input type="text" name="email" placeholder="Email"/>
                    <input type="text" name="password" placeholder="Password"/>

                    <div style={{display:"flex", justifyContent:"right"}}>
                        <div className="auth-or-submit-button-and-feedback" style={{border: "none"}}>{
                                Object.keys(data).length > 0 ? data.status : ""
                        }</div>
                        <button className="auth-or-submit-button-and-feedback">Login</button>
                    </div>
                </fetcher.Form>
            </div>
        </>
    );
}

// A LOADER FUNCTION -> CAN BE AN ASYNC FUNCTION
export function loginPageLoaderFunction(){

    return Math.round(100);

}

// AN ACTION FUNCTION -> FOR USE IN A DELCARED ROUTER
export async function loginPageActionFunction({request, params}){

    const userDetails = await request.formData();

    const userEmail = userDetails.get('email');
    const userPassword = userDetails.get('password');

    const authMode = params.authMode;
    
    console.log('hiya');
    console.log(`userEmail: ${userEmail}`);
    console.log(`userPassword: ${userPassword}`);
    console.log(`authMode: ${authMode}`);

    // if (isLogin){
    //     currentAuthOperation = "login";
    // }

    try{

        const response = await fetch(`http://127.0.0.1:8080/custom-fetch/${authMode}`, {
            method: "POST",
            headers: {
                "Accept": 'application/json',
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZhc2RvZnBhc2RmajEyMzQyMyIsImlhdCI6MTcxMDY4ODAyMCwiZXhwIjoxNzEwNzc0NDIwfQ.mPRj5f4kJ5BatpEDOBg1J6wd7RdRfxUoeFOwUke3hpeEDdVbeV3XTFf4juoZRCREOrj_5olGQRyR15ENX3ATaQ",
                "credentials": "include", // 'same-origin',
            },
            cookies: request.cookies,
            body: JSON.stringify({
                userEmail: userEmail,
                userPassword: userPassword,
            })
        });

        if (!response.ok){
            return {status: "error"};
        }

        const resolvedResponse = await response.json();
        console.log(`resolvedResponse login: ${resolvedResponse}`);
        console.log(`response cookies: ${response.cookies}`);
        return resolvedResponse;

    }catch(error){
        return "Login was not successful!"
    }
}