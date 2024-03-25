import { Form, useFetcher, useLocation, redirect, useLoaderData, defer, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";

export default function LoginPage(){

    // A TEMPLATE FOR 'useQuery'
    //
    // const [aSpecificStateForUseInUseQuery, setASpecificStateForUseInUseQuery] = useState();
    //
    // const { data, isPending, isLoading, isError, error } = useQuery({
    //         queryKey: ['someFunction'], // for indexing a useQuery instance along with its data, loading & pending state, and error if any
    //         queryFn: async ({signal}) => { 
                
    //             try{

    //                 const response = await fetch("https://localhost.com/custom-fetch");
                
    //                 if (!response.ok) throw new Error("An error occured!");

    //                 const resolvedResponse = await response.json();
    //                 return resolvedResponse.data;
                    
    //             }catch(error){
                    
    //                 throw new Error("An error occured while fetching response!");

    //             }
    //         },
    //         enabled: true, // can be set dynamicaly e.g "aSpecificStateForUseInUseQuery !== undefined"//
            
    //     });


    // a template for useMutation -> an optimized react query hook for sending or modifying data e.g fetch('example.com/api/resource', { method: POST })
    // const { mutate, isPending, isError, error } = useMutation({
        // mutationKey: ['login'] // not necessary since useMutation is optimzed for sending and modifying data in the database but not to recieve data that should be cached
    //     mutationFn: (someMeta) => console.log(`someMetaData: ${Object.entries(someMeta)}`),
    //     onSuccess: () => {},
    //     onMutate: () => {},
    //     onSettled: () => {}
    // });

    // function updateResource(){
    //     console.log("");
    //     console.log("mutating");
    //     mutate({
    //         data: "mutateData"
    //         });
    // }

    // const { isPending, isLoading, isError, error } = useQuery({
    //     queryFn: (someMap) => Object.keys(someMap).forEach(key => console.log(`${key}: ${someMap[key]}`))
    // })


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
                        {/* <button className="auth-or-submit-button-and-feedback" onClick={updateResource}>Another Button</button> */}
                    </div>
                </fetcher.Form>
            </div>
        </>
    );
}

// A LOADER FUNCTION -> CAN BE AN ASYNC FUNCTION
export function loginPageLoaderFunction({request, params}){

    // queryClient.fetchQuery({
    //     queryKey: ["someQueryKey", {furtherDescriptor: "value"}],
    //     queryFn: ({queryKey, meta, signal}) => {someFetchFunction({signal, params.id})}
    // });

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

    // queryClient.invalidateQueries(queryKey, {furtherDescriptor: value})
}