/** @format */

import Results from "@/components/Results";
import dotenv from "dotenv";
import PropTypes from "prop-types";

dotenv.config();
const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = (await searchParams).genre || "fetchTrending";
  const url = `https://api.themoviedb.org/3/${
    genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
  }?api_key=${API_KEY}&language=en-US&page=1&adult=false&total_pages=10`;

  try {
    const res = await fetch(url, { next: { revalidate: 10000 } });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    const results = data.results;

    return (
      <div>
        <Results results={results} />
      </div>
    );
  } catch (error) {
    console.error("Fetch error:", error);
    return (
      <div>
        <p>Error fetching data</p>
      </div>
    );
  }
}

Home.propTypes = {
  searchParams: PropTypes.object.isRequired,
};