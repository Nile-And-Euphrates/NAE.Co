import { useEffect, useState } from "react"
import Sidebar from "../Components/Sidebar"
import "./style/Adminpanal.css"
import Item from "../Components/Itemview"

export default function Adminpanal(){
    const [data,setData]=useState([])
    useEffect(()=>{
        const token = 'a7855b87ede8e3c34112928a1384d2e1ce312806';
        fetch('http://127.0.0.1:8000/restframework/generics/', {
            method: 'GET',
            headers: {
            'Authorization': `Token ${token}`,
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
        <main>
        <Sidebar/>
        <div class="content">
            <div class="container">
            {
                data.map((item , index) => <Item key={index} {...item}/>)
            }
            </div>
        </div>
    </main>
    )
}