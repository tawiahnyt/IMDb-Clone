import React from 'react';
import dotenv from "dotenv";
import ErrorMessage from '@/app/error';
import Results from '@/components/Results';

dotenv.config();
const API_KEY = process.env.API_KEY;

export default async function SearchPage({ params }) {
    console.log(params);
    
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${params.searchTerm}&language=en-US&adult=false`)

    if (!res.ok){
        throw new ErrorMessage("Error fetching data")
    }

    const data = await res.json()
    const results = data.results
  return (
    <div>
    {results && results.length == 0 && (
        <h1 className='text-center pt-6'>No results found</h1>
    )}

    {results && <Results results={results} />}
    </div>
  )
}
