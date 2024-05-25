import Results from "@/components/Results";
import { headers } from "@/data/request_options";
async function SearchPage({ params }) {
  const searchTerm = params.searchTerm;

  const options = {
    method: "GET",
    headers: headers,
  };
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&language=en-US&page=1&include_adult=false`,
    options
  );
  const data = await res.json();
  const results = data.results;

  return (
    <div>
      {results.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}

      {results && <Results results={results} />}
    </div>
  );
}

export default SearchPage;
