export default function Log({turns}){

    let turnsLog;

    // derive logs li from turns object
    if (turns.length > 0){
        
        turnsLog = turns.map((turn, turnNum) => {

            console.log(`turnNum: ${turnNum}, type: ${typeof(turnNum)}`);
            let turnRowNum = turn.rowNum;
            let turnColNum = turn.colNum;
            let currentTurnPlayerSymbol = turn.playerSymbol
            let currentlistElement = 
                <li key={`${turnColNum},${turnRowNum}`} className={turnNum === 0 ? "highlighted" : ""}>
                    {`${currentTurnPlayerSymbol} selected R${turnRowNum + 1}, C${turnColNum + 1}`}
                </li>

            return currentlistElement;
        });

    }

    console.log("In log component");

    return (
        <>
            {turnsLog}       
        </>
    )
}