import Link from "next/link";
import React from "react";
import Image from "next/image";

const WorkoutCard = ({ workout }) => {
  return (
    <Link href={`/workouts/${workout.id}`}>
      <div className="group overflow-hidden rounded-xl border border-white/10 bg-[#15171c] transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/50 hover:shadow-xl">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <div className="mb-3 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-lime-400 px-3 py-1 text-[10px] font-bold uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          <h2 className="text-lg font-bold uppercase tracking-wide text-white">
            {workout.name}
          </h2>

          <p className="mt-1 text-sm text-gray-500">{workout.equipment}</p>

          <div className="my-4 border-t border-white/5"></div>

          <div className="flex items-center gap-4 text-xs text-gray-400">
            <span>◷ {workout.duration} min</span>

            <span>● {workout.caloriesBurned} kcal</span>

            <span>☆ {workout.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
