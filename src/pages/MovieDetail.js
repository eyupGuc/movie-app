import { async } from "@firebase/util";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { DataContext } from "../components/context/DataContext";

const MovieDetail = () => {
  const navigate = useNavigate();
  const { dataContext, setDataContext } = useContext(DataContext);
  const [dataDetail, setDataDetail] = useState();
  console.log(dataContext);

  const url = `https://api.themoviedb.org/3/movie/${dataContext}?api_key=f00e39d798c8c480b88ab58980ae237d`;
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
      <h4>{dataDetail?.tagline}</h4>
      <h3>{dataDetail?.overview}</h3>
      <img src={dataDetail?.homepage} alt="" />
    </div>
  );
};

export default MovieDetail;
