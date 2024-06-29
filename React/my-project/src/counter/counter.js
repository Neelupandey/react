import { useState } from "react";

export function Counter(props){
     let [count, setCount] = useState(0);
    const increment = () =>{
        const updatedCount= count+1
        setCount(updatedCount)
        console.log("Updated Count", updatedCount);
        props.onCountChange(updatedCount)
    }
    return <div id="counter-component">
        <p>Counter Component: {props.counterName}</p>
        Count: {count}
        <br></br><br></br>
        <button onClick={increment}>Increment</button>
    </div>
}