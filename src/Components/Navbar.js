import { Link } from 'react-router-dom';
import "./style/Navbar.css"
export default function Navbar(){
    return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary  m">
    <div class="container-xl">
    <img src={require("../figure/logo.png")} style={{width:'50px' , height:"60px"}}  alt=''></img>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon">
            <span></span>
            <span></span>
            <span></span>
        </span>
        </button>
    <div class="offcanvas offcanvas-end " tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Nile & Euphrates</h5>
            <button type="button" class="btn-close m-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="navbar-nav  flex-grow-1 pe-3 w-100 justify-content-end">
            <li class="nav-item">
                <Link to={"/"}  style={{ textDecoration: 'none' }}>
                    <a class="nav-link active fs-4" aria-current="page" href="#">الصفحة الرئيسية</a>
                </Link>
            </li>
            <li class="nav-item">
                <Link to={"/works"}  style={{ textDecoration: 'none' }}>
                    <a class="nav-link fs-4" href="#">المتجر</a>
                </Link>
            </li>
            <li class="nav-item">
                <Link to={"/about"}  style={{ textDecoration: 'none' }}>
                    <a class="nav-link fs-4" href="#">من نحن</a>
                </Link>
            </li>
            <li class="nav-item">
                <Link to={"/contact"}  style={{ textDecoration: 'none' }}>
                    <a class="nav-link fs-4" href="#">تواصل معنا</a>
                </Link>
            </li>
            </ul>
        </div>
        </div>
    </div>
    </nav>
    );
}
