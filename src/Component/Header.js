import { Button,Container,Form,Nav,Navbar,Modal,Row,Col,Image, FormControl, FormFloating, FormLabel, FormCheck} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import logo from '../assets/logo-1.jpg';
import phoneLogo from "../assets/icons8-phone-24.png";
import React, { useState } from 'react';

function Header () {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showAcc, setShowAcc] = useState(false);

  const handleCloseAcc = () => setShowAcc(false);
  const handleShowAcc = () => setShowAcc(true);

  const [emailLogIn , setEmailLogIn] = useState('');
  const [passwordLogIn , setPasswordLogIn] = useState('');
  const navigate = useNavigate();
  
  
  const validateLogIn = (e) => {
    if(emailLogIn === "admin@gmail.com" && passwordLogIn === "root")
    {
      navigate("/profile");
      alert("successful log in");
    }else{
      alert("your input is invalid");
      e.preventDefault();
    }
  }

  return ( 
    <>
<header>
  <Container fluid className="bg-dark text-light">
    <div className="header-cont d-flex gap-3 px-4 py-3 align-content-center">
      <Row className="row">
        <Col md={2} className="p-0 m-0 text-nowrap">CALL US:</Col>
        <Col md={5} className="d-flex gap-1">
          <Image width="20px" height="20px" src={phoneLogo} alt="phone logo" />
          <p className="text-nowrap p-0 m-0">(02)8-921-0000</p>
        </Col>
        <Col md={5} className="d-flex gap-1">
          <Image width="20px" height="20px" src={phoneLogo} alt="phone logo" />
          <p className="text-nowrap p-0 m-0">(02)8-921-0000</p>
        </Col>
      </Row>
      <div className="d-flex gap-3 align-content-center ms-auto">
        <Nav.Link href="/">
          <Image width="25px" src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_facebook-256.png" alt="facebook logo" />
        </Nav.Link>
        <Nav.Link href="/">
          <Image width="25px" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-512.png" alt="Twitter logo" />
        </Nav.Link>
        <Nav.Link href="/">
          <Image width="25px" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-128.png" alt="Instagram logo" />
        </Nav.Link>
      </div>
    </div>
  </Container>
  </header>
    <Navbar expand="lg" className="navbar" sticky="top">
      <Container fluid className='mx-4'>
        <Navbar.Brand href="/" className="navbar-brand me-5 px-2">
          <Image width="140px" src={logo} alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 d-flex align-items-end"
            style={{ maxHeight: '100px' }}
            
          >
            <div className="navbar-custom navbar-nav">
              <Nav.Item>
            <Nav.Link className="productLink" href="/products">PRODUCTS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link className="promotionLink" href="/promotions">PROMOTIONS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link className="servicesLink" href="/services">SERVICES</Nav.Link>
            </Nav.Item>
            </div>
          </Nav>
          {/* <Form className="d-flex my-auto">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form> */}
          <Navbar className="navbar-nav m-2">
                <Nav.Link data-bs-toggle="modal" onClick={handleShow} className="wish-zoom ms-auto nav-item nav-link">
                    <Image width="30px" height="30px" src="https://cdn3.iconfinder.com/data/icons/jolly-icons-free/64/cart_64.png" alt=""/><span className="badge bg-danger">1</span></Nav.Link>
                <Nav.Link className="ms-auto wish-zoom nav-item nav-link" onClick={handleShowAcc}>
                    <Image width="30px" height="30px" src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user-64.png" alt="Log in"/></Nav.Link>
                </Navbar>
        </Navbar.Collapse>
      </Container>
    
    <Modal id="modalScrollableCenter"className='modal-lg modal-dialog-centered modal-dialog-scrollable shadow-lg' centered show={show} onHide={handleClose}>
      
        <Modal.Header closeButton>
          <Modal.Title className='mx-3'>
            <Modal.Title>Your Cart</Modal.Title>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='mx-3'>
          <div className="d-md-flex gap-2">
            <Image width="50px" height="50px" src="./projectassets/acc1.jpg" alt=""/><p className="mb-0 fw-bolder ms-3">LOTUS BRUSHLESS 18V X-Line Cordless Impact Drill w/2pcs Battery Charger & Hard Case LTHD18VLI-2BLX</p>
                        <Button variant="danger" type="button" className="py-0 text-nowrap btn-sm text-light">Cancel</Button>
                        <Button variant="primary" type="button" data-bs-target="" className="py-0 text-nowrap btn-sm text-light" data-href="checkout.html">Check-out</Button></div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="util-btn" variant="warning text-light" href="./products" >
            ADD MORE TO CART
          </Button>
          <Button className="util-btn" href="./checkout" variant="success text-light" >
            CHECK-OUT
          </Button>
        </Modal.Footer>
      </Modal>

       <Modal role="dialog" show={showAcc} onHide={handleCloseAcc}>
       <Modal.Header className="p-5 pb-4 border-bottom-0" closeButton>
          <Modal.Title className="fw-bold">MyLOTUS Account</Modal.Title>
        </Modal.Header>
        <Modal.Body className=" p-5 pt-0">
          <Form>
            <FormFloating className="mb-3">
              <FormControl className="rounded-3" type="email" id="floatingEmaill" placeholder="Email address" autoComplete="false" onChange={(e) => {setEmailLogIn(e.target.value)}} required />
              <FormLabel htmlFor="floatingEmaill">Email Address</FormLabel>
            </FormFloating>
            <FormFloating className="mb-3">
              <FormControl className="rounded-3" type="password" id="floatingPassword" placeholder="Password" onChange={(e)=> {setPasswordLogIn(e.target.value)}} required />
              <FormLabel htmlFor="floatingPassword">Password</FormLabel>
            </FormFloating>
            <FormCheck type="checkbox" label="Remember me"/>
              <Button variant="warning" className="w-100 my-2 btn-lg rounded-3" type="submit" onClick={ validateLogIn }>Sign in</Button>
              <small className="text-muted">By clicking Sign in, you agree to the terms of use.</small>
              <hr className="my-4 mx-3" />
              <Link className="text-center text-dark text-decoration-none" to="/register" onClick={()=> setShowAcc(false)}><h4><span className="text-muted">Not a member? </span>Register</h4></Link>
              <h5 className="my-3 text-center">or sign in with</h5>
              <div className="d-flex gap-4 justify-content-center">
                <Link href="/" target={"_blank"}>
                  <img width={50} className="p-0" src="https://cdn1.iconfinder.com/data/icons/social-media-2285/512/Colored_Facebook3_svg-512.png" alt="facebook" />
                </Link>
                <Link href="/" target={"_blank"}>
                  <Image width={50} className="p-0" src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-512.png" alt="gmail" />
                </Link>
                <Link href="/" target={"_blank"}>
                  <Image width={50} className="p-0" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png" alt="intagram" />
                </Link>
                </div>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="success text-light" onClick={handleClose} className="util-btn me-4" closeButton>
            Save Changes
          </Button>
        </Modal.Footer> */}
       </Modal>
    </Navbar>
    </>

  );
  }

export default Header;