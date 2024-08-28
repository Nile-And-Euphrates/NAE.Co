import { useEffect } from "react"
import Image from "../figure/9dde1250364ce0be284b0c19c4e01c08.jpg"
import "./style/Home.css"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { Link } from "react-router-dom"
export default function Home(){
    useEffect(()=>{

    })
    return(
        <>
        <Navbar/>
        <section class="container-xxl  position-relative" style={{height: "fit-content", padding:"50px 0px 0px 0px"}}>
            <p class="x fw-bold m-2 text-wrap text-uppercase lh-1" style={{fontSize: "130px" , letterSpacing:"4px"}}>العناصر المفضلة لديك بسعر مذهل .</p>
        </section>

    {/* <div id="carouselExampleCaptions" class="carousel slide  container-xl">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
        <div class="carousel-item active">
        <img src={require("../figure/k (1).jpg")} style={{height: "450px"}} class="d-block w-100" alt="..."></img>
        <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
        </div>
        </div>
        <div class="carousel-item active">
            <img src={require("../figure/k (1).jpg")} style={{height: "450px"}} class="d-block w-100" alt="..."></img>
            <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
            </div>
        </div>
        <div class="carousel-item active">
            <img src={require("../figure/k (1).jpg")} style={{height: "450px"}} class="d-block w-100" alt="..."></img>
            <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
            </div>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div> */}
    
    <section className="container-xl  position-relative mt-5">
        <video loop src={require("../figure/video.mp4")} controls width={"100%"} height={'650px'}></video>
    </section>


            <section class="webflow o p-3 d-flex position-relative justify-content-center align-items-center" style={{flexDirection: "column", padding:"50px 0px"}}>
                <img src="./imgs/dots.png" class="position-absolute" style={{left: "0%", top:"10%" , width:"150px"}} alt=""></img>
                <h1 class="z-3 text-uppercase p-3 m-3 border-bottom border-black" style={{fontSize: "64px", letterSpacing:"3px"}}>خدماتنا </h1>

                <div class="u d-flex justify-content-center align-items-center gap-2 " style={{flexWrap: "wrap"}}>


                    <div class=" figure card position-relative m-0 p-0" style={{width: "16rem"}}>
                        <div class="card-body  position-relative d-flex justify-content-center align-items-center p-5" style={{ flexDirection: "column"}}>
                            <h1><i class="fs-1 fa-solid fa-hand-holding-dollar text-light"></i></h1>
                            <p class="card-text text-light fs-5">السعر المناسب</p>
                        </div>
                    </div>

                    <div class="figure card position-relative m-0 p-0" style={{width: "16rem"}}>
                        <div class="card-body position-relative  d-flex justify-content-center align-items-center p-5" style={{ flexDirection: "column"}}>
                            <h1><i class="fa-regular fa-handshake text-light"></i></h1>
                            <p class="card-text text-light fs-5">مرونة التعامل</p>
                        </div>
                    </div>

                    <div class=" figure card position-relative m-0 p-0" style={{width: "16rem" }}>
                        <div class="card-body position-relative d-flex justify-content-center align-items-center p-5" style={{ flexDirection: "column" }}>
                            <h1><i class="fa-solid fa-ranking-star text-light"></i></h1>
                            <p class="card-text text-light fs-5">الجودة العالية و المميزة</p>
                        </div>
                    </div>

                    <div class=" figure card position-relative m-0 p-0" style={{width: "16rem"}}>
                        <div class="card-body position-relative d-flex justify-content-center align-items-center p-5" style={{ flexDirection: "column"}}>
                            <h1><i class="fa-solid fa-clock-rotate-left text-light"></i></h1>
                            <p class="card-text text-light fs-5">سرعة الاستجابة للعميل </p>
                        </div>
                    </div>

                </div>
            </section>

            <section  class="grid-2 position-relative " style={{padding:"50px 0px"}}>
                <div class="head d-flex justify-content-between align-items-center border-bottom border-black">
                    <span className="fs-3">منتج جيد</span>
                    <span  className="fs-3"> تسوق</span>
                </div>
                <div class="container-fluid d-flex  justify-content-center " style={{height: "fit-content", flexWrap: "wrap", gap: "20px 20px"}}>

                <article class="item position-relative d-flex align-items-center justify-content-center " style={{flexDirection: "column", gap:"0px 20px", width:"400px", height: "95vh"}}>
                        <figure class="position-absolute w-100  h-100" style={{top: "0px", left: "-17px" }}>
                            <img class="m position-relative w-100 h-100" style={{objectFit: "cover"}} src={require("../figure/photo_2024-08-25_19-07-23.jpg")} alt=""></img>
                        </figure>
                        <a  class="text-decoration-none position-relative bg-light d-flex justify-content-start" style={{width: "200px" , height: "40px", color: "#222" ,top: "0%" ,borderRadius: "8px" , flexDirection: "column", overflow: "hidden" , zIndex:'10'}}>
                            <div class="up d-flex justify-content-between align-items-center p-2">
                                <div class="dot" style={{backgroundColor: "#222", borderRadius: "50%", width: "10px", height: "10px;"}} ></div>
                                <p class="m-0">مشاهدة</p>
                                <span>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </span>
                            </div>
                            <p class="p-2 bg-success-subtle ">مواد ذات جودة عالية بسعر مناسب</p>
                        </a>
                    </article>

                    <article class="item position-relative d-flex align-items-center justify-content-center " style={{flexDirection: "column", gap:"0px 20px", width:"400px", height: "95vh"}}>
                        <figure class="position-absolute w-100  h-100" style={{top: "0", left: "-17px" }}>
                            <img class="m position-relative w-100 h-100" style={{objectFit: "cover"}} src={require("../figure/photo_2024-08-25_15-36-21.jpg")} alt=""></img>
                        </figure>
                        <a  class="text-decoration-none position-relative bg-light d-flex justify-content-start" style={{width: "200px" , height: "40px", color: "#222" ,top: "0%" ,borderRadius: "8px" , flexDirection: "column", overflow: "hidden" , zIndex:'10'}}>
                            <div class="up d-flex justify-content-between align-items-center p-2">
                                <div class="dot" style={{backgroundColor: "#222", borderRadius: "50%", width: "10px", height: "10px;"}} ></div>
                                <p class="m-0">مشاهدة</p>
                                <span>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </span>
                            </div>
                            <p class="p-2 bg-success-subtle ">مواد ذات جودة عالية بسعر مناسب</p>
                        </a>
                    </article>

                    <article class="item position-relative d-flex align-items-center justify-content-center " style={{flexDirection: "column", gap:"0px 20px", width:"400px", height: "95vh"}}>
                        <figure class="position-absolute w-100  h-100" style={{top: "0", left: "-17px" }}>
                            <img class="m position-relative w-100 h-100" style={{objectFit: "cover"}} src={require("../figure/photo_2024-08-25_15-36-37.jpg")} alt=""></img>
                        </figure>
                        <a  class="text-decoration-none position-relative bg-light d-flex justify-content-start" style={{width: "200px" , height: "40px", color: "#222" ,top: "0%" ,borderRadius: "8px" , flexDirection: "column", overflow: "hidden", zIndex:'10'}}>
                            <div class="up d-flex justify-content-between align-items-center p-2">
                                <div class="dot" style={{backgroundColor: "#222", borderRadius: "50%", width: "10px", height: "10px;"}} ></div>
                                <p class="m-0">مشاهدة</p>
                                <span>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </span>
                            </div>
                            <p class="p-2 bg-success-subtle">الإكسسوارات تضيف اللمسات الأخيرة التي تكمل مظهر الحمام وتجعله أكثر عملية</p>
                        </a>
                    </article>
                </div>
            </section>

            <section  class=" grid-3  position-relative d-flex justify-content-evenly align-items-center w-100 mt-4" style={{padding:"50px 0px", height: "400px", backgroundImage:{Image}, backgroundAttachment: "fixed"}}>
                <h1 class="z-3  w-30" style={{fontSize: "60px"}}>Nile & Euphrates </h1>
                <div class="z-3 caption w-50 bg-light p-3 " >
                    <p class="fs-4" >مع سنوات من الخبرة في مجال السيراميك والحمامات، نقدم لعملائنا أفضل الخيارات لتجديد مساحاتهم الداخلية بلمسة من الفخامة والأناقة</p>
                    <p class="fs-4">من تصميمات السيراميك الفريدة إلى حلول الحمامات المتكاملة، نهدف إلى تحويل رؤيتك إلى واقع ملموس، مع التركيز على الابتكار والجودة في كل خطوة.</p>
                    <Link to={'/works'}>
                        <a href="" className="fs-4">تسوق الأن</a>
                    </Link>
                    
                </div>
            </section>

            <section  class="grid-4 mt-4 position-relative d-flex justify-content-center align-items-center w-100 " style={{padding:"50px 0px", flexDirection:"column"}}>
                <h1 class="position-relative" style={{left: "0%" , top:"25%" ,width: "200px"}}> مشاريع لنا </h1>
                <div className=" d-flex justify-content-center align-items-center " style={{flexWrap: "wrap", gap: "20px" }}>

                <article class="d-flex  justify-content-start  align-items-center p-2 bg-light" style={{width: "450px", flexDirection: "column" , textAlign: "center"}}>
                    <img class="parallaxImg w-100 h-100"  src={require("../figure/photo_2024-08-25_15-42-43.jpg")} alt=""></img>
                </article>
    
                <article class="d-flex  justify-content-start  align-items-center p-2 bg-light" style={{width: "450px",}}>
                    <img class="parallaxImg w-100 h-100"  src={require("../figure/photo_2024-08-25_15-42-48.jpg")} alt=""></img>
                </article>
    
                <article class="d-flex  justify-content-start  align-items-center p-2 bg-light" style={{width: "450px", flexDirection: "column" , textAlign: "center"}}>
                    <img class="parallaxImg w-100 h-100"  src={require("../figure/photo_2024-08-25_15-45-30.jpg")} alt=""></img>
                </article>
    
                <article class="d-flex  justify-content-start  align-items-center p-2 bg-light" style={{width: "450px", flexDirection: "column" , textAlign: "center"}}>
                    <img class="parallaxImg w-100 h-100"  src={require("../figure/photo_2024-08-25_15-45-34.jpg")} alt=""></img>
                </article>
                </div>
            </section>

            <section class="items w-100 p-1" style={{height: "fit-content", backgroundColor: "#222" }}>

                    <div class="item d-flex justify-content-evenly align-items-center p-5" style={{width: "100%" , height:"450px"}}> 
                        <div class="w-40 h-100">
                            <img src={require("../figure/photo_2024-08-25_19-07-23.jpg")} class="rounded w-80 h-100" alt="..."></img>
                        </div>
                        <div class="caption w-50 text-light mt-4 mb-4">
                        <h1 class="card-title">أرضيات وجدران السيراميك </h1>
                            <p class="card-text fs-6">الوصف: السيراميك هو الخيار الأمثل لأرضيات وجدران الحمام، حيث يجمع بين الجمال والمتانة. يُصنع من مواد مقاومة للماء والبقع،</p>
                            <p class="card-text fs-6">مما يجعله مثاليًا للبيئات الرطبة. تتنوع التصميمات بين الكلاسيكية والعصرية، مما يتيح لك إنشاء مظهر حمام فريد يناسب ذوقك.</p>
                        </div>
                    </div>

                    <div class="item d-flex justify-content-evenly align-items-center p-5" style={{width: "100%" , height:"450px"}}> 
                        <div class="w-40 h-100">
                            <img src={require("../figure/k2.JPG")} class="rounded w-80 h-100 " alt="..."></img>
                        </div>
                        <div class="caption w-50 text-light mt-4 mb-4">
                            <h1 class="card-title">البانيو</h1>
                            <p class="card-text fs-6">يوفر البانيو تجربة استحمام فاخرة بفضل تصميمه الذي يجمع بين الراحة والأناقة. تتوفر البانيوهات بأشكال متعددة مثل القائم بذاته أو المدمج،</p>
                            <p class="card-text fs-6">مما يسمح بدمجه بسلاسة في أي تصميم حمام. يُصنع من مواد عالية الجودة مثل الأكريليك أو الفايبرجلاس، التي تتميز بالمتانة والقدرة على الاحتفاظ بالحرارة لفترة أطول.</p>
                        </div>
                    </div>

                    <div class="item d-flex justify-content-evenly align-items-center p-5" style={{width: "100%" , height:"450px"}}> 
                        <div class="w-40 h-100">
                            <img src={require("../figure/k1.JPG")} class="rounded w-80 h-100" alt="..."></img>
                        </div>
                        <div class="caption w-50 text-light  mt-4 mb-4">
                            <h1 class="card-title">لخلاطات والصمامات </h1>
                            <p class="card-text fs-6">عتبر الخلاطات والصمامات جوهر التحكم في تدفق المياه ودرجة حرارتها. تأتي بتصميمات أنيقة من الكروم أو الفولاذ المقاوم للصدأ، وتُصنع بجودة عالية تضمن أداءً سلسًا ودائمًا. </p>
                            <p class="card-text fs-6"> يوفر الخلاطات استهلاكًا فعالًا للمياه مع مظهر جمالي يعزز من ديكور الحمام.</p>
                        </div>
                    </div>

                    <div class="item d-flex justify-content-evenly align-items-center p-5" style={{width: "100%" , height:"450px"}}> 
                        <div class="w-40 h-100">
                            <img src={require("../figure/k (1).jpg")} class="rounded w-80 h-100" alt="..."></img>
                        </div>
                        <div class="caption w-50 text-light  mt-4 mb-4">
                            <h1 class="card-title"> الأحواض المدمجة</h1>
                            <p class="card-text fs-6">الوصف: الأحواض المدمجة تجمع بين الراحة والجمال، حيث توفر مساحة تخزين إضافية مع الحفاظ على تصميم أنيق. تُصنع من مواد مثل الخشب المعالج والسيراميك</p>
                            <p class="card-text fs-6">مما يضمن متانة وسهولة في التنظيف. تصاميمها المتنوعة تتناسب مع مختلف أنماط الحمامات، من الكلاسيكية إلى الحديثة.</p>
                        </div>
                    </div>
            </section>

                <section class="marquee-wrapper  ">
                
                    <h1 class="marquee-text"><span><img src={require("../figure/download (2).png")} alt="" ></img></span></h1>
                    <h1 class="marquee-text"><span><img src={require("../figure/download.png")} alt="" ></img></span></h1>              
                    <h1 class="marquee-text"><span><img src={require("../figure/download (1).jfif")} alt="" ></img></span></h1>
                    <h1 class="marquee-text"><span><img src={require("../figure/download.jfif")} alt="" ></img></span></h1>
                    <h1 class="marquee-text"><span><img src={require("../figure/photo_2024-07-27_16-01-24-removebg-preview.png")} alt=""></img></span></h1>
                    <h1 class="marquee-text"><span><img src={require("../figure/download (1).png")} alt="" ></img></span></h1>
                    <h1 class="marquee-text"><span><img src={require("../figure/images.jfif")} alt="" ></img></span></h1>
                    <h1 class="marquee-text"><span><img src={require("../figure/photo_2024-07-27_16-01-15.jpg")} alt="" ></img></span></h1>
                    <h1 class="marquee-text"><span><img src={require("../figure/EGIC.png")} alt="" ></img></span></h1>
                    <h1 class="marquee-text"><span><img src={require("../figure/IMG_0833-removebg-preview.png")} alt="" ></img></span></h1>
                </section>
        <Footer/>
        </>
    )
}