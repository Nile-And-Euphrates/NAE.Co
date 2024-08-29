import React from "react";
import { Link } from "react-router-dom" ;
import "./Error404.css"
function Error404(){
    return(
        <div className="error">
            <h1 style={{fontSize:"55px"}}>ERROR 4<span>0</span>4 </h1>
            <p>Oops! page not found</p>
            <Link to={"NAE.Co/"}>
                <button>back to home</button>
            </Link>
        </div>
    )
}

export default Error404;