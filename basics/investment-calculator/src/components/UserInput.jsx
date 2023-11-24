import InputGroup from "./InputGroup";

export default function UserInput(){

    return (
        <div id="user-input">
            <InputGroup labelOne="INITIAL INVESTMENT" typeOne="number" labelTwo="ANNUAL INVESTMENT" typeTwo="number"/>
            <InputGroup labelOne="EXPECTED RETURN" typeOne="number" labelTwo="DURATION" typeTwo="number"/>
        </div>
    );

}