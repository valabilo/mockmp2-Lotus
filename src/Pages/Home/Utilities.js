import { Container, Card} from "react-bootstrap"

function Utilities () {
    return (
        <Container fluid className="my-5">
            <Container className="align-content-center d-md-flex gap-3 flex-1 justify-content-evenly mx-auto mt-2 mb-5">
                <Card className="border-0 mb-3 mx-auto h-100" style={{width:250}}>
                    <img style={{height:180}}  src="https://img.icons8.com/ios-filled/256/headphones.png" className="card-img-top pb-2 pt-5 px-5" alt="..."/>
                    <Card.Body className="text-justify pt-0">
                        <h5 class="card-title fw-bolder ">ALWAYS BY YOUR SIDE</h5>
                        <p class="card-text ">We take extensive measures to ensure all our products are made to the very highest standards and meet all relevant industry regulations.</p>
                        
                    </Card.Body>
                </Card>
                <Card className="border-0 mb-3 mx-auto h-100" style={{width:250}}>
                    <img style={{height:180}} src="https://img.icons8.com/material-outlined/256/place-marker.png" className="card-img-top pb-2 pt-5 px-5" alt="..."/>
                    <Card.Body class="text-justify pt-0">
                        <h5 class="card-title fw-bolder">FIND A LOCAL RETAILER</h5>
                        <p class="card-text ">LOTUS® products and accessories are available online and at retailers nationwide.</p>
                        
                    </Card.Body>
                </Card>
                <Card className="border-0 mb-3 mx-auto h-100" style={{width:250}}>
                    <img style={{height:180}} src="https://img.icons8.com/ios-filled/256/messages-mac.png" className="card-img-top pb-2 pt-5 px-5" alt="..."/>
                    <Card.Body className="text-justify pt-0">
                        <h5 class="card-title fw-bolder">HOW CAN WE HELP?</h5>
                        <p className="card-text ">If you want to contact us, now it's easier than ever to get in touch.
                            Whatever you need, we are here for you.</p>
                        
                    </Card.Body>
                </Card>
                <Card className="border-0 mb-3 mx-auto h-100" style={{width:250}}>
                    <img style={{height:180}} src="https://img.icons8.com/ios-filled/256/work.png" className="card-img-top pb-2 pt-5 px-5" alt="..."/>
                    <Card.Body class="ext-justify pt-0">
                        <h5 className="card-title fw-bolder">WARRANTY INFORMATION</h5>
                        <p className="card-text">We’ll repair, without charge, any defects due to faulty materials or workmanship within the specified warranty.</p>
                        
                    </Card.Body>
                </Card>
            </Container>
        </Container>
    )
}
export default Utilities;