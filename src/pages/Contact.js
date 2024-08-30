import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "./style/Contact.css"
export default function Home(){
    return(
        <>
            <Navbar/>
            <div class="contact">
                <div class="container">
                    <div class="main-heading">
                            <h1>تواصل معنا </h1>
                            <p className="fs-4">نحن هنا لمساعدتك! إذا كان لديك أي استفسارات، تعليقات، أو طلبات، لا تتردد في التواصل معنا. نحن نحرص على تقديم أفضل خدمة ممكنة ونرحب بأي فرصة للتحدث معك.</p>
                        </div>
                    <div class="content">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d215.80965710291514!2d31.356357258428496!3d30.066838290121016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDA0JzAwLjYiTiAzMcKwMjEnMjIuNiJF!5e0!3m2!1sar!2seg!4v1724586138458!5m2!1sar!2seg"  width="700" height="500" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                            <div class="info">
                                <h4>اتصل بنا </h4>
                                <span class="phone">0114-145-634-2</span>
                                <h4>عنوان</h4>
                                <address>  م 29 شارع محمد المقريفي - من حسن المأمون - مدينة نصر  <br></br> القاهرة  <br/> </address>
                            </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}