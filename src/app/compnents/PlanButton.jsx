'use client';

import { WorkOutsContext } from '@/Context/WorkOutsContext';
import Link from 'next/link';

import React,{useContext} from 'react';
import { FiCalendar, FiPlus } from 'react-icons/fi';
import { toast } from 'react-toastify';


const PlanButton = ({ workout }) => {

    const {plansWorkouts, setPlansWorkouts} = useContext(WorkOutsContext);

    const handleAddToPlan = () => {
        
        const isAlreadyInPlan = plansWorkouts.some((item) => item.id === workout.id);   
        if (!isAlreadyInPlan) {
            setPlansWorkouts([...plansWorkouts, workout]);
            toast.success("Workout added to today's plan!", {
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
            toast.info("Workout is already in the plan!", {
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
            
             <button onClick={handleAddToPlan} 
             className="flex-1 inline-flex items-center justify-center gap-2 bg-[#CCFF00] hover:bg-[#b8e600] active:scale-95 text-black font-extrabold text-xs  py-3.5 px-5 rounded-xl transition-all duration-150 cursor-pointer"
      >
                <FiCalendar className="w-4 h-4 stroke-[2.5]" />
              Add to todays plan
            </button>
        

        </div>
    );
};

export default PlanButton;