'use client';

import { WorkOutsContext } from '@/Context/WorkOutsContext';
import Link from 'next/link';

import React,{useContext} from 'react';

const SaveButton = ({ workout }) => {
    const {savedWorkouts, setSavedWorkouts} = useContext(WorkOutsContext);

    const handleSaveWorkout = () => {
        // Check if the workout is already saved
        const isWorkoutSaved = savedWorkouts.some(
            (savedWorkout) => savedWorkout.id === workout.id
        );
        if (!isWorkoutSaved) {
            setSavedWorkouts([...savedWorkouts, workout]);
        }
        else {
            alert("Workout is already saved!");
        }
    };
    return (
        <div>
             <Link href="/my-plan">
                <button onClick={handleSaveWorkout} className="flex-1 bg-transparent hover:bg-zinc-800/60 active:scale-95 text-white font-bold text-xs uppercase py-3.5 px-4 rounded-lg border border-zinc-700 transition-all text-center">
                  Save for later
                </button>
             </Link>
        </div>
    );
};

export default SaveButton;