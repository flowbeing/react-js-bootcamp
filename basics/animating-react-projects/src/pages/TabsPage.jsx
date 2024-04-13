import Tabs from "../components/Tabs";

export default function DisplayTabs(){

    return(
        [ "Success", "In Progress", "Approval"].map(tabTitle => {<Tabs title={tabTitle} />})
    );
    
}