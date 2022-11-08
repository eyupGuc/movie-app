import axios from "axios";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import Search from "../components/Search";
import {
  BottomText,
  CardBottom,
  CardImg,
 
  MainCard,
  MainContainer,
  MainDiv,
  TopContainer,
} from "../components/styles/Main.styled";

const Main = () => {
  const [defaultMovie, setDefaultMovie] = useState();
  const [setButtonSearch] = useState(false);
  const [inputSearch, setInputSearch] = useState(null);
  const api = "f00e39d798c8c480b88ab58980ae237d";
  const navigate = useNavigate();

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${inputSearch}`;
  const url2 = `https://api.themoviedb.org/3/discover/movie?api_key=${api}`;

  const getMovie = async () => {
    // console.log(buttonSearch)
    // console.log(inputSearch);
    const res = await axios(inputSearch ? url : url2);
    console.log(res.data.results);
    setDefaultMovie(res.data.results);
  };

  
  useEffect(() => {
    getMovie();
  },[]);

  // console.log(data);
  // console.log(buttonSearch)
  // console.log(defaultMovie)
  //  console.log(inputSearch)

  return (
    <TopContainer>
      <div>
        <Search
          inputSearch={inputSearch}
          setButtonSearch={setButtonSearch}
          setInputSearch={setInputSearch}
          getMovie={getMovie}
        />
      </div>
      <MainContainer>
        {defaultMovie?.map((item) => {
          // console.log(item);
          const {
            poster_path,
            vote_average,

            id,
            original_title,
          } = item;

          return (
            <MainDiv key={id}>
              <MainCard onClick={() => navigate(`/movieDetail/${id}`)}>
                <CardImg
                  src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
                  width="300px"
                  alt=""
                />
                <CardBottom>
                  <BottomText> {original_title}</BottomText>
                  <BottomText color="orange"> {vote_average}</BottomText>
                </CardBottom>
              </MainCard>
            </MainDiv>
          );
        })}
      </MainContainer>
    </TopContainer>
  );
};

export default Main;
