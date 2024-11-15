'use client'
import { useEffect } from "react";
const ProductList=()=>{
    useEffect(async()=>{
        let data=await fetch('http://localhost:8000/get-event');
        data=await data.json();
        console.log(data);
    },[])
    
    return(
        <>
        <h1>Contact page.</h1>
        </>
    )
}
export default ProductList;