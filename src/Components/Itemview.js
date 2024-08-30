import { useEffect } from "react"
import "./style/Item.css"
import { Link } from "react-router-dom"
export default function Item({id , name ,price,image , category,discountAmount , discount, description}){
    useEffect(()=>{
        function deleter(){
            let buttons=document.querySelectorAll("article .delete")
            buttons.forEach(function(button){
                return button.onclick=()=>x(button.getAttribute("id"))
            })
        }
        deleter()
        function x(Id){
            const token = 'a7855b87ede8e3c34112928a1384d2e1ce312806';
            fetch(`http://127.0.0.1:8000/restframework/generics/${Id}`, {
                method: 'DELETE',
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
            .then(data => {
                alert('Product deleted successfully!');
                // قم بتحديث واجهة المستخدم هنا إذا لزم الأمر
            }).catch(error => console.error('There was a problem with the fetch operation:', error));
        }
    })
    return(
        <>
        <article cat={category}>
        {
                discount === true?
                <div className='discount'>{discountAmount}%  :قيمة الخصم</div>
                :
                <div></div>
            }
            <img src={image} alt=""></img>
            <figcaption>
                <h3>{name}</h3>
                {
                    discount === true?
                    <p className="price"><span>{price- (price * discountAmount / 100)} EGP : السعر الحالي</span><span>{price} EGP : السعر القديم</span></p>
                    :
                    <p>{price}</p>
                }
                <p>{description}</p>
            </figcaption>
            <div className="setting">
                <Link to={`/admin/editproduct/${id}`}>
                    <button className="edit">تعديل</button>
                </Link>
                <button className="delete" id={id} >حذف</button>
            </div>
        </article>
        </>
    )
}