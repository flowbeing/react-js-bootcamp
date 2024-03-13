import { useSubmit, redirect } from "react-router-dom"

export default function EventsPage() {

    const submit = useSubmit();

    function submitHandler(){
        // manual submission of data; usually form data
        submit({name: "Dan", email: "email@example.com"}, {method:"post", action:"/events"}); // , action: "/"
    }

    return (
        <>
            <h1>Events Page</h1>
            <div style={{ display: "flex", justifyContent: "center"}}>
                <button 
                    style={{ 
                        width: "13rem", 
                        // height: "1.7rem", 
                        // margin: "0 auto",
                        padding: ".5rem 0rem",
                        fontFamily: "monospace", 
                        fontWeight: "normal", 
                        background: "transparent", 
                        color: "white", 
                        border: "1px solid white",
                    }} 
                    onClick={submitHandler}
                >
                        Trigger a Submit Action
                </button>
            </div>

        </>
        
    );

}

// Events Page Action
export async function eventsPageAction({ request, params }) {
    const formData = await request.formData();
    console.log(`formData: ${Object.entries(formData)}`);
    console.log(`method: ${request.method}`);
    // console.log(`action: ${params.action}`);


    return redirect("/");
};