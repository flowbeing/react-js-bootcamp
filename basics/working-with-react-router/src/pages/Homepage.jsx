import { useNavigation, redirect} from "react-router-dom";

export default function Homepage() {

    const navigation = useNavigation();
    // can be idle loading or submitting

    return (
        <>
            <h1>Homepage</h1>
            <p style={{
                color: "white",
                fontFamily: "monospace",
                textAlign: "center",
                border:"1px solid white",
                width: "20%",
                margin: "0 auto",
                padding: ".5rem 0rem"
            }}>
                
                Current Navigation State: <span style={{ fontWeight: "bold", textTransform: "capitalize"  }}>{navigation.state}</span>
            
            </p>
        </>
    );

}