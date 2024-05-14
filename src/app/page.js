const API_KEY = process.env.API_KEY;
import Results from "@/components/Results";
import { DATA } from "@/data/data";

async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";

  const results = DATA.results;

  console.log(results);
  return <Results results={results} />;
}

export default Home;
