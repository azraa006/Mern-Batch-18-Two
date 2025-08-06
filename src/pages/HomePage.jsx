const HomePage = () => {
  
  const [count,setCount] =useState(10)

  useEffect(
    ()=>{
    console.log("useeffect Executed")
        fetchData()
    setCount(count+1)
   
  } ,[]); 
   console.log(count);


  const fetchData = async () => {
     try{
      const res = await fetch ("https://dummyjson.com/products");
      const data= await res.json(); 
      console.log(data.products);
    }
    catch(err){
      console.log(err)
    }
  } 

  return (
    <>
    <p>Count this is {count}</p>
      <Comment/>
      

    </>
  );
};



export default HomePage;

