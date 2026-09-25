'use client';

import { WorkOutsContext } from '@/Context/WorkOutsContext';
import Link from 'next/link';

import React,{useContext} from 'react';
import { toast } from 'react-toastify';

const SaveButton = ({ workout }) => {
    const {savedWorkouts, setSavedWorkouts} = useContext(WorkOutsContext);

    const handleSaveWorkout = () => {
        
        const isWorkoutSaved = savedWorkouts.some(
            (savedWorkout) => savedWorkout.id === workout.id
        );
        if (!isWorkoutSaved) {
            setSavedWorkouts([...savedWorkouts, workout]);
            toast.success("Workout saved for later!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        else {
            toast.info("Workout is already saved!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
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