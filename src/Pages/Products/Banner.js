import { Container } from "react-bootstrap"
import banner from '../../assets/hero1.jpg'
 
const Banner = () => {
    return (
        <Container fluid className="px-0 h-50">
            <img src={banner}
            className="w-100"
            height={400}
            alt="..."
             />
        </Container>
    )
}
export default Banner;