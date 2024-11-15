'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './backOffice.css';
export default function Layout({children}){
    const pathname = usePathname();

    return(
        <>
            <div className="main">
            <div className='sidebar'>
            <Link href={'/backOffice/dashboard'}><button className={`sidebar-btn ${pathname === '/backOffice/dasboard' ? 'active' : ''}`}>Dashboard</button></Link>
            <Link href={'/backOffice/todo'}><button className={`sidebar-btn ${pathname === '/backOffice/todo' ? 'active' : ''}`}>To dos</button></Link>
            <Link href={'/backOffice/goal'}><button className={`sidebar-btn ${pathname === '/backOffice/goal' ? 'active' : ''}`}>Goals</button></Link>
            </div>
            {
                children
            }
            </div>
        </>
    )
}