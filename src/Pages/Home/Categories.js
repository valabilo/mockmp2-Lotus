import { Container, Nav } from "react-bootstrap";

function Categories () {
    return (
        <Container className="my-5 px-3">
            <h2 className="fw-bolder feat-font text-start py-5 px-3">
                SHOP BY CATEGORIES
            </h2>
            <div 
            className="container align-content-center d-sm-flex flex-1 justify-content-evenly gap-3 mx-auto mt-2 mb-5">
                <div 
                className="card border-0 mb-3 mx-auto" 
                style={{width: 250}}>
                    <img 
                    style={{height:220}} 
                    src="https://bynder.sbdinc.com/m/20e2e3ee2cfa41ac/Drupal_Small-DCF900P1_A2.jpg" className="cat-zoom card-img-top" 
                    alt="..."/>
                    <div 
                    className="card-body text-justify ps-0 pt-0">
                        <h5 
                        className="card-title fw-bolder">
                            POWER TOOLS
                        </h5>
                        <Nav.Link 
                            to="/Products" 
                            className="cat-btn mt-3">
                            Shop Now
                        </Nav.Link>
                    </div>
                </div>
                    <div 
                        className="card border-0 mb-3 mx-auto" 
                        style={{width: 250}}>
                        <img 
                            style={{height:220}} 
                            src="https://bynder.sbdinc.com/m/3d20538f004af4b5/Drupal_Small-DW_20V_GFN_Batteries_G2.jpg" 
                            className="cat-zoom card-img-top" 
                            alt="..."/>
                        <div 
                            className="card-body text-justify ps-0 pt-0">
                            <h5 
                                className="card-title fw-bolder">
                                HAND TOOLS
                                </h5>
                            <Nav.Link 
                                to="/Products" 
                                className="cat-btn mt-3">
                                Shop Now
                            </Nav.Link>
                        </div>
                    </div>
                    <div 
                        className="card border-0 mb-3 mx-auto" 
                        style={{width: 250}}>
                        <img 
                            style={{height:220}}  
                            src="https://bynder.sbdinc.com/m/59ca34174a8b8f2/Drupal_Small-DCMWP233U2_A5.jpg"
                            className="cat-zoom card-img-top" 
                            alt="..."/>
                        <div 
                            className="card-body text-justify ps-0 pt-0">
                            <h5 
                                className="card-title fw-bolder">
                                GARDEN TOOLS
                            </h5>
                            <Nav.Link 
                                to="/Products" 
                                className="cat-btn mt-3">
                                Shop Now
                            </Nav.Link>
                        </div>
                    </div>
                    <div 
                        className="card border-0 mb-3 mx-auto" 
                        style={{width: 250}}>
                        <img 
                            style={{height:220}}  
                            src="https://bynder.sbdinc.com/m/43bda639029a263f/Drupal_Small-DW_ToughSeries_G1.jpg" 
                            className="cat-zoom card-img-top" 
                            alt="..."/>
                        <div 
                            className="card-body text-justify ps-0 pt-0">
                            <h5 
                            className="card-title fw-bolder">
                            HAND TOOLS
                            </h5>
                            <Nav.Link 
                                to="/Products"
                                className="cat-btn mt-3">
                                Shop Now
                            </Nav.Link>
                        </div>
                    </div>      
                    <div 
                        className="card border-0 mb-3 mx-auto" 
                        style={{width: 250}}>
                        <img 
                            style={{height:220}} 
                            src="https://bynder.sbdinc.com/m/59ca34174a8b8f2/Drupal_Small-DCMWP233U2_A5.jpg" 
                            className="cat-zoom card-img-top " alt="..."/>
                        <div 
                            className="card-body text-justify ps-0 pt-0">
                            <h5 className="card-title fw-bolder">ACCESSORIES</h5>
                            <Nav.Link 
                            to="/Products" 
                            className="cat-btn mt-3">
                            Shop Now
                            </Nav.Link>
                        </div>
                    </div>
            </div>
        </Container>
        )
    }
export default Categories;