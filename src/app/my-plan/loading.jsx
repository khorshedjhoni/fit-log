import React from 'react';

export default function Loading() {
    return (
        <div className="w-full max-w-5xl mx-auto px-4 py-16 text-center text-white flex flex-col items-center justify-center">
            <div className="animate-pulse flex flex-col items-center gap-3">
                <div className="h-8 w-8 rounded-full border-2 border-t-[#CCFF00] border-zinc-700 animate-spin"></div>
                <p className="text-zinc-400 text-sm font-bold uppercase tracking-wider">
                    Loading workouts...
                </p>
            </div>
        </div>
    );
}