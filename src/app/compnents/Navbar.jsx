'use client'

import React, { useContext } from 'react';
import logoImg from '@/assests/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { WorkOutsContext } from '@/Context/WorkOutsContext';
const Navbar = () => {

  const {plansWorkouts,setPlansWorkouts} = useContext(WorkOutsContext);
  const {savedWorkouts, setSavedWorkouts} = useContext(WorkOutsContext);

  const links=<>
  <li>
    <Link href="/library">WorksOut</Link>
  </li>
  <li>
    <Link href="/my-plan">My Plan</Link>
  </li>
  </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
  
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
       {/* <Image src={logoImg} alt="Logo" width={30} height={30} /> */}
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}

      </ul>
    </div>
     <Image src={logoImg} alt="Logo" width={30} height={30} />
    <Link href="/" className="btn btn-ghost text-xl">
      FITLOG
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}

    </ul>
  </div>
  <div className="navbar-end px-2">
    
          {/* Plan Badge */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-sm font-bold text-zinc-300 hover:text-white transition-colors px-6"
          >
            <span>Plan</span>
            <span className="w-5 h-5 rounded-full bg-[#CCFF00] text-black text-xs font-black flex items-center justify-center leading-none">
              {plansWorkouts.length}
            </span>
          </Link>

          {/* Saved Badge */}
          <Link
            href="/my-plan?tab=saved"
            className="flex items-center gap-2 text-sm font-bold text-zinc-300 hover:text-white transition-colors"
          >
            <span>Saved</span>
            <span className="w-5 h-5 rounded-full bg-[#CCFF00] text-black text-xs font-black flex items-center justify-center leading-none">
              {savedWorkouts.length}
            </span>
          </Link>
  </div>
</div>
    );
};

export default Navbar;