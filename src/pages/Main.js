import axios from "axios";
import { useEffect, useState } from "react";

import Search from "../components/Search";


const Main = () => {
  const [defaultMovie, setDefaultMovie] = useState();
  const [buttonSearch, setButtonSearch] = useState(false);
  const[inputSearch,setInputSearch]=useState("");
  const api = "f00e39d798c8c480b88ab58980ae237d";

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${inputSearch}`;
  const url2 = `https://api.themoviedb.org/3/discover/movie?api_key=${api}`;

  const getMovie = async () => {
    console.log(buttonSearch)
    console.log(inputSearch);
    const res = await axios(inputSearch? url : url2);
    console.log(res.data.results);
    setDefaultMovie(res.data.results);
  };
  useEffect(() => {
    getMovie();
  }, []);

  // console.log(data);
  // console.log(buttonSearch)
  // console.log(inputSearch)
  
  return (
    <div>
      <div>
     
     
        <Search setButtonSearch={setButtonSearch} setInputSearch={setInputSearch} getMovie={getMovie}/>
      </div>
      
        {defaultMovie?.map((item) => {
          // console.log(item);
          const { poster_path, vote_average, title, overview, id } = item;

          return (
            <div key={id}>
              <h2>{title}</h2>
              <img
                src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
                width="300px"
                alt=""
              />
            </div>
          );
        })}
    
    </div>
  );
};

export default Main;
