import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Sidebar from "../Components/Sidebar";
import "./style/Addproduct.css"
export default function Addproduct(){
    const navigate = useNavigate();
    useEffect(()=>{
        let button = document.querySelector("button");
        button.addEventListener("click", () => {
            const productId = document.getElementById('productId').value;
            const productName = document.getElementById('productName').value;
            const productPrice = document.getElementById('productPrice').value;
            const productDiscount = document.getElementById('productDiscount').value;
            const productImage = document.getElementById('productImage').files[0];
            const productAmount = document.getElementById('productAmount').value;
            const productDesc = document.getElementById('productDescription').value;
            const productCategory = document.getElementById('productCategory').value;
        
            if (!productName || !productPrice || !productDiscount || !productImage || !productAmount || !productDesc || !productCategory) {
                console.error('All fields must be filled out.');
                alert('Please fill out all fields.');
                return;
            }
        
            // استخدام FormData لجمع البيانات
            const formData = new FormData();
            formData.append('id', productId);
            formData.append('name', productName);
            formData.append('image', productImage);  // إرسال الملف مباشرة
            formData.append('description', productDesc);
            formData.append('price', parseInt(productPrice));
            formData.append('discount', Boolean(productDiscount));
            formData.append('discountAmount', parseInt(productAmount));
            formData.append('category', productCategory);
        
            const token = 'a7855b87ede8e3c34112928a1384d2e1ce312806';
            fetch(`http://127.0.0.1:8000/restframework/generics/`, {
                method: 'POST',
                headers: {
                    'Authorization': `Token ${token}`,
                    // لا حاجة لإضافة Content-Type هنا، سيقوم المتصفح بتحديده بشكل تلقائي
                },
                body: formData  // إرسال FormData بدلاً من JSON
            })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(errorData => {
                        console.error('Error details:', errorData);
                        alert('Error: ' + JSON.stringify(errorData));
                        throw new Error('Network response was not ok');
                    });
                }
                return response.json();
            })
            .then(data => {
                alert('Product updated successfully!');
                navigate('/admin/addproduct')
            })
            .catch(error => console.error('There was a problem with the fetch operation:', error));
        });
        
    },[])
    return(
        <>
        <Sidebar/>
        <div className="form-container">
        <form>
            <div>
                <label> id:</label>
                <input type="number" placeholder="upload" id="productId"></input>
            </div>
            <div>
                <label> image:</label>
                <input type="file" placeholder="upload" id="productImage" ></input>
            </div>
            <div>
                <label> name:</label>
                <input type="text" placeholder="upload" id="productName" ></input>
            </div>
            <div>
                <label> description:</label>
                <input type="text" placeholder="upload" id="productDescription"></input>
            </div>
            <div>
                <label> Category:</label>
                <input type="text" placeholder="upload" id="productCategory"></input>
            </div>
            <div>
                <label> price:</label>
                <input type="number" placeholder="upload" id="productPrice"></input>
            </div>
            <div>
                <label> discount:</label>
                <input type="checkbox" placeholder="upload" id="productDiscount"></input>
            </div>
            <div>
                <label> discount amount:</label>
                <input type="number" placeholder="upload" id="productAmount"></input>
            </div>
            <button type="submit">حفظ</button>
        </form>
        </div>
        </>
        
    )
}