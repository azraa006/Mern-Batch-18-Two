import { Link } from "react-router-dom";

const About = () => {
  return (
<>
      <p>About Page</p>;
  
       <a href="/hero">
      <button>Click here to go to Hero Page</button>
    </a>
    <br/>


    <Link to ={"/hero"}>
    <button>Click here to go to Hero Page</button>
    </Link>
    </>
  );
  
  

  
  

};
export default About;