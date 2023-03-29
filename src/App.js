

import RootLayout from "./shared/components/RootLayouts";
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/index'
import {CreateAccount} from './Pages/CreateAccount';
import ProductsCategory from './Pages/Products/index'
import PowerTools from './Pages/Products/index'

// import Promotions from './Pages/Promotions';
// import Services from './Pages/Services';
// import MyAccount from './Pages/MyAccount';

function App() {
  return (
    <RootLayout className="App">
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<CreateAccount />}></Route>
          <Route path="/products" element={<ProductsCategory />} />
          <Route path="/products/powertools" element={<PowerTools />} />
          {/* <Route path="/promotions" element={<Promotions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/myaccount" element={<MyAccount />} /> */}
        </Routes>
    
    </RootLayout>
  );
}

export default App;






