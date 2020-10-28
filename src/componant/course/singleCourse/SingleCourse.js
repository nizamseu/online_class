import React from 'react';
import { Button,Card } from 'react-bootstrap';
import './singleCourse.css';
import {Link} from "react-router-dom";

const SingleCourse = (props) => {
    const {id,title,photo,language,price,author,email}=props.article;
   const handleEvent=props.handleEvent;
    return (
        <div className="singleCourse">
            
                <Card className="cart">
                    <Card.Img variant="top" src={photo} />
                    <Card.Body >
                        <Link to ={"/details/"+ id} className="link"> 
                            <Card.Title>{title}</Card.Title> 
                        </Link>
                        <Card.Text>
                            <br/>
                            <h6>{author}</h6>
                            {email}
                        </Card.Text>
                        <Card.Text>
                            <h5>Language: {language}</h5> 
                        </Card.Text>
                        <Card.Text>
                            <br/>
                            <h3>${price}</h3>
                        </Card.Text>
                       
                    </Card.Body>
                    <Button onClick={()=>handleEvent(props.article)} variant="primary">ENROLL NOW</Button>
                </Card>
           

            

       

        </div>
    );
};

export default SingleCourse;