'use client'
import { useRouter } from "next/navigation";
const AboutStudent=()=>{
const router=useRouter();
const navigate=(name)=>{
    router.push(name);
}
    return(
        <>
        <h1>AboutStudent page.</h1>
        <button onClick={()=>navigate('/')}>Go to home</button>

        </>

    )
}
export default AboutStudent;