import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

function MovieDetails() {
    const router = useRouter();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        if (router.query) {
            setMovie(router.query);
        }
    }, [router.query]);

    if (!movie) {
        return <div>Loading...</div>;
    }


    return (
        <div className="container mx-auto p-4 mt-16 px-5 xl:px-20 ">
            <div className='relative mb-32'>
                <div className='h-40 md:h-96 overflow-hidden justify-center items-center flex rounded-3xl w-full'>
                    <Image src={movie.Poster} height={5000} width={5000}
                        priority={true} alt='poster'
                        className='object-cover w-full' />
                </div>
                <div className='absolute overflow-hidden bg-[#1E273D]/90 rounded-2xl px-4 md:px-9 py-2 md:py-6 top-28 md:top-80 left-0 md:left-20 w-full md:w-96 backdrop-blur-sm'>
                    <p className='text-[#7E7EB0] capitalize text-base'>MaileHereko / {movie.Type}</p>
                    <h1 className='text-white text-3xl capitalize'>{movie.Title}</h1>
                </div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-20 md:gap-0">
                <div className="h-80 rounded-xl w-full md:w-1/2 flex justify-center items-center">
                    <Image height={500} width={500}
                        src={movie.Poster}
                        alt={movie.Title}
                        priority={true}
                        className="h-96 md:h-[600px] rounded-xl w-auto"
                    />
                </div>
                <div className="text-[#C2C4CE] w-full md:w-1/2 flex flex-col gap-8">
                    <p className='text-xl font-semibold'>
                        {/* {movie.Year} */}
                        Part of the journey is the end.</p>
                    <p className='text-base'>{movie.Plot}
                        After the devastating events of Avengers:
                        Infinity War&apos; the universe is in ruins due to the
                        efforts of the Mad Titan&apos; Thanos. With the help of
                        remaining allies&apos; the Avengers must assemble
                        once more in order to undo Thanos actions and
                        restore order to the universe once and for all&apos; no
                        matter what consequences may be in store.</p>

                    <div className="text-[#EEA626] bg-black/50 text-xs px-2 py-1 rounded-lg flex justify-center items-center gap-2 w-fit mb-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#EEA626"
                            className="size-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                            />
                        </svg>
                        {/* {movie.imdbRating} */}
                        7.9
                    </div>

                    <div className='flex flex-col gap-8 capitalize'>
                        <p className='text-sm flex flex-col gap-4'>Type: <span className='text-base'>{movie.Type}</span></p>
                        <p className='text-sm  flex flex-col gap-4'>Released Date: <span className='text-base'>
                            {/* {movie.Released} */}
                            2019-04-24</span></p>
                        <p className='text-sm flex flex-col gap-4'>Runtime: <span className='text-base'>
                            {/* {movie.Runtime} */}
                            181 min</span></p>
                        <p className='text-sm flex flex-col gap-4'>Generes: <span className='text-base'>
                            {/* {movie.Genres} */}
                            Adventure&apos; Science Fiction&apos; Action</span></p>
                    </div>
                </div>
            </div>

            <div className="absolute z-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#191A3E] via-[#191A3E] to-[#191A3E] bottom-80 md:bottom-60 left-0 md:left-60 h-96 md:h-[500px] w-60 md:w-[500px] blur-3xl rounded-full"></div>
            <div className="absolute z-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#10252F] via-[#10252F] to-[#10252F] right-0 md:right-20 bottom-0  h-96 md:h-[500px] w-60 md:w-[500px] blur-3xl rounded-full"></div>
        </div>
    );
}

export default MovieDetails