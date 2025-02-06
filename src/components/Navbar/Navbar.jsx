import React from 'react'
import logo from '../../assets/food-logo.png';
import { PiShoppingCart } from "react-icons/pi";
import DarkMode from './DarkMode';
import { Link } from 'react-router-dom';
 

function Navbar() {
  return (
    <>
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200' >
     <div className='container py-3 sm:py-0 '>
        <div className="flex justify-between items-center">
        <div>
             <Link to='/' className='flex items-center gap-2 text-2xl sm:text-3xl font-bold'>
                <img src={logo} alt="Foodie Zone" className='w-10' /> Rester 
             </Link>
        </div>
        <div className='flex items-center gap-4'>
            <div>
                <DarkMode/>
            </div>
            <ul className='hidden sm:flex gap-4'>
                <li ><Link to='/' className='inline-block py-4 px-4 hover:text-primary'>Home</Link></li>
                <li><Link to='/about' className='inline-block py-4 px-4 hover:text-primary'>About</Link></li>
                <li><Link to='/contact'  className='inline-block py-4 px-4 hover:text-primary'>Contact</Link></li>
            </ul>
            <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center gap-2 '>Order
                <PiShoppingCart   className="text-xl text-white drop-shadow-sm cursor-pointer " />
            </button>
        </div>

        </div>
      

     </div>
    </div>
    </>
  )
}

export default Navbar
