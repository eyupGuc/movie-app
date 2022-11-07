import { async } from "@firebase/util";
import axios from "axios";
import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router";

const MovieDetail = () => {
  const { id: keys } = useParams();
  const navigate = useNavigate();

  const [dataDetail, setDataDetail] = useState();

  const url = `https://api.themoviedb.org/3/movie/${keys}?api_key=f00e39d798c8c480b88ab58980ae237d`;
  const image_url = `https://image.tmdb.org/t/p/w500`;
  const getMovieDetail = async () => {
    const { data } = await axios(url);
    setDataDetail(data);
    console.log(data);
  };
  useEffect(() => {
    getMovieDetail();
    // const { tagline } = dataDetail;
  }, []);
  return (
    <div>
      <h5>{dataDetail?.title}</h5>
      <p>{dataDetail?.overview}</p>
      <p>{dataDetail?.release_date}</p>
      <p>{dataDetail?.vote_average}</p>
      <img src={image_url +dataDetail?.backdrop_path} alt="" />
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
};

export default MovieDetail;
