import { useParams , useNavigate  } from "react-router-dom";
import "./style/Edit.css"
import { useEffect } from "react";
export default function Edit(){
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        let button = document.querySelector("button");
        button.addEventListener("click", () => {
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
            formData.append('id', id);
            formData.append('name', productName);
            formData.append('image', productImage);  // إرسال الملف مباشرة
            formData.append('description', productDesc);
            formData.append('price', parseInt(productPrice));
            formData.append('discount', Boolean(productDiscount));
            formData.append('discountAmount', parseInt(productAmount));
            formData.append('category', productCategory);
        
            const token = '0620d589690987cf46c668b6b66f3eb3b90bd3c3';
            fetch(`http://127.0.0.1:8000/restframework/generics/${id}`, {
                method: 'PATCH',
                headers: {
                    'Authorization': 'Bearer ' + token,
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
                navigate('/admin')
            })
            .catch(error => console.error('There was a problem with the fetch operation:', error));
        });
        
    },[])
    return(
        <form>
            <span>
                <label> image:</label>
                <input type="file" placeholder="upload" id="productImage" accept="image/*" ></input>
            </span>
            <span>
                <label> name:</label>
                <input type="text" placeholder="upload" id="productName" ></input>
            </span>
            <span>
                <label> description:</label>
                <input type="text" placeholder="upload" id="productDescription"></input>
            </span>
            <span>
                <label> Category:</label>
                <input type="text" placeholder="upload" id="productCategory"></input>
            </span>
            <span>
                <label> price:</label>
                <input type="number" placeholder="upload" id="productPrice"></input>
            </span>
            <span>
                <label> discount:</label>
                <input type="checkbox" placeholder="upload" id="productDiscount"></input>
            </span>
            <span>
                <label> discount amount:</label>
                <input type="number" placeholder="upload" id="productAmount"></input>
            </span>
            <button type="submit">حفظ</button>
        </form>
    )
}