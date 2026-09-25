"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FiClock, FiX } from "react-icons/fi";
import { FaFire } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { WorkOutsContext } from "@/Context/WorkOutsContext";
import { toast } from "react-toastify";

const SavePlan = ({ workout }) => {
  const { savedWorkouts, setSavedWorkouts } = useContext(WorkOutsContext);

  const handleDeleteWorkout = () => {
    const updatedSavedWorkouts = savedWorkouts.filter(
      (savedWorkout) => savedWorkout.id !== workout.id,
    );
    setSavedWorkouts(updatedSavedWorkouts);

    toast.warning("Workout removed from saved workouts!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <div>
      <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#15181e] p-3 transition duration-300 hover:border-white/20">
        <div className="relative h-14 w-24 shrink-0 overflow-hidden rounded-lg">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="text-sm font-bold uppercase text-white">
            {workout.name}
          </h2>

          <p className="mt-0.5 text-xs text-gray-500">{workout.equipment}</p>

          <div className="mt-1.5 flex items-center gap-3 text-[10px] text-gray-400">
            <span className="flex items-center gap-1">
              <FiClock className="text-lime-400" />
              {workout.duration} min
            </span>

            <span className="flex items-center gap-1">
              <FaFire className="text-lime-400" />
              {workout.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1">
              <FaStar className="text-lime-400" />
              {workout.rating}
            </span>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href={`/workouts/${workout.id}`}
            className="rounded-full border border-white/15 px-3 py-1.5 text-[10px] text-gray-300 transition hover:border-white/30 hover:text-white"
          >
            View Details
          </Link>

          <button
            onClick={handleDeleteWorkout}
            className="p-1 text-gray-500 transition hover:text-red-400"
            title="Remove workout"
          >
            <FiX size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavePlan;
