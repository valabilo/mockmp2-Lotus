import { Container, Nav, Row, Col, Card, Dropdown, Button, DropdownButton} from "react-bootstrap";
import React from 'react';
import CarouselImg from '../../db/lotusdb.json'

function PowerToolsPost () {
    const API_URL = 'http://localhost:5001/products';
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
    } catch(e){
        console.log(e.message);
        setFetchError(e.message)      
    } finally{
        setIsLoading(false)
    }}
    setTimeout(()=>{
        (async ()=> await fetchItems())();
    }, 300); //1k is 1 second
    }, []); //it will execute onpage load

  
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
                      <Nav.Link href="/products"><p class="mt-3">All Products</p></Nav.Link>
                      <Nav.Link href="/products/powertools" active><p class="mt-3">Power Tools</p></Nav.Link>
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
        { isLoading && <p> Loading Items please wait... </p> } 
          { fetchError && <p style={ {color:"red" }}> { fetchError } </p> } 
            { CarouselImg && products.filter(products => products.prod_category === "power tools").map( (filteredProducts)=>(
          <Col xs={12} md={6} lg={4} key={filteredProducts.id}>
              <Container fluid className="my-2">
                  <Card 
                    className=" border-0 ">
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
        </Container>
        </Col>
        ))}
      </Row>
      </Col>
    </Row>
    </div>
        </Container>
    )}

export default PowerToolsPost;
