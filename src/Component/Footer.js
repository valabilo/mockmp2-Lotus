import { Container, Nav, Col, Row, Form, Button } from "react-bootstrap";
import logo from '../assets/logo.jpg'
import phone from '../assets/phone-icon.png'
import React,{ useEffect, useState, } from "react";

function Footer () {
    const date =  new Date().getFullYear();
    const API_URL = 'http://localhost:5001/contacts'
    const [contacts, setContacts] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect( ()=>{
    const fetchItems = async () => { 
    try { 
        const response = await fetch(API_URL);
        if(!response.ok) throw Error('No data');
        const listItems = await response.json();
        setContacts(listItems);
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
        <section className="mt-3 px-0">
            <Container fluid className=" ban">
            <h2 class="text-center py-3">PERFORMANCE, DELIVERED</h2>
            </Container>
            <div id="footer">
            <Row className="px-3 pt-3 mx-0">
                <Col md={4} >
                    <div className="footer-logo mb-4">
                        <Nav.Link>
                            <img src={logo} alt="..."
                            className="footer-img"/>
                        </Nav.Link>
                    </div>
                    <div class="footer-support">
                        <h3 class="foot-font">Support</h3>
                        <hr class="ms-4"/>
                        <Nav.Link href="/"><p>Service Center</p></Nav.Link>
                        <p><Nav.Link href="/">Product Registration</Nav.Link></p>
                        <p><Nav.Link href="/">Warranty Informations</Nav.Link></p>
                        <p><Nav.Link href="/">FAQs</Nav.Link></p>
                    </div>
                </Col>
                <Col md={4}>
                <div class="foot">
                        <div>
                            <h3 class="foot-font footer-about">About Us</h3>
                            <hr class="ms-4"/>    
                            <p><Nav.Link href="">Why Lotus</Nav.Link></p>
                            <p><Nav.Link href="">Featured Articles</Nav.Link></p>
                        </div>
                        
                        <div >
                        <h3 class="footer-contact foot-font">Contact Us</h3>
                            <hr class="ms-4"/>
                            <div>
                            { isLoading && <p> Loading Items please wait... </p> } 
                            { fetchError && <p style={ {color:"red" }}> { fetchError } </p> } 
                            { contacts.map( (contact)=>(
                            <div class="col-md-4 d-flex gap-1" key={contact.id}>
                                <img width="20px" height="20px" src={phone} alt=""/>
                                <p class="text-nowrap">{contact.contact}</p>
                            </div>
                            ))}
                            {/* <div class="col-md-4 d-flex gap-1">
                                <img width="20px" height="20px" src={phone} alt=""/>
                                <p class="text-nowrap">{contact}</p>
                            </div> */}
                            
                            </div>
                        </div>
                        <div>
                            <h3 class="foot-font">Follow Us</h3>
                        </div>
                        <hr class="ms-4"/>
                        <div class="socials row mt-3 px-5 pb-2">
                            <div class="col">
                                <Nav.Link href="">
                                <img class="rounded img-fluid" width="50px" height="50px" src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_facebook-256.png" alt=""/></Nav.Link></div>
                            <div class="col">
                                <Nav.Link href="">
                                <img class="rounded img-fluid" width="50px" height="50px" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-512.png" alt=""/></Nav.Link></div>
                            <div class="col">
                                <Nav.Link href="">
                                <img class="rounded img-fluid" width="50px" height="50px" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-128.png" alt=""/></Nav.Link></div>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="foot">
                        <Form  className="footer-form">
                            <h3 className="foot-font">Email Sign up</h3>
                                <p className="my-1">Sign up to receive the latest info on new LOTUS products, special offers and more.</p>
                                <table>
                                    <thead>
                                <tr>
                                    <td className="td1">
                                        <label for="" class="col-sm-5 col-form-label">First Name</label>
                                        <div class="col-sm-10">
                                        <input type="text" class="form-control ms-1" />
                                    </div>
                                    </td>
                                    <td class="td2">
                                        <label for="" class="col-sm-5 col-form-label">Last Name</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control ms-1"/>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="td3" colspan="2">
                                    <label for="" class="col-sm-5 col-form-label">Email Address</label>
                                    <div class="col-sm-10">
                                        <input type="email" class="form-control ms-1"/><br />
                                        <Button  className="feat-btn btn-warning mb-2">Subscribe</Button>
                                       </div>
                                    </td>
                                </tr>
                                </thead>
                                </table>
                        </Form>
                    </div>
                    <div>
                    <p>By signing up you agree to receive emails from Lotus with news, special offers, promotions and other information. You can unsubscribe at any time. See our Privacy Policy or Contact Us by filling out this form.</p>
                </div>
                </Col>
            </Row>
            </div>
            <div class="footer-ann bg-dark">
            <div class="col-md-3"><h2 class="ms-2 px-5 py-2 textt-wrap">© Lotus Philippines</h2></div>
            <div class="col-md-9"><h2 class="ms-2 px-5 py-2">ALL RIGHTS RESERVED {date}</h2></div>
        </div>
        </section>
    );
}
export default Footer;
