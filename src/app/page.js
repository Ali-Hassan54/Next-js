'use client'
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
const router=useRouter();
const navigate=(name)=>{
  router.push(name)
}
  return (
    <>
      <Link href='/contact'>Go to Contact</Link><br/><br/>
      <Link href='/about'>Go to About</Link><br/><br/>
      <button onClick={()=>navigate('/about')}>Go to about</button><br/><br/>
      <button onClick={()=>navigate('/about/aboutStudent')}>About students</button><br/><br/>

      <button onClick={()=>navigate('/contact')}>Go to contact</button>


      {/* <Link>Go to about</Link> */}
    </>
    // <div className={styles.page}>
    //   <main className={styles.main}>
    //   <button onClick={()=>fruit("fruit")}>Click me</button>
    //   <h3>{name}</h3>
    //   </main>
    // </div>
  );
}