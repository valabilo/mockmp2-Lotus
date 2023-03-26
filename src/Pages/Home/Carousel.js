import React,{ useEffect, useState } from "react";
import CarouselImg from '../../db/lotusdb.json'
import Carousel from 'react-bootstrap/Carousel';

function Banner(){
  const API_URL = ' http://localhost:5001/banner';
    const [banner, setBanner] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect( ()=>{
    const fetchItems = async () => { 
    try { 
        const response = await fetch(API_URL);
        if(!response.ok) throw Error('No data');
        const listItems = await response.json();
        setBanner(listItems);
    } catch(err){
        console.log(err.message);
        setFetchError(err.message)      
    } finally{
        setIsLoading(false)
    }}
    setTimeout(()=>{
        (async ()=> await fetchItems())();
    }, 300); //1k is 1 second
    }, []); //it will execute onpage load

    return  (
        <React.Fragment>
        <Carousel>  
            { isLoading && <p> Loading Items please wait... </p> } 
          { fetchError && <p style={ {color:"red" }}> { fetchError } </p> } 
            {CarouselImg && banner.map( (banners)=>(
            <Carousel.Item 
                key={banners.id}
                interval={5000}>
                <img 
                    style={{height: 600}}
                    src={banners.image}
                    className="d-block w-100 carousel-img"  
                    alt={banners.title}/>
            </Carousel.Item>
            ))}
        </Carousel>
        </React.Fragment>
    );
}   
export default Banner;