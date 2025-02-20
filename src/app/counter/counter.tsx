"use client"

import { useState } from "react"

export function Counter(){
    let [count, setCount] = useState(0);
    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={()=>{setCount(count += 1)}}>Increase</button>
        </>
    )
}