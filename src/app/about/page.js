'use client'
import { useRouter } from "next/navigation";
const About=()=>{
const router=useRouter();
const navigate=(name)=>{
    router.push(name);
}
    return(
        <>
        <h1>About page.</h1>
        <button onClick={()=>navigate('/')}>Go to home</button>

        </>

    )
}
export default About;