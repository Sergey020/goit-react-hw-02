const Options = ({updateFeedback, resetFeedback, totalFeedback})=>{
console.log(totalFeedback);
    return (
    <>
    <button onClick={()=>updateFeedback("good")}>Good</button>
    <button onClick={()=>updateFeedback("neutral")}>Neutral</button>
    <button onClick={()=>updateFeedback("bad")}>Bad</button>
    {totalFeedback > 0 ? <button onClick={()=>resetFeedback()}>Reset</button>: false}

    </>
)
}
export default Options