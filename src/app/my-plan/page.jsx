'use client';

import React ,{useContext} from 'react';
import { WorkOutsContext } from '@/Context/WorkOutsContext';

const MyPlanPage = () => {

    const {plansWorkouts, setPlansWorkouts} = useContext(WorkOutsContext);
    const {savedWorkouts, setSavedWorkouts} = useContext(WorkOutsContext);

    return (
        <div className="w-full max-w-5xl mx-auto px-4 py-8 md:py-12 text-white">
            {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white font-oswald">
          MY PLAN
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base mt-1">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Metrics Summary Row */}
      <div className="grid grid-cols-3 gap-4 mb-8 bg-[#18181C] p-6 rounded-2xl border border-zinc-800/80">
        <div className="text-left">
          <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">Exercises</p>
          <p className="text-3xl sm:text-4xl font-black text-white mt-1 font-oswald">{"20"}</p>
        </div>
        <div className="text-left border-l border-zinc-800 pl-4 sm:pl-8">
          <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">Minutes</p>
          <p className="text-3xl sm:text-4xl font-black text-white mt-1 font-oswald">{"60"}</p>
        </div>
        <div className="text-left border-l border-zinc-800 pl-4 sm:pl-8">
          <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">Calories</p>
          <p className="text-3xl sm:text-4xl font-black text-white mt-1 font-oswald">{"300"}</p>
        </div>
      </div>
      {/* name of each tab group should be unique */}
        <div className ="flex justify-between">
            <div className="tabs tabs-lift">
  <input type="radio" name="my_tabs_3" className="tab" aria-label="Toadys plan" defaultChecked/>
  <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 1</div>

  <input type="radio" name="my_tabs_3" className="tab" aria-label="Saved"  />
  <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

</div>
<fieldset className="fieldset flex flex-row items-center gap-3">
  <legend className="fieldset-legend sr-only">Sort By</legend>
  <label htmlFor="sort-select" className="text-sm font-medium whitespace-nowrap">
    Sort By
  </label>
  <select 
    id="sort-select"
    defaultValue="Duration" 
    className="select"
    onChange={(e) => handleSortChange(e.target.value)}
  >
    <option value="Duration">Duration</option>
    <option value="Calories">Calories</option>
    <option value="Rating">Rating</option>
  </select>
</fieldset>
        </div>
        </div>
    );
};

export default MyPlanPage;