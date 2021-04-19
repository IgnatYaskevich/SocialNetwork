import React from "react";
import preloader from "../../../images/go.gif";


export  const Preloader = () => {
    return (
        <div>
            <img src={preloader} alt={'loading'}/>
        </div>)
}