"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FiClock, FiX } from "react-icons/fi";
import { FaFire, FaStar } from "react-icons/fa";
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
    <div
      className="
        flex flex-col gap-3
        rounded-xl border border-white/10
        bg-[#15181e] p-3
        transition duration-300
        hover:border-white/20
        sm:flex-row sm:items-center sm:gap-4
      "
    >
      <div
        className="
          relative h-40 w-full
          shrink-0 overflow-hidden rounded-lg
          sm:h-16 sm:w-24
        "
      >
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

        <p className="mt-1 text-xs text-gray-500">
          {workout.equipment}
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] text-gray-400">
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

      <div className="flex w-full items-center gap-2 sm:w-auto sm:shrink-0">
        <Link
          href={`/workouts/${workout.id}`}
          className="
            flex-1 rounded-full
            border border-white/15
            px-3 py-2
            text-center text-[10px] text-gray-300
            transition
            hover:border-white/30 hover:text-white
            sm:flex-none sm:py-1.5
          "
        >
          View Details
        </Link>

        <button
          onClick={handleDeleteWorkout}
          className="
            flex h-8 w-8
            shrink-0 items-center justify-center
            rounded-full
            p-1
            text-gray-500
            transition
            hover:bg-red-500/10 hover:text-red-400
          "
          title="Remove workout"
        >
          <FiX size={14} />
        </button>
      </div>
    </div>
  );
};

export default SavePlan;