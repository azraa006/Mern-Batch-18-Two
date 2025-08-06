
import React, { useEffect, useState } from "react";
import { Comment } from "./pages/Comment";


const App = () => {
 
 const [count, setCount] = useState(10);
 
  useEffect(() => {
    console.log("useeffect Executed");
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <p>Count this is {count}</p>
      <Comment />
    </>
  );
};

export default App;


// import React, { useEffect,useState } from "react";

// import "./index.css"
// import Header from "./pages/Header/Header";
// import HeroSection from "./pages/HeroSection/HeroSection";
// import Card from "./pages/Card/Card";
// import Footer from "./pages/Footer/Footer";
// import "flowbite";
// import ProductsArray from "./pages/Card/ProductsArray";
// import Azraa from "./pages/Azraa/Azraa";
// /*Named Export*/
// import {Comment} from "./pages/Comment/Comment";
// import{createBrowserRouter,RouterProvider} from "react-router-dom";
// import ReactDOM from "react-dom/client";





// /*
// const App = () => {
//   console.log(ProductsArray)
//   return (
//     <>
// <Header/>
//       <HeroSection />
//       <Azraa title={"Hello naan Azraa Pesuren"} price={3000} pffer={20}/>

//        {
//         ProductsArray.map((item) => {
//           return (
//             <Card
//               key={item.id}
//               title={item.title}
//               price={item.price}
//               offer={item.offer} />
//           )
          

//         })
//       }
//        <Footer />

//         </>
//   );
// };
// export default App;
//        */



// App.jsx

