"use client";

import React, { useContext } from "react";
import logoImg from "@/assests/logo.png";
import Image from "next/image";
import Link from "next/link";
import { WorkOutsContext } from "@/Context/WorkOutsContext";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const { savedWorkouts, plansWorkouts } = useContext(WorkOutsContext);

  const pathname = usePathname();

  const navItems = [
    { name: 'Workout', path: '/workouts' },
    { name: 'My Plan', path: '/my-plan' },
  ];

  
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            {/* <Image src={logoImg} alt="Logo" width={30} height={30} /> */}
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={isActive ? 'text-[#CCFF00] font-bold' : 'text-zinc-300'}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <Image src={logoImg} alt="Logo" width={30} height={30} />
        <Link href="/" className="btn btn-ghost text-xl">
          FITLOG
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
       <ul className="menu menu-horizontal px-1 gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={isActive ? 'text-[#CCFF00] font-bold' : 'text-zinc-300'}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
      </div>
      
        <div className="navbar-end flex items-center gap-4">
      
        <Link
          href="/my-plan?tab=todaysPlan"
          className="flex items-center gap-2 text-sm font-bold text-zinc-300 hover:text-white transition-colors"
        >
          <span>Plan</span>
          <span className="w-6 h-6 rounded-full bg-[#CCFF00] text-black text-xs font-black flex items-center justify-center">
            {plansWorkouts.length}
          </span>
        </Link>
        <Link
          href="/my-plan?tab=saved"
          className="flex items-center gap-2 text-sm font-bold text-zinc-300 hover:text-white transition-colors"
        >
          <span>Saved</span>
          <span className="w-6 h-6 rounded-full border border-[#CCFF00] text-[#CCFF00] bg-transparent text-xs font-black flex items-center justify-center">
            {savedWorkouts.length}
          </span>
        </Link>
      </div>
      
    </div>
  );
};

export default Navbar;
