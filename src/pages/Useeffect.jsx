import React, { useEffect, useState } from "react";
import { Comment } from "./Comment";

const Useeffect= () => {
 
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

export default Useeffect