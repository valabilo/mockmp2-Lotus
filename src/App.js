

import RootLayout from "./shared/components/RootLayouts";
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/index'
import Products from './Pages/Products';
import Promotions from './Pages/Promotions';
import Services from './Pages/Services';
import MyAccount from './Pages/MyAccount';

function App() {
  return (
    <RootLayout className="App">
       
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/products" element={<Products />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/myaccount" element={<MyAccount />} /> */}
        </Routes>
    
    </RootLayout>
  );
}

export default App;






