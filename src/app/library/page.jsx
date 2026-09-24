import React from 'react';

import WorkoutCard from '../compnents/WorkoutCard';


const getLibraryData = async () => {
    const res = await fetch(' https://api.abcz.workers.dev/api/fitlog', {
        next: { revalidate: 3600 },
    }); 
    try {
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        return res.json();
    } catch (error) {   
        console.error('Error fetching library data:', error);
        throw error;
    }
}
const LibraryPage = async () => {

    const workouts = await getLibraryData();
    return (
        <div className="min-h-screen bg-[#0d0f12]  rounded-2xl text-white w-full max-w-6xl mx-auto px-4 py-4 sm:py-6">
            <div className="mx-auto max-w-7xl">
                <div className="mb-7">
                    <h1 className="text-3xl font-black tracking-tight">
                        THE LIBRARY
                    </h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Twelve lifts covering every major muscle group.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 ">
          {workouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>
        </div>
    );
};

export default LibraryPage;