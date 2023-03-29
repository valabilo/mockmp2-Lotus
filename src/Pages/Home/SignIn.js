import { Container, Button } from "react-bootstrap"

function SignIn () {
    return (
        <Container fluid className="bg-light py-5 h-50">
            <div class="container justify-content-center text-center" data-aos="fade-up"
                data-aos-duration="3000">
                    <img class="mx-auto mb-3" width="100" src="https://cdn-icons-png.flaticon.com/512/0/191.png" alt="..."/>
                    <h2 class="si-font si-text-size fw-lighter" >JOIN MyLOTUS</h2>
                    <p>Join <span class="fw-bolder">MyLOTUS</span> to register your tools to receive discount vouchers or Lotus products and learn about the newest LOTUS tools and accessories.</p>
                    <Button variant="warning" class="feat-btn " href="/register">Sign In</Button>
                </div>
        </Container>
    )
}
export default SignIn;