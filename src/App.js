

import RootLayout from "./shared/components/RootLayouts";
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/index'
import {CreateAccount} from './Pages/CreateAccount';
import ProductsCategory from './Pages/Products/index'
import Promotions from './Pages/Promotions';
import CheckOut from './Pages/CheckOut/index';

// import Services from './Pages/Services';
// import MyAccount from './Pages/MyAccount';

function App() {
  return (
    <RootLayout className="App">
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<CreateAccount />}></Route>
          <Route path="/products" element={<ProductsCategory />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/checkout" element={<CheckOut />} />
          {/* <Route path="/services" element={<Services />} />
          <Route path="/myaccount" element={<MyAccount />} /> */}
        </Routes>
    
    </RootLayout>
  );
}

export default App;






