import Product from "../Components/Product";
import Sidebar from "../Components/Sidebar";
import { useEffect, useState } from "react";
export default function Main(){
    const [data,setData]=useState([])
    useEffect(()=>{
        const token = '0620d589690987cf46c668b6b66f3eb3b90bd3c3';
        fetch('http://127.0.0.1:8000/restframework/generics/', {
            method: 'GET',
            headers: {
            'Authorization': 'Bearer ' + token,
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