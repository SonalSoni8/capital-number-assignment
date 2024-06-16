'use client';

import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import router from 'next/router';
import Image from 'next/image';

function LandingPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const fetchMovies = useCallback(async (searchTerm = 'action') => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=3acb3cb6&s=${searchTerm}`
      );
      const data = response.data;
      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        console.error('Error fetching movies:', data.Error);
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setMovies([]);
    }
  }, []);
  console.log(movies)

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const debouncedFetchMovies = debounce(fetchMovies, 2000);

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);
    debouncedFetchMovies(searchTerm);
  };

  const handleMovieClick = (movie) => {
    router.push({
      pathname: `/moviedetails`,
      query: {...movie },
    });
  };

  return (
    <div className="relative container mx-auto p-4 mt-16 px-5 xl:px-20 ">
      <div className="w-full">
        <h1 className="text-5xl md:text-6xl font-medium text-white mb-3">
          MaileHereko
        </h1>
        <p className="text-base font-base text-[#9298A9]">
          List of movies and TV Shows, I,{' '}
          <span className="text-[#7B6EF6]">Pramod Poudel</span> have
          watched till date.
        </p>
        <p className="text-base font-base text-[#9298A9] mb-5">
          Explore what i have watched and also feel free to make a
          suggestion. 😉
        </p>
        <div className="flex justify-start items-center gap-3 py-3 px-4 border-[#202D44] rounded-xl border-[3px] text-[#9298A9] w-full md:w-80 mb-14 bg-[#0E2033]">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#303C53"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={query}
            onChange={handleChange}
            className="bg-transparent text-lg placeholder:text-[#303C53] placeholder:font-light outline-none"
            placeholder="Search for movies..."
          />
        </div>
      </div>
      <div className="relative z-10 flex md:gap-4 p-2 rounded-lg bg-[#0B2236] w-full md:w-96 items-center justify-center mb-6">
        {['All', 'Movies', 'TV Shows'].map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`px-5 md:px-8 py-2 rounded-xl font-semibold text-sm ${activeTab === idx
              ? 'bg-[#7A6DF5] text-white'
              : 'bg-transparent text-gray-400'
              } focus:outline-none`}
          >
            {tab}
          </button>
        ))}
      </div>

      <h1 className="text-[#70788E] text-2xl mb-6">
        All <span className="text-xs">(120)</span>
      </h1>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            onClick={() => handleMovieClick(movie)}
          >
            <div className="block bg-[#29293B]/40 p-2 rounded-xl h-auto hover:shadow-lg">
              {movie.Poster !== 'N/A' && (
                <div className="relative ">
                  <Image height={500} width={500}
                    src={movie.Poster}
                    alt={movie.Title}
                    priority={true}
                    className="w-full object-center"
                  />
                  <div className="text-[#EEA626] absolute top-2 left-2 bg-black/50 text-xs px-2 py-1 rounded-full flex justify-center items-center gap-2">
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
                </div>
              )}
              <h2 className="text-base font-semibold text-[#C2C4CE] px-3 pb-2 pt-6">
                {movie.Title}
              </h2>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute z-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#191A3E] via-[#191A3E] to-[#191A3E] bottom-80 md:bottom-60 left-0 md:left-60 h-96 md:h-[500px] w-60 md:w-[500px] blur-3xl rounded-full"></div>
      <div className="absolute z-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#10252F] via-[#10252F] to-[#10252F] right-0 md:right-20 bottom-0  h-96 md:h-[500px] w-60 md:w-[500px] blur-3xl rounded-full"></div>
    </div>
  );
}

export default LandingPage;
