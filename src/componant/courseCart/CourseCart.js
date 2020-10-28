import React from 'react';
import '../course/singleCourse/singleCourse.css'
import {Link} from "react-router-dom";
const CourseCart = (props) => {
    const cartData=props.cart;
    // const {id,title,photo,language,price,author,email}=cartData;
    const totalAmount=cartData.reduce((initial,sum)=>initial+sum.price,0);
    console.log("Amount",Number(totalAmount));
    return (
        <div>
            <div  className="cartFirstSection">
                <div>
                    {/* <h6>Cart Section</h6>   */}
                    <h3>Total :{totalAmount.toFixed(2)}</h3>                  
                    <h4>Item : {cartData.length} </h4>
                </div>
            </div>
            {
                cartData.length>0 &&<div className="cartSecondSection">
                    <div>

                    </div>
                    <div className="cartContant">
                    {
                        cartData.map(item=>
                        <div>
                        <Link to ={"/details/"+ item.id}  className="cartShort"> 
                           <div className="cartPicture">
                             {<img src={item.photo} alt=""/> }
                           </div>
                           <div className="cartinfo">
                               <p>{item.author} </p>
                               <h6>{item.language} </h6>
                           </div>
                        </Link>
                        </div>)
                    }
                        
                    </div>
                </div>
            }
            </div>
    );
};

export default CourseCart;