import { useState } from "react";

export default function InputGroup({labelOne, labelTwo, typeOne, typeTwo}){

    const [inputOneContent, updateInputOneContent] = useState('');
    const [inputTwoContent, updateInputTwoContent] = useState('');

    function handleInputOneChange(event){

        let inputOneInput = event.target.value;
        updateInputOneContent(inputOneInput);
        console.log(`inputOneInput: ${inputOneInput}`);

    }

    function handleInputTwoChange(event){

        let inputTwoInput = event.target.value;
        updateInputTwoContent(event.target.value);
        console.log(`inputTwoInput: ${inputTwoInput}`)

    }

    return(
        <p className="input-group">

            <div>
                <label>{labelOne}</label>
                <input type={typeOne} onChange={handleInputOneChange}></input>
            </div>

            <div>
                <label>{labelTwo}</label>
                <input type={typeTwo} onChange={handleInputTwoChange}></input>
            </div>

        </p>
    );
}