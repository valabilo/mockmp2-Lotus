import { Container, Button,Col, Row } from "react-bootstrap"
import React,{ useEffect, useState } from "react";
import CarouselImg from '../../db/lotusdb.json'

function Hero () {
    const API_URL = ' http://localhost:5001/heros';
    const [heros, setHero] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect( ()=>{
    const fetchItems = async () => { 
    try { 
        const response = await fetch(API_URL);
        if(!response.ok) throw Error('No data');
        const listItems = await response.json();
        setHero(listItems);
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

    return (
        <Container fluid className="my-5 bg-dark p-5">
            <Container>
            { isLoading && <p> Loading Items please wait... </p> } 
                    { fetchError && <p style={ {color:"red" }}> { fetchError } </p> } 
                    {CarouselImg && heros.map((hero)=>(
                <Row key={hero.id} className="mx-auto">
                    <Col md={6} className=" hero1 p-0">
                        <div className="bg-success p-5 text-justify text-light display-1 text-center h-100" >
                        <h1>SOME TEXT HERE</h1>
                        <p>Some text here...</p>
                        <Button className="feat-btn btn btn-warning fw-bold" href="Products.html#products">SHOP NOW</Button>
                        </div>
                    </Col>
                    <Col md={6} className="p-0">
                            <img className="hero-bg px-0 bg-dark text-light display-1 text-center h-100" src={hero.image} alt=""/>
                        
                    </Col>
                </Row>
                ))}
            </Container>
        </Container>
    )
}
export default Hero;