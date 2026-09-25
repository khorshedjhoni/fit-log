import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-white px-4 text-center">
      <h1 className="text-8xl font-extrabold text-lime-400 tracking-wider">404</h1>
      <h2 className="text-2xl font-bold uppercase mt-4">Page Not Found</h2>
      <p className="text-zinc-400 mt-2 max-w-md">
        The lift or page you are looking for doesnt exist or has been moved.
      </p>
      
      <Link 
        href="/" 
        className="mt-6 px-6 py-3 bg-lime-400 text-black font-semibold rounded-md hover:bg-lime-300 transition-colors"
      >
        GO TO WORKOUTS
      </Link>
    </div>
  );
}