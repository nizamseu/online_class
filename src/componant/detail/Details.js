import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import fakeData from "../../fakeData.json"
const Details = () => {
    const {id}=useParams();
    const gback=useHistory();
    const singleData = fakeData.find( item => item.id == id);
    const {title,photo,language,price,author,email,description}=singleData;
    console.log("singleData",gback);
    return (
        <div className="details">
        <button onClick={gback.goBack} className="back"> Back</button>
           <div className="photo">
                <img src={photo} alt=""/>
           </div>
           <div className="info">
                <h1>{title}</h1><br/><br/>
                <h5> Description: {description}</h5>
                <br/><br/>
                <h3>Lecturar :{author}</h3>
                <h3>E-mail: {email}</h3><br/>
                <h3>Language :{language}</h3><br/><br/>
                <h1>Price :${price}</h1>
                
           </div>
        </div>
    );
};

export default Details;