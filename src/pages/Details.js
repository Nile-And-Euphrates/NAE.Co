import { useParams } from "react-router-dom"
import "./Details.css"
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


export  default function Details(){
    const { id } = useParams();
    const[item ,setItem ]=useState({})
    useEffect(()=>{
        const token = '0620d589690987cf46c668b6b66f3eb3b90bd3c3';
        fetch(`http://127.0.0.1:8000/restframework/generics/${id}`, {
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
        .then(data =>{ setItem(data)}
        )
        .catch(error => console.error('There was a problem with the fetch operation:', error));
    },[])
    return(
    <main>
        <article>
            <figure>
                <img src={item.image}></img>
            </figure>
            <div class="details">
                {
                    item.discount=== true && item.discountAmount !== 0?<div class="discount">الخصم :{item.discountAmount}%</div> : <div style={{display:"none"}} class="discount">discount: {item.discountAmount}%</div>
                }
                <h1>اسم المنتج :{item.name}</h1>
                <p> التفاصيل :{item.description}</p>
                <p>الفئة :{item.category} </p>
                {
                    item.discount === true && item.discountAmount !== 0?
                    <p>السعر :{item.price-(item.price * item.discountAmount / 100)} ج.م<span className='oldPrice'>السعر :{item.price} ج.م </span></p>
                    :
                    <p>{item.price}</p>
                }
                <Link to={`/Works`}>
                    <button><a href="./work.html">العودة الي المتجر</a></button>
                </Link>
            </div>
        </article>
    </main>
    )
}