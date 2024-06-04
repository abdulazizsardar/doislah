import { useState } from "react";

const ScrollProgress = () => {
    const [sp, setSP] = useState(0)
    var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight )

    setInterval(()=>{
        let p = 100 - ((height / window.scrollY).toFixed(0))
        if(p > -1 && p < 101){
            setSP(p)
        }
    }, 100)
    return(
        <>
   
        <div className="sticky bg-green-700 ml-[95%]  z-50 sticky top-10 w-[60px] h-[60px] text-white text-xl font-bold text-center items-center align-middle" style={{borderRadius:"50%"}}>
            <p>{sp}</p>
        </div>
        </>
    )
}


export default ScrollProgress