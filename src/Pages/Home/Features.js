import React,{ useEffect, useState, } from "react";
import Slider from 'react-slick';
import { Container, Card, Col, Row, Button, Nav} from "react-bootstrap";

import CarouselImg from '../../db/lotusdb.json'
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "grey", borderRadius: 13}}
        onClick={onClick}
      />
    );
  };
function SamplePreviousArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "grey", borderRadius: 13}}
        onClick={onClick}
      />
    );
  };
function Features () {
    const API_URL = ' http://localhost:5001/products';
    const [products, setProducts] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect( ()=>{
    const fetchItems = async () => { 
    try { 
        const response = await fetch(API_URL);
        if(!response.ok) throw Error('No data');
        const listItems = await response.json();
        setProducts(listItems);
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
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePreviousArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 912,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          className:"mx-5 gap-5",
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
          className:"mx-5",
        },
      },
      {
        breakpoint: 609,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          className:"mx-5",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container 
      className="px-3">
      <h2 
        className="fw-bolder feat-font text-start py-5 px-3"> 
        FEATURED PRODUCTS
      </h2>
      <Slider {...settings}>
        { isLoading && <p> Loading Items please wait... </p> } 
          { fetchError && <p style={ {color:"red" }}> { fetchError } </p> } 
            { CarouselImg && products.filter(products => products.prod_description === "New Arrival").map( (filteredProducts)=>(
            <Row 
              xs={1} md={1} 
              className="g-2 px-3 mt-2 align-items-stretch" 
              key={filteredProducts.id}>
              <Col 
                className="d-flex align-items-stretch">
                  <Card 
                    // style={{height: 200em}}
                    className="card-size border-0 ">
                    <Card.Img 
                      variant="top"
                      className="img-zoom"
                      src={filteredProducts.prod_img}
                      alt={filteredProducts.prod_name} />
                    <Card.Body 
                      className="h-100 m-0 p-0 mt-2" >
                      <Card.Title 
                        className="fw-bolder text-uppercase lh-1">
                        {filteredProducts.prod_name}  
                      </Card.Title>
                      <Card.Subtitle className="fw-bolder">
                        {filteredProducts.prod_code}
                      </Card.Subtitle>
                      <div className="d-flex justify-content-between">
                        <Card.Text 
                          className="mt-3 mb-0 fw-bolder text-danger">
                          {filteredProducts.prod_description}!
                        </Card.Text>
                        <div>
                          <Card.Text 
                            className="mt-2 mb-0 fw-bold text-">
                            {`₱${filteredProducts.prod_price}`}
                          </Card.Text>
                          <small 
                            className="mt-3 mb-0 fw-bolder text-muted">
                            {`Stocks: ${filteredProducts.stocks}`}
                          </small>
                        </div>
                      </div>
                    </Card.Body>
                    <Card.Footer 
                      className="d-flex justify-content-between">
                      <Nav.Link 
                        disabled={filteredProducts.stocks===0? true: false} 
                        className="mt-2 mb-0 text-decoration-underline"> 
                        Add to Cart 
                      </Nav.Link>
                      <Button 
                        variant="warning text-secondary" 
                        disabled={filteredProducts.stocks===0? true: false}>
                          BUY NOW
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
          ))}
        </Slider>
    </Container>
  );
}
export default Features;