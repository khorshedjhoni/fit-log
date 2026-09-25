import Image from 'next/image';
import React from 'react';
import bannerImg from '@/assests/banner.png';
import { MdArrowDownward } from 'react-icons/md';
const Banner = () => {
    return (
        
        <div className="w-full max-w-6xl mx-auto px-4 py-4 sm:py-6">
        <div className="relative bg-[#18181C] rounded-2xl p-6 sm:p-10 md:p-12 lg:p-16 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 border border-zinc-800/80">
        
        
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-[#CCFF00]/10 rounded-full blur-3xl pointer-events-none -z-0" />

        
        <div className="flex-1 space-y-4 sm:space-y-6 z-10 text-center md:text-left flex flex-col items-center md:items-start max-w-xl">
          
          <span className="text-[#CCFF00] text-xs font-black uppercase tracking-widest bg-[#CCFF00]/10 px-3 py-1.5 rounded-md border border-[#CCFF00]/20 inline-block">
            Workout Library
          </span>

    
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-tight leading-[1.08] font-[Oswald]">
            Train with intent. <br className="hidden sm:inline" />
            Log every set.
          </h1>

          
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-md md:max-w-none">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into todays plan, and watch the weeks work add up.
          </p>

          
          <div className="pt-2 w-full sm:w-auto">
            <a
              href="#library"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#CCFF00] hover:bg-[#b8e600] active:scale-95 text-black font-extrabold text-sm uppercase px-8 py-3.5 rounded-lg transition-all duration-150"
            >
              BROWSE WORKOUTS
              <MdArrowDownward />
            </a>
          </div>
        </div>

        
        <div className="relative z-10 flex-1 flex justify-center md:justify-end items-center w-full min-h-55 sm:min-h-70 md:min-h-80">
          <div className="relative w-full max-w-60 sm:max-w-75 md:max-w-85 aspect-square">
            <Image
              src={bannerImg}
              alt="Gym Equipment Illustration"
              fill
              sizes="(max-width: 768px) 240px, (max-width: 1024px) 300px, 340px"
              className="object-contain"
              priority
            />
          </div>
        </div>

      </div>
      </div>
    );
};

export default Banner;