import { Container, Nav, Row, Col, Card, InputGroup, Button, Form} from "react-bootstrap";
import React, {useEffect, useState} from 'react';
import axios from "axios";

const AllPosts = ({loading }) => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);

  useEffect(() => {
    loadUserData();
  }, []);
  const loadUserData = async () => {
    return await axios.get("http://localhost:5001/products")
    .then((response) => setData(response.data))
    .then((err) => console.log(err));
  };
  console.log("data", data)

  const handleReset = ()=>{
    loadUserData();
  }

  const handleSearch = async (e)=>{
    e.preventDefault();
    return await axios.get(`http://localhost:5001/products?q=${value}`)
    .then((res) => {
      setData(res.data)
      
    })
    .catch((e) => console.log(e))
  }

  const handleFilter = async (value)=>{
    return await axios.get(`http://localhost:5001/products?prod_category=${value}&_order=asc`)
    .then((res) => {
      setData(res.data);
    })
    .catch((e) => console.log(e))
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }
    return (
      <Container fluid className="mx-auto">
          <div className="mx-auto">
          <h1 className="feat-font w-50 mx-auto mb-0" >ALL PRODUCTS</h1>
          </div>
          <div className="container mt-0">
              <Row>
                  <Col md={3} className="pt-2 ps-5">
                      <h3 className="foot-font">PRODUCT CATEGORIES</h3>
                      <hr className="me-3"/> 
                      <ul className="list-group list-group-flush pe-5">
                        <li className="list-group-item ps-0"><Button className="" variant="link" onClick={() => handleReset()}>All Products</Button></li>
                        <li className="list-group-item ps-0"><Button className="" variant="link" onClick={()=>handleFilter("power tools")} >Power Tools</Button></li>
                        <li className="list-group-item ps-0"><Button className="" variant="link" onClick={()=>handleFilter("hand tools")} >Hand Tools</Button></li>
                        <li className="list-group-item ps-0"><Button className="" variant="link" onClick={()=>handleFilter("garden tools")} >Garden tools</Button></li>
                        <li className="list-group-item ps-0"><Button className="" variant="link" onClick={()=>handleFilter("accessories")}>Accessories</Button></li>
                        <li className="list-group-item ps-0"><Button className="" variant="link" onClick={()=>handleFilter("safety gears")} >Safety Gears</Button></li>
                        <li className="list-group-item ps-0"><Button className="" variant="link" onClick={()=>handleFilter("spare parts")} >Spare Parts</Button></li>
                      </ul>
                  </Col>
        <Col md={9}>
          <Container >
            <Row>
              <Col md={8}>
              </Col>
              <Col md={4}>
                <Form onSubmit={handleSearch}>
                <InputGroup
                  type="text" 
                  className="form-control w-100 border-0" 
                  placeholder="Search Product Name"
                  aria-label="Search Product"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  >
                  <Button type='submit' variant="outline-warning">Search</Button>
                  <Form.Control
                    aria-label="Search Product"
                  />
                </InputGroup>
                </Form>
                
              </Col>
            </Row>
          </Container>
        <Row>
        {data.length === 0 ? (
          <p>No Data Found</p>): (
            data.map((item, index) => (
          <Col xs={12} md={6} lg={4} key={index}>
              <Container fluid className="my-2">
                  <Card 
                    // style={{hlink: 200em}}
                    className=" border-0 ">
                    <Card.Img 
                      variant="top"
                      className="img-zoom"
                      src={item.prod_img}
                      alt={item.prod_name} />
                    <Card.Body 
                      className="h-100 m-0 p-0 mt-2" >
                      <Card.Title 
                        className="fw-bolder text-uppercase lh-1">
                        {item.prod_name}  
                      </Card.Title>
                      <Card.Subtitle className="fw-bolder">
                        {item.prod_code}
                      </Card.Subtitle>
                      <div className="d-flex justify-content-between">
                        <Card.Text 
                          className="mt-3 mb-0 fw-bolder text-danger">
                          {item.prod_description}!
                        </Card.Text>
                        <div>
                          <Card.Text 
                            className="mt-2 mb-0 fw-bold text-">
                            {`₱${item.prod_price}`}
                          </Card.Text>
                          <small 
                            className="mt-3 mb-0 fw-bolder text-muted">
                            {`Stocks: ${item.stocks}`}
                          </small>
                        </div>
                      </div>
                    </Card.Body>
                    <Card.Footer 
                      className="d-flex justify-content-between">
                      <Nav.Link 
                        disabled={item.stocks===0? true: false} 
                        className="mt-2 mb-0 text-decoration-underline"> 
                        Add to Cart 
                      </Nav.Link>
                      <Button href="./checkout"
                        variant="warning text-secondary" 
                        disabled={item.stocks===0? true: false}>
                          BUY NOW
                      </Button>
                    </Card.Footer>
                  </Card>
        </Container>
        </Col>
        ))
      )}
      </Row>
      </Col>
    </Row>
    </div>
        </Container>
    )
}
export default AllPosts;

