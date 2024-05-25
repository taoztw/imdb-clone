import { headers } from "@/data/request_options";
import Image from "next/image";

async function MoviePage({ params }) {
  const movieId = params.id;

  const options = {
    method: "GET",
    headers: headers,
  };
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    options
  );
  const movie = await res.json();

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row p-4 content-center max-w-6xl mx-auto md:space-x-6 md:pt-8 ">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          style={{ height: "100%" }}
          className="rounded-lg"
          alt=""
        ></Image>
        <div className="p-2">
          <h1 className="text-lg mb-3 font-bold">{movie.title}</h1>
          <p className="text-lg mb-3">{movie.overview}</p>
          <p>
            <span className="font-semibold mr-1 ">Date Released:</span>
            {movie.release_date || movie.first_air_date}
            <p className="mb-3"></p>
          </p>
          <p>
            {" "}
            <span className="font-semibold mr-1 ">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
