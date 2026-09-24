'use client'

import React,{createContext,useState} from 'react';

export const WorkOutsContext =createContext();

const WorkOutsProvider = ({children}) => {

    const [plansWorkouts,setPlansWorkouts] = useState([]);
    const [savedWorkouts,setSavedWorkouts] = useState([]);

    const shareValue = {
        plansWorkouts,
        setPlansWorkouts,
        savedWorkouts,
        setSavedWorkouts
    }
    return (
        <div>
            <WorkOutsContext.Provider value={shareValue}>
                {children}
            </WorkOutsContext.Provider>
        </div>
    );
};

export default WorkOutsProvider;