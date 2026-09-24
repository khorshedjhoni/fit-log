import Image from 'next/image';
import React from 'react';


const getWorkoutDetails = async (id) => {
    try {
        const res = await fetch(
            `https://api.abcz.workers.dev/api/fitlog/${id}`,
            {
                next: { revalidate: 3600 },
            }
        );
        if (!res.ok) {
            throw new Error("Failed to fetch workout details");
        }

        return res.json();
    } catch (error) {
        console.error("Error fetching workout details:", error);
        throw error;
    }
}; 
const WorksOutDetails = async({params}) => {
    const { id } = await params;
    const workoutDetails = await getWorkoutDetails(id);
    return (
        <div>
            <div className="w-full max-w-5xl mx-auto bg-[#121316] text-white rounded-2xl border border-zinc-800/80 p-6 md:p-8 shadow-2xl">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        

        <div className="relative w-full lg:w-1/2 aspect-square rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800">
          <Image
            src={workoutDetails.image}
            alt={workoutDetails.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        
        <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-6">
          <div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white font-oswald">
              {workoutDetails.name}
            </h1>

            
            <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
              {workoutDetails.description}
            </p>

    
            <div className="flex flex-wrap gap-2 mt-4">
              {workoutDetails.muscleGroups?.map((muscle, idx) => (
                <span
                  key={idx}
                  className="bg-[#CCFF00] text-black text-xs font-black uppercase px-3 py-1 rounded-full tracking-wide"
                >
                  {muscle}
                </span>
              ))}
            </div>

    
            <div className="mt-6 border-t border-zinc-800/80 divide-y divide-zinc-800/60 text-xs sm:text-sm">
              <div className="flex justify-between py-2.5">
                <span className="text-zinc-400 uppercase font-bold tracking-wider">EQUIPMENT</span>
                <span className="text-white font-medium">{workoutDetails.equipment}</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-zinc-400 uppercase font-bold tracking-wider">DIFFICULTY</span>
                <span className="text-white font-medium">{workoutDetails.difficulty}</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-zinc-400 uppercase font-bold tracking-wider">SETS</span>
                <span className="text-white font-medium">{workoutDetails.sets}</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-zinc-400 uppercase font-bold tracking-wider">REPS</span>
                <span className="text-white font-medium">{workoutDetails.reps}</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-zinc-400 uppercase font-bold tracking-wider">DURATION</span>
                <span className="text-white font-medium">{workoutDetails.duration} min</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-zinc-400 uppercase font-bold tracking-wider">CALORIES</span>
                <span className="text-white font-medium">{workoutDetails.caloriesBurned} kcal</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-zinc-400 uppercase font-bold tracking-wider">RATING</span>
                <span className="text-white font-medium">{workoutDetails.rating}</span>
              </div>
            </div>

        
            <div className="mt-6 pt-4 border-t border-zinc-800/80">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                INSTRUCTIONS
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-zinc-300 text-xs sm:text-sm leading-relaxed">
                {workoutDetails.instructions?.map((step, idx) => (
                  <li key={idx} className="pl-1">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

        
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button className="flex-1 bg-[#CCFF00] hover:bg-[#b8e600] active:scale-95 text-black font-extrabold text-xs uppercase py-3.5 px-4 rounded-lg transition-all text-center">
              Add to todays plan
            </button>
            <button className="flex-1 bg-transparent hover:bg-zinc-800/60 active:scale-95 text-white font-bold text-xs uppercase py-3.5 px-4 rounded-lg border border-zinc-700 transition-all text-center">
              Save for later
            </button>
          </div>

        </div>
      </div>
    </div>
        </div>
    );
};

export default WorksOutDetails;