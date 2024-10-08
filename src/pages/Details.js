import { useParams } from "react-router-dom"
import "./Details.css"
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


export  default function Details(){
    const { id } = useParams();
    const[item ,setItem ]=useState({})
    useEffect(()=>{
        const token = 'a7855b87ede8e3c34112928a1384d2e1ce312806';
        fetch(`https://muhammed1muslim.pythonanywhere.com/restframework/generics/${id}`, {
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
            const dataContainer = document.querySelector('article').style.display="flex";
            const skeletonCard = document.querySelector('.skeleton-card').style.display=" none";
            setItem(data)
        }
        )
        .catch(error => console.error('There was a problem with the fetch operation:', error));
    },[])
    return(
    <main style={{height:"100vh"}}>
        <article style={{display:"none" }}>
            <figure>
                <img src={item.image}></img>
            </figure>
            <div class="details">
                {
                    item.discount=== true && item.discountAmount !== 0?<div class="discount">الخصم : {item.discountAmount}%</div> : <div style={{display:"none"}} class="discount">discount: {item.discountAmount}%</div>
                }
                <h1>اسم المنتج : {item.name}</h1>
                <p> التفاصيل : {item.description}</p>
                <p>الفئة : {item.category} </p>
                {
                    item.discount === true && item.discountAmount !== 0?
                    <p>السعر : {item.price-(item.price * item.discountAmount / 100)} ج.م<span className='oldPrice'>السعر :{item.price} ج.م </span></p>
                    :
                    <p>السعر : {item.price}ج.م</p>
                }
                <Link to={`/Works`} style={{textDecoration:"none"}}>
                    <button><a href="./work.html" style={{textDecoration:"none"}}>العودة الي المتجر</a></button>
                </Link>
            </div>
        </article>
        <div class="skeleton-card  align-items-start justify-content-center " style={{backgroundColor:"#f0f0f0",width:"80%",padding:"16px",margin:"20px" , borderRadius:"8px" , flexDirection:"column"}}>
            <div class="skeleton-header w-100" style={{height:"300px"}}></div>
            <div class="skeleton-body w-75" style={{height:"100px"}}></div>
            <div class="skeleton-footer w-50" style={{height:"40px"}}></div>
        </div>
    </main>
    )
}