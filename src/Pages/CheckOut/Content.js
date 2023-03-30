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
                        <span class="badge bg-danger rounded-pill">4</span>
                    </h4>
                    { isLoading && <p> Loading Items please wait... </p> } 
                    { fetchError && <p style={ {color:"red" }}> { fetchError } </p> } 
                    { cart.filter(products => products.prod_category === "safety gears").map( (filteredProducts)=>(
                    <Row className="border">
                        <Col md={2} sm={2} className="border-1"> <img class="m-1 me-3 position-relative" style={{width:"60px", height:"60px"}}  src={filteredProducts.prod_img} alt="..."/></Col>
                        <Col md={7} sm={7}> <h6 class="text-start my-0 fw-bolder">{filteredProducts.prod_code}</h6>
                            <small class="text-muted">{filteredProducts.prod_name}</small></Col>
                        <Col md={3} sm={3}><small class="fw-bolder text-success textt-wrap postion-relative ">₱{filteredProducts.prod_price}</small>
                        <small><Button variant="warning" className="shadow" size="sm">Check out</Button></small>
                        </Col>
                    </Row>
                    ))}
                    
                </Col>
                <Col md={7} px-3>
                    <h4 class="feat-font mb-3 ">PAYMENT</h4>
                    {/* <li class="list-group-item d-md-flex justify-content-between lh-sm mx-auto mb-3 bg-light p-1">
            <img class="m-1 me-3" width="60px" height="60px" src="projectassets/acc1.jpg" alt=""/>
            <div class="me-2">
              <h6 class="my-0 fw-bolder">LTHD18VLI-2BLX</h6>
              
              <small class="text-muted">LOTUS BRUSHLESS 18V X-Line Cordless Impact Drill w/2pcs Battery Charger & Hard Case</small>
            </div>
            <h6 class="fw-bolder text-success">₱1,499.00</h6>
          </li> */}
          <hr class="hr-t mx-5"/>
          <Form className="needs-validation" validate>
            <Row className="g-3 px-3">
                <Col sm={6}>
                <label for="firstName" class="form-label">First name</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required/>
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
                </Col>
                <Col sm={6}>
                <label for="lastName" class="form-label">Last name</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value="" required/>
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
                </Col>
                <Col md={12}>
                <label for="username" class="form-label">Username</label>
              <div class="input-group has-validation">
                <span class="input-group-text">@</span>
                <input type="text" class="form-control" id="username" placeholder="Username" required/>
              <div class="invalid-feedback">
                  Your username is required.
                </div>
              </div>
                </Col>
                <Col md={12}>
                <label for="email" class="form-label">Email <span class="text-muted"></span></label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com"/>
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
                </Col>
                <Col md={12}>
                <label for="address" class="form-label">Address</label>
              <input type="text" class="form-control" id="address" placeholder="1234 Main St" required/>
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
                </Col>
                <Col md={5}>
                <label for="country" class="form-label">Country</label>
              <select class="form-select" id="country" required>
                <option value="">Choose...</option>
                <option>Philippines</option>
              </select>
              <div class="invalid-feedback">
                Please select a valid country.
              </div>
                </Col>
                <Col md={4}>
                <label for="state" class="form-label">Province</label>
              <select class="form-select" id="state" required>
                <option value="">Choose...</option>
                <option>Abra</option>
                <option>NCR</option>
              </select>
              <div class="invalid-feedback">
                Please provide a valid state.
              </div>
                </Col>
                <Col md={3}>
                <label for="zip" class="form-label">Zip</label>
                <input type="text" class="form-control" id="zip" placeholder="" required/>
              <div class="invalid-feedback">
                Zip code required.
              </div>
                </Col>
                <hr class="my-4 mx-5"/>
                <div class="form-check mx-5">
            <input type="checkbox" class="form-check-input" id="same-address"/>
            <label class="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
          </div>
          <div class="form-check mx-5">
            <input type="checkbox" class="form-check-input" id="save-info"/>
            <label class="form-check-label" for="save-info">Save this information for next time</label>
          </div>
          <hr class="my-4 mx-5"/>
          <h4 class="mb-3">Payment Options</h4>
          <div class="my-3 w-25 justify-content-center">
            <div class="container-lg">
            <div class="d-md-flex list-group-item justify-content-between">
            { isLoading && <p> Loading Items please wait... </p> } 
          { fetchError && <p style={ {color:"red" }}> { fetchError } </p> } 
            { cards.map( (card)=>(
            <div class="form-check btn" key={card.id}>
                <img style={{width:"100px"}} src={card.image} alt={card.card_name}/>
              </div>
             ))}
          </div>
        </div>
      </div>
          <div class="row gy-3">
            <div class="col-md-6">
              <label for="cc-name" class="form-label">Name on card</label>
              <input type="text" class="form-control" id="cc-name" placeholder="" required/>
              <small class="text-muted">Full name as displayed on card</small>
              <div class="invalid-feedback">
                Name on card is required
              </div>
            </div>

            <div class="col-md-6">
              <label for="cc-number" class="form-label">Credit card number</label>
              <input type="text" class="form-control" id="cc-number" placeholder="" required/>
              <div class="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-expiration" class="form-label">Expiration</label>
              <input type="text" class="form-control" id="cc-expiration" placeholder="" required/>
              <div class="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-cvv" class="form-label">CVV</label>
              <input type="text" class="form-control" id="cc-cvv" placeholder="" required/>
              <div class="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>
          <hr class="my-4"/>
          <h4 class="mb-3">Choose your Courier</h4>
          <div class="my-3 w-25 justify-content-center">
            <div class="container-lg">
                <div class="d-md-flex list-group-item justify-content-between">
                { isLoading && <p> Loading Items please wait... </p> } 
          { fetchError && <p style={ {color:"red" }}> { fetchError } </p> } 
            { couriers.map( (courier)=>(
                <div class="form-check btn" key={courier.id}>
                    <img style={{width:"100px"}} src={courier.image} alt={courier.courier_name}/>
                </div>
                ))}
                </div>
            </div>
      </div>
          <hr class="my-4"/>
          <button class="w-50 mx-0 btn btn-warning btn" type="submit">PROCEED</button>
            </Row>
          </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default Content;