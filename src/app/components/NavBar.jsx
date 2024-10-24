'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export const NavBar = () => {

    const pathname = usePathname()

    console.log(pathname);
    

  return (
    <nav>
        <ul className='text-neutral-200 flex gap-3 border-b-4 border-b-orange-600'>
            <li><Link href="/" className={`${pathname === '/' &&   'text-orange-600  border-b-orange-600'}`} >Home</Link> </li>
            <li><Link href="/dashboard" className={`${pathname === '/' &&   'text-orange-600  border-b-orange-600'}`} >Dashboard</Link> </li>
            <li><Link href="/contato" className={`${pathname === '/' &&   'text-orange-600  border-b-orange-600'}`} >Contato</Link> </li>
    
        </ul>
    </nav>
  )
}
