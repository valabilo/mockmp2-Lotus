import { Container, Row, Col } from "react-bootstrap"
import React,{ useEffect, useState } from "react";
import CarouselImg from '../../db/lotusdb.json'

function PartnerStoresP () {
    const API_URL = ' http://localhost:5001/partner_physical-stores';
    const [stores, setStores] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect( ()=>{
    const fetchItems = async () => { 
    try { 
        const response = await fetch(API_URL);
        if(!response.ok) throw Error('No data');
        const listItems = await response.json();
        setStores(listItems);
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
        <section className="mt-5 pt-5">
        <Container className="h-100 mb-3">
            <h2 className="store-font text-center fw-bolder" >OUR PARTNER STORES</h2>
            <hr 
                className="underline"/>
            <Row 
                className="h-25 py-3">
                    { isLoading && <p> Loading Items please wait... </p> } 
                    { fetchError && <p style={ {color:"red" }}> { fetchError } </p> } 
                    {CarouselImg && stores.map((store)=>(
                <Col sm={2} key={store.id} className="g-2 align-content-center mx-auto" >
                <img 
                    className="store-logo mb-2 mx-auto d-block" 
                    src={store.logo} 
                    alt={store.name}/>
                </Col>
                ))}
            </Row>
        </Container>  
        </section>  
    )
}
export default PartnerStoresP;