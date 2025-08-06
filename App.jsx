import React from "react";
import Header from "./pages/Header/Header";
import HeroSection from "./pages/HeroSection/HeroSection";
import Card from "./pages/Card/Card";
import Footer from "./pages/Footer/Footer";
import"flowbite";
import ProductsArray from "./pages/Card/ProductsArray";

const App= () => {
  return (
    <>
   <Header />
    <HeroSection />  
    <Card/>
    {
      ProductsArray.map((item) =>{
        
          
          <Card
          key={item.id}
          title={item.title}
          price={item.price}
          offer={item.offer}/>
          
  })
  }
 <Footer/>
 

    </>
  );
};
export default App;