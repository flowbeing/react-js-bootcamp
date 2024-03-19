import { Form, useFetcher, useLoaderData, defer, Await, json, useNavigation, useParams, useSearchParams } from "react-router-dom";
import { Suspense, useEffect, Fragment, useCallback } from "react";

import MyDetailsPageForm from "../components/MyDetailsPageForm";
import util, { promisify } from "util";

export default function MyDetailsPage(){

    const loaderData = useLoaderData();
    // const { userFirstName, userLastName, userEmail, userOrganizationName, userAddress } = loaderData;
    const {userDetails, userDetailsFast} = loaderData;

    // console.log(`userDetailsFast: ${Object.keys(userDetailsFast)}`);

    // const params = useParams();
    // console.log("params");
    // Object.keys(params).forEach((key, value) => console.log(`${key}:${value}`));

    // console.log("");
    // const [searchParams, setSearchParams] = useSearchParams();
    // console.log("query | searchParams");
    // searchParams.keys().map(key => console.log(`key: ${key}`));
    // searchParams.forEach((value, key) => console.log(`${key}:${value}`));


    const fetcher = useFetcher();
    const { data, state } = fetcher;


    // useEffect(() => {

    //     console.log(`myDetailsPageAction data: ${data}, myDetailsPageAction state: ${state}`);
    //     console.log(`myDetailsPageLoader data: ${userDetailsLoaderData}, type: ${typeof(loaderData)}`);
    //     console.log(`defered loader data: keys: ${Object.keys(loaderData)}`);
    //     console.log(Object.keys(loaderData).map(key => loaderData[key]));
    //     // console.log(`${ userFirstName }, ${ userLastName}, ${userEmail}, ${userOrganizationName}, ${userAddress }`)

    // }, [data, state]);

    // async function getUserDetailsAsync(){

    //         const response = await fetch("http://127.0.0.1:8080/custom-fetch");

    //         if (!response.ok) throw new Error ("An error occured while fetching user details");

    //         const responseData = await response.json();
    //         const userDetails = responseData.userDetails;
            
    //         console.log(`userDetails in getUserDetailsAsync: ${userDetails}`);

    //         return userDetails;

    // }
        
    // new Promise((resolve, reject) => resolve({userFirstName: 'Dan', userLastName: 'Oye', userEmail: 'email@example.com', userOrganizationName: 'OrganizationOne', userAddress: 'AddressOne'}))

    return (
            <>
                {/* <Suspense>
                    <Await resolve={userDetailsFast}>
                        {userDetailsFastResolved => <p>{userDetailsFastResolved.userFirstName}</p>}
                    </Await>
                </Suspense> */}
                <Suspense fallback={<h1 style={{textAlign: "center", fontFamily: "monospace", fontWeight: "bold"}}>Loading..</h1>}>
                    {/* userDetailsLoaderData */}
                    <Await resolve={userDetails}> 
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
                                                <button className="auth-or-submit-button-and-feedback">Submit</button>
                                            </div>
                                        </fetcher.Form>
                                    </div>
                                </>
                            )

                            
                        }
                    </Await>
                </Suspense>
            </>
    );
}

// THIS ASYNC LOADER FUNCTION WOULD IDEALLY CONTAIN AN AWAITED ASYNC FETCH FUNCTION THAT WOULD RETURN DATA
// E.G A FETCH FUNCTION THAT WOULD RETURN A PREF
async function myDetailsLoaderFunctionAsync(
    isFast = false
) {

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

    let additionalUrlText = "";

    if (isFast){
        additionalUrlText = "-fast";
    }

    try{

        const response = await fetch("http://127.0.0.1:8080/custom-fetch" + additionalUrlText);

        if (!response.ok) {
            throw new Error("An error occured while fetching user's details");
        }
        else {
            const result = await response.json();
            // console.log(`result (loader): ${result.userDetails}`);
            return result.userDetails;
        }

    }catch(error){

        console.log(error.message);

    }
}

// A LOADER FUNCTION
export async function myDetailsLoaderFunction({request, params}) {

    // feels useless
    return defer({
        // userDetailsFast: myDetailsLoaderFunctionAsync(true),
        userDetails: myDetailsLoaderFunctionAsync()
    });

    // return {
    //     userDetails: myDetailsLoaderFunctionAsync()
    // };

}

// AN ACTION FUNCTION -> FOR USE IN A DELCARED ROUTE
export async function myDetailsActionFunction({request, params}){
    
    const searchParams = new URL(request.url).searchParams;
    console.log('Accessing URL Parameters Within myDetailsActionFunction:');
    // console.log(searchParams.forEach((key, value) => { console.log(`${key}: ${value}`) }));
    const isLogin = searchParams.get('auth');

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

    let currentAuthOperation = "signup";


    if (isLogin){
        currentAuthOperation = "login";
    }

    const response = await fetch(`http://127.0.0.1:8080/custom-fetch/${currentAuthOperation}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userFirstName: userFirstName,
            userLastName: userLastName,
            userEmail: userEmail,
            userOrganizationName: userOrganizationName,
            userAddress: userAddress,
            currentAuthOperation: currentAuthOperation
        })
    });

    if (!response.ok){
        throw new Error(`${currentAuthOperation.toUpperCase()} Error`);
    }


    return Math.random(100).toString();

}