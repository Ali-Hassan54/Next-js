'use client'
import { useRouter } from "next/navigation";
const Contact=()=>{
const router=useRouter();
const navigate=(name)=>{
    router.push(name);}
    return(
        <>
        <h1>Contact page....</h1>
         <button onClick={()=>navigate('/')}>Go to home</button>
        </>
    )
}
export default Contact;