import Product from "../Components/Product";
import Sidebar from "../Components/Sidebar";
import { useEffect, useState } from "react";
export default function Main(){
    const [data,setData]=useState([])
    useEffect(()=>{
        const token = 'a7855b87ede8e3c34112928a1384d2e1ce312806';
        fetch('http://127.0.0.1:8000/restframework/generics/', {
            method: 'GET',
            headers: {
            'Authorization':  `Token ${token}`,
            'Content-Type': 'application/json'
            },
        })
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
        }
            return response.json();
        })
        .then(data =>{
            setData(data)
        })
    },[])
    return(
        <>
            <Sidebar/>
            <div class="content "  style={{right:'20%' , backgroundColor:"#eee"}}>
                <div class="container">
                {
                    data.map((item , index) => <Product key={index} {...item}/>)
                }   
                </div>
            </div>
        </>
    )
}