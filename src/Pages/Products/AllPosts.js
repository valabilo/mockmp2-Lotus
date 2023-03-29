import { Container, Nav, Row, Col, Card, Dropdown, Button} from "react-bootstrap";
import React from 'react';
import CarouselImg from '../../db/lotusdb.json'

const AllPosts = ({ products, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
    return (
      <Container fluid className="mx-auto">
          <div className="mx-auto">
          <h1 class="feat-font w-50 mx-auto mb-0">ALL PRODUCTS</h1>
          </div>
          <div class="container mt-0">
              <Row>
                  <Col md={3} class="pt-2 ps-5">
                      <h3 class="foot-font">PRODUCT CATEGORIES</h3>
                      <hr class="me-3"/> 
                      <Nav.Link href="/products" active><p class="mt-3">All Products</p></Nav.Link>
                      <Nav.Link href="/products/powertools"><p class="mt-3">Power Tools</p></Nav.Link>
                      <Nav.Link href="/products/handtools"><p>Hand Tools</p></Nav.Link>
                      <Nav.Link href="/products/gardentools"><p>Garden tools</p></Nav.Link>
                      <Nav.Link href="/products/accessories"><p>Accessories</p></Nav.Link>
                      <Nav.Link href="/products/safetygears"><p>Safety Gears</p></Nav.Link>
                      <Nav.Link href="/products/spareparts"><p>Spare Parts</p></Nav.Link>
                  </Col>
        <Col md={9}>
          <Container >
            <Row>
              <Col md={10}>
              </Col>
              <Col md={2}>
            <Dropdown className="d-inline">
              <Dropdown.Toggle  variant="outline-success" id="dropdown-autoclose-true" className="float-right">
                Sort
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Electric Saw</Dropdown.Item>
                <Dropdown.Item href="#">Drills</Dropdown.Item>
                <Dropdown.Item href="#">Cordless</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
              </Col>
            </Row>
          </Container>
        <Row>
          { CarouselImg && products.map (product => (
          <Col xs={12} md={6} lg={4} key={product.id}>
              <Container fluid className="my-2">
                  <Card 
                    // style={{height: 200em}}
                    className=" border-0 ">
                    <Card.Img 
                      variant="top"
                      className="img-zoom"
                      src={product.prod_img}
                      alt={product.prod_name} />
                    <Card.Body 
                      className="h-100 m-0 p-0 mt-2" >
                      <Card.Title 
                        className="fw-bolder text-uppercase lh-1">
                        {product.prod_name}  
                      </Card.Title>
                      <Card.Subtitle className="fw-bolder">
                        {product.prod_code}
                      </Card.Subtitle>
                      <div className="d-flex justify-content-between">
                        <Card.Text 
                          className="mt-3 mb-0 fw-bolder text-danger">
                          {product.prod_description}!
                        </Card.Text>
                        <div>
                          <Card.Text 
                            className="mt-2 mb-0 fw-bold text-">
                            {`₱${product.prod_price}`}
                          </Card.Text>
                          <small 
                            className="mt-3 mb-0 fw-bolder text-muted">
                            {`Stocks: ${product.stocks}`}
                          </small>
                        </div>
                      </div>
                    </Card.Body>
                    <Card.Footer 
                      className="d-flex justify-content-between">
                      <Nav.Link 
                        disabled={product.stocks===0? true: false} 
                        className="mt-2 mb-0 text-decoration-underline"> 
                        Add to Cart 
                      </Nav.Link>
                      <Button 
                        variant="warning text-secondary" 
                        disabled={product.stocks===0? true: false}>
                          BUY NOW
                      </Button>
                    </Card.Footer>
                  </Card>
                  
                  
        </Container>
        </Col>
        ))}
      </Row>
      </Col>
    </Row>
    </div>
        </Container>
    )
}

export default AllPosts;
