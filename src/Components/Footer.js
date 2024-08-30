import { Link } from "react-router-dom"
import "./style/Footer.css"

export default function Footer(){
    return(
    <footer>
        <div className="container">
            <figure className="column A">
                <h1 className="icon"> Nile &  Euphrates</h1>
                <figcaption>
                في  النيل و الفرات ، نحن نفخر بتقديم حلول راقية للحمامات والسيراميك، مع التركيز على الجودة الفائقة والتصميم المبتكر. منذ تأسيسنا، .
                </figcaption>
                <span>
                    <a href="https://www.facebook.com/profile.php?id=61561724722912&mibextid=LQQJ4d&rdid=pkQ6VZ1I9xGKk5mu&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FahcDq9mQfJXWwjSV%2F%3Fmibextid%3DLQQJ4d"><i class="fa-brands fa-square-facebook"></i></a>
                    <a href="https://www.instagram.com/nileeuphrates?igsh=MXU3MHNicXA1aXVrZQ%3D%3D&utm_source=qr"><i class="fa-brands fa-instagram"></i></a>
                </span>
            </figure>
            <div className="column C">
                <h1>الروابط</h1>
                <Link to={'/NAE.Co/'} style={{textDecoration:"none"}}>
                    <p > الصفحة الرئيسية</p>
                </Link>
                <Link to={'/works'} style={{textDecoration:"none"}}>
                    <p >المتجر</p>
                </Link>
                <Link to={'/about'} style={{textDecoration:"none"}}>
                    <p>من نحن</p>
                </Link>
                <Link to={'/contact'} style={{textDecoration:"none"}}>
                    <p >تواصل معنا</p>
                </Link>
            </div>
            <div className="column D">
                <h1>تواصل معنا</h1>
                <div className="SD">
                    <i class="fa-solid fa-phone" style={{padding: "5px" , marginRight:"10px"}}></i>
                    <p style={{letterSpacing:"5px"}}>01141456342</p>
                </div>
                <div className="SD">
                    <i class="fa-solid fa-envelope"style={{padding: "5px" , marginRight: "10px"}}></i>
                    <p>NileAndEuphrate@gmail.com</p>
                </div>
            </div>
        </div>
        <p className="copyright fs-5">حقوق النشر ©2024 لشركة النيل والفرات . جميع الحقوق محفوظة</p>
    </footer>
    )
}