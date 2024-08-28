import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function About(){
    return(
        <>
            <Navbar/>
            <section class="grid-6 position-relative w-100" style={{ padding:"100px 40px"}}>
                <article class="d-grid" style={{placeItems: "left"}} >
                    <h1 class="text-uppercase text-primary" style={{fontSize: "53px" , textAlign: "center"}}>من نحن :  </h1>
                    <p class="text-uppercase p-3 fs-5" style={{textAlign: "center" , height:"100px" ,whiteSpace:"wrap"}}>في  النيل و الفرات ، نحن نفخر بتقديم حلول راقية للحمامات والسيراميك، مع التركيز على الجودة الفائقة والتصميم المبتكر. منذ تأسيسنا، .</p>
    
                    <div class="step    d-flex justify-content-center align-items-center border-bottom border-primary" style={{height: "150px" , padding: "0px 0px" ,fontSize: "23px"}}>
                        <p>مهمتنا
                        مهمتنا هي تحويل الحمامات والمساحات الداخلية إلى أماكن تجمع بين الراحة والجمال، مع تقديم منتجات عالية الجودة تلبي توقعات العملاء وتتفوق عليها. نحن ملتزمون بتقديم أفضل الخامات والخدمات، لضمان رضا عملائنا الكامل.</p>
                    </div>
                    <div class="step    d-flex justify-content-evenly align-items-center border-bottom border-primary" style={{height: "120px" , padding: "20px 0px" ,fontSize: "23px"}}>
                        <p>رؤيتنا
                        رؤيتنا هي أن نصبح الاسم الأول في عالم السيراميك والحمامات، من خلال تقديم تصميمات فريدة وجودة لا تُضاهى. نسعى لأن نكون الوجهة المفضلة للعملاء الذين يبحثون عن التميز والفخامة.</p>
                    </div>
                    <div class="step    d-flex justify-content-evenly align-items-center border-bottom border-primary" style={{height: "120px" , padding: "20px 0px" ,fontSize: "23px"}}>
                        <p>منتجاتنا
                        نقدم مجموعة متنوعة من منتجات السيراميك، البانيوهات، والحمامات الفاخرة التي صُممت لتضفي لمسة من الفخامة والراحة على أي مساحة. سواء كنت تبحث عن تصاميم كلاسيكية أو عصرية، لدينا ما يناسب ذوقك.</p>
                    </div>
                </article>
            </section>
            <Footer/>
        </>
        
    )
}