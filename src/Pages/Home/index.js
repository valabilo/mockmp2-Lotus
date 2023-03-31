import Carousel from './Carousel';
import Features from './Features';
import Banner from './Banner';
import Categories from './Categories';
import Hero from './HeroSection';
import Utilities from './Utilities';
import PartnerStoresP from './PartnerStoresP';   
import PartnerStores from './PartnerStores';
import SignIn from './SignIn'   
const Home = () => {
    return (
        <div>
            <Carousel />
            <Features />
            <Banner />
            <Categories />
            <Hero />
            <Utilities />
            <PartnerStoresP />
            <PartnerStores />
            <SignIn />
        </div>
    )
}
export default Home;