import { getSingleMovie } from "@/lib/getMovies";
import { Movie } from "@/typings";
import Image from "next/image"
import getImagePath from "@/lib/getImagePath"
import Link from 'next/link';

type Props = {
    params: {
        id: string;
    };
};

async function DetailsPage({ params: { id }}: Props) {

    const movie: Movie = await getSingleMovie(id);

    const d = new Date(movie.release_date);
    const year = d.getFullYear();
 return (
    <div className="relative w-screen h-screen overflow-hidden">
        <Image
            src={getImagePath(movie.backdrop_path || movie.poster_path)}
            alt={movie.title}
            width="1920"
            height="1080" 
            className="absolute top-0 left-0 w-full h-full object-cover object-center"
            key={movie.id}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-900/90 to-transparent p-10 space-y-5 text-white">
            <div className=" mt-20">
                <h2 className="text-5xl font-bold max-w-xl">
                    {movie.title}
                </h2>
                <p className="pt-5">{year}</p>
                <p className="pt-5">{movie.runtime} minutes</p>
                <p className="pt-5 pb-10 max-w-xl">{movie.overview}</p>
                <Link className="text-l border-2 border-white rounded-md p-2 hover:bg-gray-600" href="/">Back</Link>
            </div>
        </div>    
    </div>
);

}

export default DetailsPage
