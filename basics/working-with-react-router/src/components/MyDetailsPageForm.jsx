import { Form, useFetcher} from "react-router-dom";
import { Fragment } from "react";

export default function MyDetailsPageForm(
    {userFirstName,
    userLastName,
    userEmail,
    userOrganizationName,
    userAddress}){

        const fetcher = useFetcher();

        return(
            <Fragment>
                <h1>My Details Page</h1>
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
                            Update Your Details Here 🎉
                    </button>
                </div>
                <div className="register-form">
                    <fetcher.Form method="POST">
                        {/* <label>First Name</label> */}
                        <input type="text" name="first-name" defaultValue={userFirstName}/>
                        <input type="text" name="last-name" defaultValue={userLastName}/>
                        <input type="text" name="email" defaultValue={userEmail}/>
                        <input type="text" name="organization-name" defaultValue={userOrganizationName}/>
                        <input type="text" name="address" defaultValue={userAddress}/>

                        <div style={{display:"flex", justifyContent:"right"}}>
                            <button className="register-button">Submit</button>
                        </div>
                    </fetcher.Form>
                </div>
            </Fragment>
        );
}