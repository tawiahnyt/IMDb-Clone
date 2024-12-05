/** @format */

import React from "react";
import dotenv from "dotenv";
import Image from "next/image";
import PropTypes from "prop-types";


dotenv.config();
const API_KEY = process.env.API_KEY;

export default async function MoviePage({ params }) {
  const movieId = await params;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId.id}?api_key=${API_KEY}`
  );
  const movie = await res.json();

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          alt="Movie poster"
          className="rounded-lg"
          style={{ maxWidth: "100%", height: "100%" }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
        ></Image>
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.original_name}
          </h2>
          <p className="text-lg mb-3">
            <spam className="font-semibold mr-1">Overview: </spam>
            {movie.overview}
          </p>
          <p className="mb-3">
            <spam className="font-semibold mr-1">Date Released: </spam>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <spam className="font-semibold mr-1">Rating: </spam>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}

MoviePage.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};
