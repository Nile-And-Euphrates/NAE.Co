import { Link } from 'react-router-dom';

export default function Product({id , name ,price,image , category,discountAmount , discount, description}){
    return(  
            <div class="card position-relative" cat={category} style={{width: "20rem"}}>
            {
                discount === true && discountAmount !== 0?
                <div className='position-absolute bg-primary  d-flex justify-content-center align-items-center text-light' style={{right:"10px" , top:"0" , width:"40px" , height:"80px" ,}}>{discountAmount}%</div>
                :
                <div></div>
            }
        <img src={image} class="card-img-top" style={{width:"319px", height:"230px" , objectFit:"cover"}} alt="..."></img>
        <div class="card-body">
            <div className="d-flex justify-content-between">
                <h5>{name}</h5>
                {
                    discount === true && discountAmount !== 0?
                    <p className='position-relative'>{price-(price * discountAmount / 100)} ج.م<span className='position-absolute text-decoration-line-through text-secondary' style={{bottom:"-30px" , left:"-30%" , width:'100px', textAlign:'center'}}>{price} ج.م</span></p>
                    :
                    <p>{price}ج.م</p>
                }
                
            </div>
            <p class="card-text">{description.slice(0,27)}...</p>
            <Link to={`/Product/${id}`}>
                <a href="#" class="btn btn-primary">عرض منتج</a>
            </Link>
        </div>
        </div>
    )
}