import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

const Main = () => {
  const [data, setData] = useState();
  const api = "f00e39d798c8c480b88ab58980ae237d";

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${api}&query=Batman`;
//   const url2 = `https://api.themoviedb.org/3/discover/movie?api_key=${api}`

  const getMovie = async () => {
    const {res}  = await axios( url);
    console.log(res)
    setData(res)
  };
  useEffect(() => {
    getMovie();
  }, []);

  console.log(data);
  return (
    <>
    <Search/>
      <div>main</div>
    </>
  );
};

export default Main;
