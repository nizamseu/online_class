import React, { useEffect, useState } from 'react';
import CourseCart from '../courseCart/CourseCart';
import SingleCourse from './singleCourse/SingleCourse';
import './singleCourse/singleCourse.css';
import fakeData from "../../fakeData.json"
const Course = () => {

    const [articles,setArticles]=useState(fakeData)
    const [cart,setCart]=useState([])
   console.log("fake",fakeData);
    // useEffect(()=>{
    //     const url='https://newsapi.org/v2/top-headlines?country=us&apiKey=1e28de0db0324a0890b8afb6af784e50'
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(data=> setArticles(data.articles))

    // },[])

    const handleEvent=(item)=>{
        const newCart=[...cart,item]
        setCart(newCart)
    }

//https://www.breakingbadapi.com/api/characters?limit=50

    return (
        <div className="cousrses">
            
            <div className="courseSection">
                    {
                        articles.map(article=> 
                        <SingleCourse article={article} 
                        key={article.id}
                        handleEvent={handleEvent}
                        
                        ></SingleCourse>)
                    }

            </div>

            <div className="cartSection">

                <CourseCart cart={cart}></CourseCart>
            </div>

        </div>
    );
};

export default Course;