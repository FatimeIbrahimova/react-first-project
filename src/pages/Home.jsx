
import { Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MyCard from '../components/MyCard'
import "./Home.css";

const Home = () => {
    let [data,setData]=useState(null)
    // let [product,setProduct]=useState(null)
    useEffect(()=>{
      axios.get('http://localhost:3000/data')
      .then((resp) => setData(resp.data)) 
    },[])
    // useEffect(()=>{
    //   axios.get('http://localhost:3000/product')
    //   .then((resp) => setProduct(resp.data)) 
    // },[])
  return (
    <>
      <div className='second-section_title'>Shop by <span className='title'>Category</span></div> 
      <Grid container spacing={6} style={{ marginTop: "10px" }}>
       {data?.map((item,index)=>{
            return <MyCard key={index} data={item}/>     
        })   
        }
       </Grid>
       <div className='third-section'>
        <p className='third-section_title'><span>Featured</span> <span className='title'>Products</span></p>
        {/* <Grid container spacing={6} style={{ marginTop: "10px" }}>
       {product?.map((item,index)=>{
            return <MyCard key={index} product={item}/>     
        })   
        }
       </Grid> */}
        </div>
    </>
  )
}

export default Home