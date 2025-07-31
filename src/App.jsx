import React from "react";
import Header from "./pages/Header/Header";
import HeroSection from "./pages/HeroSection/HeroSection";
import Card from "./pages/Card/Card";
import Footer from "./pages/Footer/Footer";
import "flowbite";
import ProductsArray from "./pages/Card/ProductsArray";
import Azraa from "./pages/Azraa/Azraa";
import Comment from "./pages/Comment/Comment";

const App = () => {
  
  return (
    <>
   
      <Comment/>
       

    </>
  );
};
export default App;

/*
const App = () => {
  console.log(ProductsArray)
  return (
    <>
<Header/>
      <HeroSection />
      <Azraa title={"Hello naan Azraa Pesuren"} price={3000} pffer={20}/>
     
    
     
 
       {
        ProductsArray.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              price={item.price}
              offer={item.offer} />
          )
          

        })
      }
       <Footer />

        </>
  );
};
export default App;
       */