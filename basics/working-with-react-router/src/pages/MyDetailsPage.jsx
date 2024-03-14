import { Form, useFetcher, useLoaderData, defer, Await, json } from "react-router-dom";
import { Suspense, useEffect, Fragment } from "react";

import MyDetailsPageForm from "../components/MyDetailsPageForm";

export default function MyDetailsPage(){

    const loaderData = useLoaderData();
    // const { userFirstName, userLastName, userEmail, userOrganizationName, userAddress } = loaderData;
    const userDetailsLoaderData = loaderData.userDetails;

    const fetcher = useFetcher();
    const { data, state } = fetcher;


    useEffect(() => {

        console.log(`myDetailsPageAction data: ${data}, myDetailsPageAction state: ${state}`);
        console.log(`myDetailsPageLoader data: ${userDetailsLoaderData}, type: ${typeof(loaderData)}`);
        console.log(`defered loader data: keys: ${Object.keys(loaderData)}`);
        console.log(Object.keys(loaderData).map(key => loaderData[key]));
        // console.log(`${ userFirstName }, ${ userLastName}, ${userEmail}, ${userOrganizationName}, ${userAddress }`)

    }, [data, state]);


    return (
            <Suspense fallback={<p>Loading..</p>}>
                <Await resolve={userDetailsLoaderData}>
                    { userDetailsInfo => 
                        // console.log(
                        //     userDetailsInfo.userFirstName,
                        //     userDetailsInfo.userLastName,
                        //     userDetailsInfo.userEmail,
                        //     userDetailsInfo.userOrganizationName,
                        //     userDetailsInfo.userAddress
                        // );

                        // return <MyDetailsPageForm 
                        //     userFirstName={userDetailsInfo.userFirstName}
                        //     userLastName={userDetailsInfo.userLastName}
                        //     userEmail={userDetailsInfo.userEmail}
                        //     userOrganizationName={userDetailsInfo.userOrganizationName}
                        //     userAddress={userDetailsInfo.userAddress}
                        // /> 

                        (
                            <>
                                <h1>My Stored Details Page</h1>
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
                                            Using React Router "defer" Hook - Update Your Details Here 🎉
                                    </button>
                                </div>
                                <div className="register-form">
                                    <fetcher.Form method="POST">
                                        {/* <label>First Name</label> */}
                                        <input type="text" name="first-name" defaultValue={userDetailsInfo.userFirstName}/>
                                        <input type="text" name="last-name" defaultValue={userDetailsInfo.userLastName}/>
                                        <input type="text" name="email" defaultValue={userDetailsInfo.userEmail}/>
                                        <input type="text" name="organization-name" defaultValue={userDetailsInfo.userOrganizationName}/>
                                        <input type="text" name="address" defaultValue={userDetailsInfo.userAddress}/>

                                        <div style={{display:"flex", justifyContent:"right"}}>
                                            <button className="register-button">Submit</button>
                                        </div>
                                    </fetcher.Form>
                                </div>
                            </>
                        )

                        
                    }
                </Await>
            </Suspense>
    );
}

// THIS ASYNC LOADER FUNCTION WOULD IDEALLY CONTAIN AN AWAITED ASYNC FETCH FUNCTION THAT WOULD RETURN DATA
// E.G A FETCH FUNCTION THAT WOULD RETURN A PREF
async function myDetailsLoaderFunctionAsync() {

    // const t = new Promise ((response, reject) => { return response("a response")});
    // await setTimeout(() => {}, 5000);
    
    // return {
    //     userFirstName: "First Name",
    //     userLastName: "Last Name",
    //     userEmail: "Email",
    //     userPassword: "Password",
    //     userConfirmPassword: "Confirm Password"
    // };

    // await setTimeout(() => {}, 5000);

    try{

        const response = await fetch("http://127.0.0.1:8080/custom-fetch");

        if (!response.ok) {
            throw new Error("An error occured while fetching user's details");
        }
        else {
            const result = await response.json();
            console.log(`result: ${result.userDetails}`);
            return result.userDetails;
        }

    }catch(error){

        console.log(error.message);

    }
}

// A LOADER FUNCTION
export function myDetailsLoaderFunction({request, params}) {

    // feels useless
    return defer({
        userDetails: myDetailsLoaderFunctionAsync()
    });

    // return {
    //     userDetails: myDetailsLoaderFunctionAsync()
    // };

}

// AN ACTION FUNCTION -> FOR USE IN A DELCARED ROUTE
export async function myDetailsActionFunction({request, params}){

    const userDetails = await request.formData();

    const userFirstName = userDetails.get('first-name');
    const userLastName = userDetails.get('last-name');
    const userEmail = userDetails.get('email');
    const userOrganizationName = userDetails.get('organization-name');
    const userAddress = userDetails.get('address');
    // const userPassword = userDetails.get('password');
    // const userConfirmPassword = userDetails.get('confirm-password');

    
    console.log(userFirstName);
    console.log(userLastName);
    console.log(userEmail);
    console.log(userOrganizationName);
    console.log(userAddress);


    return Math.random(100).toString();
}