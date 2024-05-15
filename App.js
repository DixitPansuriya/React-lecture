import React from 'react';
// import Header from './Fake/Header';

import Header from './Titan/Header'
import Navbar from './Titan/Navbar'
import Herosection from './Titan/Herosection'
import Filter from './Titan/Filter'
import Card from './Titan/Card'
import Quality from './Titan/Quality';
import Footer from './Titan/Footer';
import LoginPage from './Titan/LoginPage';
import Bestseller from './Titan/Bestseller';





export default function App() {
  return (
    <div>
      {/* <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/Jewelry" element={<Jewelry />} /> 
          <Route path="/Electronics" element={<Electronics />} /> 
          <Route path="/Man" element={<Man />} /> 
          <Route path="/Women" element={<Women />} /> 
          <Route path="*" element={<Error />} /> 




        

        </Routes> */}

        <Header/>
        <Navbar/>
        <Herosection/>
        <Filter/>
        <Card/>
        <Quality/>
        <LoginPage/>
<Bestseller/>
<Footer/>


       

    </div>
  );
}
