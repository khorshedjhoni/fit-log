"use client";

import Image from "next/image";
import Link from "next/link";
import React from 'react';
import { FiClock, FiX } from "react-icons/fi";
import { FaFire } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const TodaysPlan = ({ workout }) => {
    return (
        
            <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#15181e] p-3 transition duration-300 hover:border-white/20">
      
      {/* Workout Image */}
      <div className="relative h-14 w-24 shrink-0 overflow-hidden rounded-lg">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Workout Information */}
      <div className="min-w-0 flex-1">
        <h2 className="text-sm font-bold uppercase text-white">
          {workout.name}
        </h2>

        <p className="mt-0.5 text-xs text-gray-500">
          {workout.equipment}
        </p>

        {/* Stats */}
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

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-2">

        {/* View Details */}
        <Link
          href={`/library/${workout.id}`}
          className="rounded-full border border-white/15 px-3 py-1.5 text-[10px] text-gray-300 transition hover:border-white/30 hover:text-white"
        >
          View Details
        </Link>

        {/* Mark as Done */}
        <button
          className="flex items-center gap-1 rounded-full bg-lime-400 px-3 py-1.5 text-[10px] font-semibold text-black transition hover:bg-lime-300"
        >
          <FaCheck size={8} />
          Mark as Done
        </button>

        {/* Remove */}
        <button
          className="p-1 text-gray-500 transition hover:text-red-400"
          title="Remove workout"
        >
          <FiX size={14} />
        </button>

      </div>
    </div>
        
    );
};

export default TodaysPlan;