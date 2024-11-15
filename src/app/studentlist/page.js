import Link from 'next/link';
import './sutdent.css'
const studentlist=()=>{
    return(
        <>
        <ul className="menu-item">
            <Link href={'/studentlist/ali'}><li>Ali</li></Link>
            <Link href={'/studentlist/hassan'}><li>Hassan</li></Link>
            <Link href={'/studentlist/mian'}><li>Mian</li></Link>
            <Link href={'/studentlist/hamza'}><li>Hamza</li></Link>
        </ul>
        </>
    )
}
export default studentlist;
