'use client';

import React ,{useContext, useState} from 'react';
import { WorkOutsContext } from '@/Context/WorkOutsContext';
import Link from 'next/link';
import TodaysPlan from '../compnents/TodaysPlan';
import SavePlan from '../compnents/SavePlan';



const MyPlanPage = () => {

    const {plansWorkouts, setPlansWorkouts} = useContext(WorkOutsContext);
    const {savedWorkouts, setSavedWorkouts} = useContext(WorkOutsContext);

    const [activeTab, setActiveTab] =useState('todaysPlan');
    const [sortBy, setSortBy] = useState('Duration');

    const currentTabWorkouts = activeTab === 'todaysPlan' ? plansWorkouts : savedWorkouts;
    let TotalCalories = 0;
    let TotalMinutes = 0;
    currentTabWorkouts.forEach((workout) => {
        TotalCalories += workout.caloriesBurned;
        TotalMinutes += workout.duration;
    });

    const sortedWorkouts = [...currentTabWorkouts].sort((a, b) => {
    if (sortBy === 'Duration') {
      return (Number(b.duration) || 0) - (Number(a.duration) || 0);
    }
    if (sortBy === 'Calories') {
      return (Number(b.caloriesBurned) || 0) - (Number(a.caloriesBurned) || 0);
    }
    if (sortBy === 'Rating') {
      return (Number(b.rating) || 0) - (Number(a.rating) || 0);
    }
    return 0;
  });
    return (
        <div className="w-full max-w-5xl mx-auto px-4 py-8 md:py-12 text-white">
            
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white font-oswald">
          MY PLAN
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base mt-1">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

   
      <div className="grid grid-cols-3 gap-4 mb-8 bg-[#18181C] p-6 rounded-2xl border border-zinc-800/80">
        <div className="text-left">
          <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">Exercises</p>
          <p className="text-3xl sm:text-4xl font-black text-white mt-1 font-oswald">{currentTabWorkouts.length}</p>
        </div>
        <div className="text-left border-l border-zinc-800 pl-4 sm:pl-8">
          <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">Minutes</p>
          <p className="text-3xl sm:text-4xl font-black text-white mt-1 font-oswald">{TotalMinutes}</p>
        </div>
        <div className="text-left border-l border-zinc-800 pl-4 sm:pl-8">
          <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">Calories</p>
          <p className="text-3xl sm:text-4xl font-black text-white mt-1 font-oswald">{TotalCalories}</p>
        </div>
      </div>
   
        
            <div className="tabs tabs-lift w-full">
  <input
  type="radio"
  name="my_tabs_3"
  className="tab"
  aria-label="Today's Plan"
  checked={activeTab === "todaysPlan"}
  onChange={() => setActiveTab("todaysPlan")}
/>
  <div className="tab-content bg-base-100 border-base-300 p-6">
    {
        plansWorkouts.length === 0 ? (
            <div className="w-full bg-[#121316] rounded-2xl border border-zinc-800/80 p-12 sm:p-16 flex flex-col items-center justify-center text-center my-6">

      <h2 className="text-xl sm:text-2xl font-black uppercase text-white tracking-wider font-oswald">
        NOTHING HERE YET
      </h2>

      
      <p className="text-zinc-400 text-xs sm:text-sm mt-2 max-w-sm font-normal">
        Browse the library and add a lift to get today moving.
      </p>

      
      <Link
        href="/"
        className="mt-6 bg-[#CCFF00] hover:bg-[#b8e600] active:scale-95 text-black font-extrabold text-xs uppercase px-6 py-3 rounded-lg transition-all duration-150 shadow-md inline-block"
      >
        Go to workouts
      </Link>
    </div>
        ) : (
            <ul className="space-y-4">
                {sortedWorkouts.map((workout) => (
                   <TodaysPlan key={workout.id} workout={workout}></TodaysPlan>
                ))}
            </ul>
        )
    }


  </div>

  <input
  type="radio"
  name="my_tabs_3"
  className="tab"
  aria-label="Saved"
  checked={activeTab === "saved"}
  onChange={() => setActiveTab("saved")}
/>
  <div className="tab-content bg-base-100 border-base-300 p-6">

    {
        savedWorkouts.length === 0 ? (
          <div className="w-full bg-[#121316] rounded-2xl border border-zinc-800/80 p-12 sm:p-16 flex flex-col items-center justify-center text-center my-6">

      <h2 className="text-xl sm:text-2xl font-black uppercase text-white tracking-wider font-oswald">
        NOTHING HERE YET
      </h2>

      
      <p className="text-zinc-400 text-xs sm:text-sm mt-2 max-w-sm font-normal">
        Browse the library and add a lift to get today moving.
      </p>

      
      <Link
        href="/"
        className="mt-6 bg-[#CCFF00] hover:bg-[#b8e600] active:scale-95 text-black font-extrabold text-xs uppercase px-6 py-3 rounded-lg transition-all duration-150 shadow-md inline-block"
      >
        Go to workouts
      </Link>
    </div>
        ) : (
            <ul className="space-y-4">
                {sortedWorkouts.map((workout) => (
                    <SavePlan key={workout.id} workout={workout} />
                ))}
            </ul>
        )
    }
  </div>
  <div className="ml-auto flex items-center gap-2 pb-2">
          <label htmlFor="sort-select" className="text-sm font-medium whitespace-nowrap text-zinc-400">
            Sort By
          </label>
          <select 
            id="sort-select"
            value={sortBy} 
            className="select select-sm select-bordered bg-[#18181C] text-white border-zinc-800"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="Duration">Duration</option>
            <option value="Calories">Calories</option>
            <option value="Rating">Rating</option>
          </select>
        </div>

</div>

        </div>
        // </div>
    );
};

export default MyPlanPage;