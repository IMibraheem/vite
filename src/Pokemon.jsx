import React, { useEffect, useState } from "react";
import PokemonCards from "./Component/PokemonCards";

const Pokemon = () => {
  let api = "https://pokeapi.co/api/v2/pokemon?limit=100";
  let [apiData, setApiData] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState();
  let [inp, setInp] = useState("");
        
  const fetchingApi = async () => {
    try {
      let res = await fetch(api);
      let data = await res.json();
      let results = data.results;

      // Fetching Inner url inside the data
      let fetchingResultsInnerdata = results.map(async (e) => {
        let res = await fetch(e.url);
        let data = await res.json();
        return data;
      });
      let FinalResult = await Promise.all(fetchingResultsInnerdata);
      setApiData(FinalResult);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(err.message);
    }
  };
  useEffect(() => {
    fetchingApi();
  }, []);

  const searchData = apiData.filter((data)=> data.name.toLowerCase().includes(inp.toLowerCase()))

  if (loading) {
    return (
      <div className="w-full h-[100vh] text-5xl font-bold flex justify-center items-center animate-pulse">
        <div>Loading ...</div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="w-full h-[100vh] text-5xl font-bold flex justify-center items-center animate-pulse">
        <div>{error}</div>
      </div>
    );
  }

  return (
    <div className=" min-h-[100vh] flex justify-center  bg-blue-100">
      <div className="w-[95%] py-5 border flex flex-col items-center gap-5">
        <h1 className="font-bold text-2xl text-center">
          Wellcome to Pokemon Website
        </h1>
        <input
          type="text"
          placeholder="Search PokemonCard"
          value={inp}
          className="w-[70%] m-auto p-2 font-bold text-xl md:w-[30%] "
          onChange={(e)=>setInp(e.target.value)}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-4 mx-auto">
          {searchData.map((e) => {
            return <PokemonCards key={e.id} pokemonData={e} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
