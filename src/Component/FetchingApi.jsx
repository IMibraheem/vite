import React, { useEffect, useState } from "react";
import ChilderenComponent from "./ChilderenComponent";

const FetchingApi = () => {
  let [apiData, setApiData] = useState(null);
  let [loading, setLoading] = useState(true);
  let [dark,setDark]=useState(false)
  let [error, setError] = useState("");

  const handleTheme=()=>{
    setDark(!dark)
  }
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setApiData(data.slice(0, 20));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(err);
      });
  }, []);
  if (loading) {
    return <div className="text-2xl font-bold">Loading ...</div>;
  }
  if (error) {
    return <div className="text-2xl font-bold">Error {error.message}</div>;
  } else {
    return (
      <div className={`text-xl flex flex-col justify-center items-center pt-10  gap-10 ${dark ?"bg-black":"bg-white "}`} >
        <div className={`flex  w-[90%] justify-between text-xl font-bold ${dark ?"text-white":''}`}>
        <h1 className="font-bold text-2xl underline">FetchingApi</h1>
        <button onClick={handleTheme} className={`p-2 ${dark?"bg-gray-700":'bg-gray-200'}`}>Theme</button>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[90%]">
          {apiData.map((e) => {
            return <ChilderenComponent data={e} key={e.id} />;
          })}
        </div>
      </div>
    );
  }
};
export default FetchingApi;
