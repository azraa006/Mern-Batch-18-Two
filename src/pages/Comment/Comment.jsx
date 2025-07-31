
import React, 
{ useState } from 'react';

const Comment = () => {


    /*
    oBJECT CREATION
    
    let[name,setName]=useState();
    let[message,setMessage]=useState();*/



    /*OBJECT CREATION TO COMBINE MORE THAN 1 USESTATE TO A SINGLE VARIABLE */
          /* for name and message*/
    const [data,setData]=useState({name:"",message:""});
          /*for submit button*/
    const [val,setVal]=useState([]);

       

  return (
    <>
    <div>Comment</div>

    <form>


      <label>Name</label>
      <input onChange ={ (e) =>
        setData((prev) =>{
          return {...prev,name:e.target.value};
        })
      }/>



      <label>Message</label>
      <input onChange ={ (e) =>
        setData((prev) =>{
          return {...prev,message:e.target.value};
        })
      }/>
         


       <submit onClick={ () =>
        setVal((prev) =>{
          return [...prev,data];
        })
       }>Submit</submit>  


      

      



    </form>
    <p>{JSON.stringify(data)}</p>
    <p>{JSON.stringify(val)}</p>
    </>
    
    
  
  )
}

export default Comment