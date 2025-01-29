import { useState,useEffect } from "react"
import "./degitalClock.css"
export default function Clock(){
    const [time,SetTime]=useState(new Date())

    useEffect(()=>{
        const interval=setInterval(()=>SetTime(new Date(),1000  ))
        return()=>clearInterval(interval)
    },[])

    function Clock(){
        const Hours=time.getHours()
        const min=time.getMinutes()
        const sec=time.getSeconds()
        const when= (Hours>12) ? "pm" : "am" 
        return (Hours +":"+ min +":"+sec+" "+when)
    }

    return(
        <div className="clock">
            <div className="container">
                <h1>{Clock()}</h1>
            </div>
        </div>
    )

}