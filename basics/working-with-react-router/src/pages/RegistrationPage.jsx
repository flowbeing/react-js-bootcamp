import { Form, useFetcher, useLocation, redirect, useLoaderData, defer } from "react-router-dom";
import { useEffect } from "react";

export default function RegistrationPage(){

    const fetcher = useFetcher();
    const { data, state } = fetcher;


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
                <fetcher.Form method="POST" action="/">
                    {/* <label>First Name</label> */}
                    <input type="text" name="first-name" placeholder="First Name"/>
                    <input type="text" name="last-name" placeholder="Last Name"/>
                    <input type="text" name="email" placeholder="Email"/>
                    <input type="text" name="password" placeholder="Password"/>
                    <input type="text" name="confirm-password" placeholder="Confirm Password"/>

                    <div style={{display:"flex", justifyContent:"right"}}>
                        <button className="register-button">Submit</button>
                    </div>
                </fetcher.Form>
            </div>
        </>
    );
}

// A LOADER FUNCTION -> CAN BE AN ASYNC FUNCTION
export function registrationPageLoaderFunction(){

    return Math.round(100);
}

// AN ACTION FUNCTION -> FOR USE IN A DELCARED ROUTER
export async function registrationPageActionFunction({request, params}){

    const newUserDetails = await request.formData();

    const newUserFirstName = newUserDetails.get('first-name');
    const newUserLastName = newUserDetails.get('last-name');
    const newUserEmail = newUserDetails.get('email');
    const newUserPassword = newUserDetails.get('password');
    const newUserConfirmPassword = newUserDetails.get('confirm-password');

    
    console.log(newUserFirstName);
    console.log(newUserLastName);
    console.log(newUserEmail);
    console.log(newUserPassword);
    console.log(newUserConfirmPassword);


    return Math.random(100).toString();
}