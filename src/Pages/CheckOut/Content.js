import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { useEffect, useState } from "react";

function Content () {
    const API_URL = ' http://localhost:5001/payment_cards';
    const API = ' http://localhost:5001/payment-delivery_courier';
    const API_Cart = ' http://localhost:5001/products';
    const [cards, setCards] = useState([]);
    const [couriers, setCourier] = useState([]);
    const [cart, setCart] = useState([]);


    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( ()=>{
        const fetchItems = async () => { 
        try { 
            const response = await fetch(API_Cart);
            if(!response.ok) throw Error('No data');
            const listItems = await response.json();
            setCart(listItems);
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

    useEffect( ()=>{
    const fetchItems = async () => { 
    try { 
        const response = await fetch(API_URL);
        if(!response.ok) throw Error('No data');
        const listItems = await response.json();
        setCards(listItems);
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

    useEffect( ()=>{
        const fetchItems = async () => { 
        try { 
            const response = await fetch(API);
            if(!response.ok) throw Error('No data');
            const listItems = await response.json();
            setCourier(listItems);
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
        <Container fluid my-5>
            <Row className="g-4 mx-5">
                <Col md={5} className="order-md-last">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="feat-font text-dark">Your Cart</span>
                        <span className="badge bg-danger rounded-pill">4</span>
                    </h4>
                    { isLoading && <p> Loading Items please wait... </p> } 
                    { fetchError && <p style={ {color:"red" }}> { fetchError } </p> } 
                    { cart.filter(products => products.prod_category === "safety gears").map( (filteredProducts)=>(
                    <Row className="border">
                        <Col md={2} sm={2} className="border-1"> <img className="m-1 me-3 position-relative" style={{width:"60px", height:"60px"}}  src={filteredProducts.prod_img} alt="..."/></Col>
                        <Col md={7} sm={7}> <h6 className="text-start my-0 fw-bolder">{filteredProducts.prod_code}</h6>
                            <small className="text-muted">{filteredProducts.prod_name}</small></Col>
                        <Col md={3} sm={3}><small className="fw-bolder text-success textt-wrap postion-relative ">₱{filteredProducts.prod_price}</small>
                        <small><Button variant="warning" className="shadow" size="sm">Check out</Button></small>
                        </Col>
                    </Row>
                    ))}
                    
                </Col>
                <Col md={7} px-3>
                    <h4 className="feat-font mb-3 ">PAYMENT</h4>
                    {/* <li className="list-group-item d-md-flex justify-content-between lh-sm mx-auto mb-3 bg-light p-1">
            <img className="m-1 me-3" width="60px" height="60px" src="projectassets/acc1.jpg" alt=""/>
            <div className="me-2">
              <h6 className="my-0 fw-bolder">LTHD18VLI-2BLX</h6>
              
              <small className="text-muted">LOTUS BRUSHLESS 18V X-Line Cordless Impact Drill w/2pcs Battery Charger & Hard Case</small>
            </div>
            <h6 className="fw-bolder text-success">₱1,499.00</h6>
          </li> */}
          <hr className="hr-t mx-5"/>
          <Form classNameName="needs-validation" validate>
            <Row classNameName="g-3 px-3">
                <Col sm={6}>
                <label for="firstName" className="form-label">First name</label>
              <input type="text" className="form-control" id="firstName" placeholder="" value="" required/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
                </Col>
                <Col sm={6}>
                <label for="lastName" className="form-label">Last name</label>
              <input type="text" className="form-control" id="lastName" placeholder="" value="" required/>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
                </Col>
                <Col md={12}>
                <label for="username" className="form-label">Username</label>
              <div className="input-group has-validation">
                <span className="input-group-text">@</span>
                <input type="text" className="form-control" id="username" placeholder="Username" required/>
              <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div>
                </Col>
                <Col md={12}>
                <label for="email" className="form-label">Email <span className="text-muted"></span></label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
                </Col>
                <Col md={12}>
                <label for="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" placeholder="1234 Main St" required/>
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
                </Col>
                <Col md={5}>
                <label for="country" className="form-label">Country</label>
              <select className="form-select" id="country" required>
                <option value="">Choose...</option>
                <option>Philippines</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid country.
              </div>
                </Col>
                <Col md={4}>
                <label for="state" className="form-label">Province</label>
              <select className="form-select" id="state" required>
                <option value="">Choose...</option>
                <option>Abra</option>
                <option>NCR</option>
              </select>
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
                </Col>
                <Col md={3}>
                <label for="zip" className="form-label">Zip</label>
                <input type="text" className="form-control" id="zip" placeholder="" required/>
              <div className="invalid-feedback">
                Zip code required.
              </div>
                </Col>
                <hr className="my-4 mx-5"/>
                <div className="form-check mx-5">
            <input type="checkbox" className="form-check-input" id="same-address"/>
            <label className="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
          </div>
          <div className="form-check mx-5">
            <input type="checkbox" className="form-check-input" id="save-info"/>
            <label className="form-check-label" for="save-info">Save this information for next time</label>
          </div>
          <hr className="my-4 mx-5"/>
          <h4 className="mb-3">Payment Options</h4>
          <div className="my-3 w-25 justify-content-center">
            <div className="container-lg">
            <div className="d-md-flex list-group-item justify-content-between">
            { isLoading && <p> Loading Items please wait... </p> } 
          { fetchError && <p style={ {color:"red" }}> { fetchError } </p> } 
            { cards.map( (card)=>(
            <div className="form-check btn" key={card.id}>
                <img style={{width:"100px"}} src={card.image} alt={card.card_name}/>
              </div>
             ))}
          </div>
        </div>
      </div>
          <div className="row gy-3">
            <div className="col-md-6">
              <label for="cc-name" className="form-label">Name on card</label>
              <input type="text" className="form-control" id="cc-name" placeholder="" required/>
              <small className="text-muted">Full name as displayed on card</small>
              <div className="invalid-feedback">
                Name on card is required
              </div>
            </div>

            <div className="col-md-6">
              <label for="cc-number" className="form-label">Credit card number</label>
              <input type="text" className="form-control" id="cc-number" placeholder="" required/>
              <div className="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div className="col-md-3">
              <label for="cc-expiration" className="form-label">Expiration</label>
              <input type="text" className="form-control" id="cc-expiration" placeholder="" required/>
              <div className="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div className="col-md-3">
              <label for="cc-cvv" className="form-label">CVV</label>
              <input type="text" className="form-control" id="cc-cvv" placeholder="" required/>
              <div className="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>
          <hr className="my-4"/>
          <h4 className="mb-3">Choose your Courier</h4>
          <div className="my-3 w-25 justify-content-center">
            <div className="container-lg">
                <div className="d-md-flex list-group-item justify-content-between">
                { isLoading && <p> Loading Items please wait... </p> } 
          { fetchError && <p style={ {color:"red" }}> { fetchError } </p> } 
            { couriers.map( (courier)=>(
                <div className="form-check btn" key={courier.id}>
                    <img style={{width:"100px"}} src={courier.image} alt={courier.courier_name}/>
                </div>
                ))}
                </div>
            </div>
      </div>
          <hr className="my-4"/>
          <button className="w-50 mx-0 btn btn-warning btn" type="submit">PROCEED</button>
            </Row>
          </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default Content;