import Results from "@/components/Results";
import { DATA } from "@/data/data";
import { ProxyAgent } from "undici";
const API_KEY = process.env.API_KEY;

async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmJiMTAzNjNlZTk3ZjU0NGJlM2U0OGJkNTEzZGUzMiIsInN1YiI6IjY2NDM2OTU1MzgwMWNjNmI2MzJhNDBhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7aeNoZhqUTIxZMBe_CiZlFPbWdYFzcuzx9lKm995yAk",
    },
  };
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?language=en-US&page=1`,
    options
  );
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const results = data.results;

  return <Results results={results} />;
}

export default Home;
