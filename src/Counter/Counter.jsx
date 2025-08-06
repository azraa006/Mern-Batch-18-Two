import React, 
{ useState } from 'react';

  const Counter = () => {
    let[val,setVal]=useState(10);
    let[name,setName]=useState("sam");
     let[valid,setValid]=useState(true); 

  return (
    <>
    <div className="2xl:container mx-auto  border border-red-800 " >
        <div className="w-[70%] mx-auto ">
    
        <div className=" flex flex-col gap-7">
            <h1 className="font-bold text-[30px]">Counter</h1>
            <p className="font-bold text-[30px]">{val}</p>
            <div className="flex gap-8">
                <button className="bg-red-600 px-9 py-3 rounded-lg "
                onClick={ () =>{
                    setVal(val-1);
                    console.log(val);
                    }
                    }
                    >-</button>
                <button className="bg-green-600 px-9 py-3 rounded-lg" 
                 onClick={ () =>{
                    setVal(val+1);
                    console.log(val);
                    }
                    }
                    >+</button>
            </div>
            
        </div>
    
    </div>
    </div>




    <div className="border border-red-800 space-y-7 ">
        <p>{name}</p>
        <button className="bg-green-600 px-9 py-3 rounded-lg "
                onClick={ () =>{
                    setName("Azraa");
                    
                    }
                    }>Change</button>

    </div>



    <div className="border border-red-800 space-y-7 ">
        <p>{valid? "✅" :"❌" }</p>
        <button className="bg-green-600 px-9 py-3 rounded-lg "
                onClick={ () =>{
                    setValid(!  valid);
                    
                    }
                    }>Change</button>

    </div>
    </>
    
  )
}

export default Counter