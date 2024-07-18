import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const AddProduct = () => {
    const [dataObj,setDataObj] = useState({});
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState(" ");
    const [price,setPrice] = useState(0);
    const [cate,setCate] = useState("");
    const [url,setUrl] = useState("");
    const [rating,setRating] = useState("");
    const [count,setCount] = useState(0);



    async function pushData()
    {
      let obj = {
        Id: Date.now()+Math.random(),
        title:title,
        description:description,
        price:price,
        cate:cate,
        image:url,
        rating:rating,
        count:count

      }
      let res = await fetch('http://localhost:3000/data'
        ,{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(obj)
        }
      );
      let data = await res.json();
      //  
      
      console.log(obj);
    }
    console.log(dataObj);
    useEffect(()=>{
        console.log(dataObj);
    })
  return (
    <div className='addproduct'>
        <Navbar />
      <h1>AddProduct</h1>
      <input type='text' placeholder='Title' onChange={(e)=>{setTitle(e.target.value)}}/>
      <input type='text' placeholder='Price'  onChange={(e)=>{setDescription(e.target.value)}}/>
      <input type='text' placeholder='Description'  onChange={(e)=>{setPrice(e.target.value)}}/>
      <input type='text' placeholder='Category' onChange={(e)=>{setCate(e.target.value)}} />
      <input type='text' placeholder='ImageURL' onChange={(e)=>{setUrl(e.target.value)}} />
      <input type='text' placeholder='Rating'  onChange={(e)=>{setRating(e.target.value)}}/>
      <input type='text' placeholder='Count'  onChange={(e)=>{setCount(e.target.value)}}/>
      <button onClick={pushData}>Data  </button>
    </div>
  )
}

export default AddProduct
