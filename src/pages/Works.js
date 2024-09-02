import Product from "../Components/Product"
import Navbar from "../Components/Navbar"
import SkeletonLoading from "../Components/SkeletonLoading"
import { useEffect, useState } from "react"
import Footer from "../Components/Footer"

export default function Works(){
    useEffect(()=>{
        let navbar=document.querySelector(".slider")
        navbar.addEventListener("wheel",function(e){
            e.preventDefault();
            navbar.scrollLeft += e.deltaY * 2; // تعديل القيمة للتحكم في سرعة التمرير
        })
    },[])

    const [data,setData]=useState([])
    useEffect(()=>{
        const token = 'a7855b87ede8e3c34112928a1384d2e1ce312806';
        fetch('https://muhammed1muslim.pythonanywhere.com/restframework/generics/', {
            method: 'GET',
            headers: {
            'Authorization':`Token ${token}`,
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
            const dataContainer = document.querySelector('.grid-view').style.display="flex";
            const skeletonCard = document.querySelector('.skeleton-loading').style.display="none";
            setData(data)
            }
        )
        .catch(error => console.error('There was a problem with the fetch operation:', error));
        },[])
        
        let slider=document.querySelector(".slider")
        let arrayOfCategories=[]
        data.forEach(function(e){
            arrayOfCategories.unshift(e.category)
        })
        let setCategories =Array.from (new Set(arrayOfCategories))

        for(let i = 0 ;i < setCategories.length;i++){
            let h1 =document.createElement("h1")
            h1.textContent=setCategories[i]
            slider.appendChild(h1)
        }

        useEffect(()=>{
            let items=document.querySelectorAll(".card")
            let categoriesElements=document.querySelectorAll(".slider h1")
            categoriesElements.forEach(function(categoryElement){
                categoryElement.onclick=function(){
                    Array.from(items).filter(function(e){
                        return e.getAttribute("cat") === categoryElement.innerHTML ? e.style.display="flex": e.style.display="none";
                    })
                }
            })
            categoriesElements[0].onclick =function(){
                items.forEach(function(item){
                    return item.style.display="flex"
                })
            }
        })
    return(
        <>
        <Navbar/>
        <main>
        <div className="slider">
            <h1>الكل</h1>
        </div>
        <div className="grid-view" style={{display:'none'}}> 
            {
                data.map((item , index) => <Product key={index} {...item}/>)
            }
        </div>
        <div class="skeleton-loading   w-100" style={{flexWrap:"wrap" , alignItems:"center" , display:"flex", justifyContent:"center"}}>
            <SkeletonLoading/>
        </div>
        </main>
        <Footer/>
        </>
    )
}