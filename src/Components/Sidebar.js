import { Link } from "react-router-dom"
import "./style/Sidebar.css"
export default function Sidebar(){
    return(
        <aside>
            <div class="container">
                <div className="img-container">
                    <img src={require("../figure/logo.png")} alt=""></img>
                </div>
                
                <ul>
                    <Link to={"/admin-a5o6s8dfg5f5h56e1c5sd"} style={{textDecoration:"none"}}>
                    <li>المنتجات</li>
                    </Link>
                    <Link to={'/admin-a5o6s8dfg5f5h56e1c5sd/edit'} style={{textDecoration:"none"}}>
                    <li>تعديل علي منتج</li>
                    </Link>
                    <Link to={"/admin-a5o6s8dfg5f5h56e1c5sd/addproduct"} style={{textDecoration:"none"}}>
                    <li> اضافة منتج</li>
                    </Link> 
                </ul>
            </div>
        </aside>
    )
}