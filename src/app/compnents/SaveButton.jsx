'use client';

import { WorkOutsContext } from '@/Context/WorkOutsContext';
import Link from 'next/link';

import React,{useContext} from 'react';
import { FiBookmark, FiCalendar } from 'react-icons/fi';
import { MdSave } from 'react-icons/md';
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
             
                <button onClick={handleSaveWorkout}
                 className="flex-1 inline-flex items-center justify-center gap-2 bg-zinc-900/80 hover:bg-zinc-800 active:scale-95 text-white font-extrabold text-xs  py-3.5 px-5 rounded-xl border border-zinc-800 transition-all duration-150 cursor-pointer">
                  <FiBookmark className="w-4 h-4 stroke-[2.5]" />
                  Save for later
                </button>
            
        </div>
    );
};

export default SaveButton;