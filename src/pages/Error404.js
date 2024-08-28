import React from "react";
import { Link } from "react-router-dom" ;
import "./Error404.css"
function Error404(){
    return(
        <div className="error">
            <h1>ERROR 4<span>0</span>4 </h1>
            <p>Oops! page not found</p>
            <Link to={"/"}>
                <button>back to home</button>
            </Link>
        </div>
    )
}

export default Error404;