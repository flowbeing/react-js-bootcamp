import { Form, useFetcher, useLocation, redirect, useLoaderData, defer } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export default function RegistrationPage(){

    const loaderData = useLoaderData();
    console.log(`registration page loader data: ${loaderData}`);

    const fetcher = useFetcher();
    let { data, state } = fetcher;
    

    if (data == null ) data = {};

    console.log( Object.keys(data).length > 0);


    useEffect(() => {

        console.log(`registerAction data: ${data}, registerAction state: ${state}`);

    }, [data, state]);


    return (
        <>
            <h1>Registration Page</h1>
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
            <div className="register-form">
                <fetcher.Form method="POST">
                    {/* <label>First Name</label> */}
                    <input type="text" name="first-name" placeholder="First Name"/>
                    <input type="text" name="last-name" placeholder="Last Name"/>
                    <input type="text" name="email" placeholder="Email"/>
                    <input type="text" name="password" placeholder="Password"/>
                    <input type="text" name="confirm-password" placeholder="Confirm Password"/>

                    <div style={{display:"flex", justifyContent:"right"}}>
                        <div className="auth-or-submit-button-and-feedback" style={{border: "none"}}>{
                            Object.keys(data).length > 0 ? data.status : ""
                        }</div>
                        <button className="auth-or-submit-button-and-feedback">Sign Up</button>
                    </div>
                </fetcher.Form>
            </div>
        </>
    );
}

// A LOADER FUNCTION -> CAN BE AN ASYNC FUNCTION
export function registrationPageLoaderFunction(){

    return Math.random(100);
}

// AN ACTION FUNCTION -> FOR USE IN A DELCARED ROUTER
export async function registrationPageActionFunction({request, params}){

    const newUserDetails = await request.formData();

    const newUserFirstName = newUserDetails.get('first-name');
    const newUserLastName = newUserDetails.get('last-name');
    const newUserEmail = newUserDetails.get('email');
    const newUserPassword = newUserDetails.get('password');
    const newUserConfirmPassword = newUserDetails.get('confirm-password');

    const authMode = params.authMode;
    console.log(`authMode: ${authMode}`);

    
    console.log(newUserFirstName);
    console.log(newUserLastName);
    console.log(newUserEmail);
    console.log(newUserPassword);
    console.log(newUserConfirmPassword);



    const response = await axios.post(`http://127.0.0.1:8080/custom-fetch/${authMode}`, {withCredentials: true});
    
    // fetch(`http://127.0.0.1:8080/custom-fetch/${authMode}`, {
    //     method: "POST",
    //     headers: {
    //         "Accept": 'application/json',
    //         "Content-Type": "application/json",
    //         "Authorization": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZhc2RvZnBhc2RmajEyMzQyMyIsImlhdCI6MTcxMDY4ODAyMCwiZXhwIjoxNzEwNzc0NDIwfQ.mPRj5f4kJ5BatpEDOBg1J6wd7RdRfxUoeFOwUke3hpeEDdVbeV3XTFf4juoZRCREOrj_5olGQRyR15ENX3ATaQ",
    //         // "credentials": "include", // 'same-origin',
    //     },
    //     credentials: 'same-origin',
    //     body: JSON.stringify({
    //         newUserFirstName: newUserFirstName,
    //         newUserLastName: newUserLastName,
    //         newUserEmail: newUserEmail,
    //         newUserPassword: newUserPassword,
    //         newUserConfirmPassword: newUserConfirmPassword
    //     })
    // });

    if (!response.ok){
        return {status: "error"};
    }

    // const resolvedResponse = await response.json();
    // console.log(`resolvedResponse registrationAction: ${Object.keys(resolvedResponse)}`);
    // console.log(`resolvedResponse Token registrationAction: ${Object.keys(resolvedResponse.data)}`);
    const cookies = response.headers.get("Set-Cookie");
    console.log(`cookies: ${cookies}`);
    console.log(`responseData: ${response.data}`);


    return response.data;

    // return resolvedResponse;

}