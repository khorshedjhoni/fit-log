import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logoImg from '@/assests/logo.png';


const Footer = () => {
    return (
        <div>
            <footer className="footer bg-[#0D0E10] text-neutral-content border-t border-zinc-800/80 px-2 py-6 mt-16">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
        
        
        <Link
          href="/" 
          className="flex items-center gap-2 text-lg font-black tracking-wider text-white uppercase font-oswald hover:opacity-90 transition-opacity"
        >
          
          <span >
            <Image src={logoImg} alt="FitLog Logo" width={20} height={20} />

          </span>
          <span>
            FITLOG
          </span>
        </Link>

    
        <p className="text-xs text-zinc-400 font-normal text-center md:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
        </div>
    );
};

export default Footer;