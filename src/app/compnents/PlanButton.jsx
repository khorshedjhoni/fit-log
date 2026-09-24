'use client';

import { WorkOutsContext } from '@/Context/WorkOutsContext';
import Link from 'next/link';

import React,{useContext} from 'react';


const PlanButton = ({ workout }) => {

    const {plansWorkouts, setPlansWorkouts} = useContext(WorkOutsContext);

    const handleAddToPlan = () => {
        // Check if the workout is already in the plan
        const isAlreadyInPlan = plansWorkouts.some((item) => item.id === workout.id);   
        if (!isAlreadyInPlan) {
            setPlansWorkouts([...plansWorkouts, workout]);
        }
        else {
            alert("Workout is already in the plan!");
        }
    };
    return (
        <div>
            <Link href="/my-plan">
             <button onClick={handleAddToPlan} className="flex-1 bg-[#CCFF00] hover:bg-[#b8e600] active:scale-95 text-black font-extrabold text-xs uppercase py-3.5 px-4 rounded-lg transition-all text-center">
              Add to todays plan
            </button>
            </Link>

        </div>
    );
};

export default PlanButton;