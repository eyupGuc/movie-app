import { textAlign } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import { useNavigate, useParams } from "react-router";
import { MovieDetailDiv } from "../components/styles/MovieDetail.styled";

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
  }, []);
  return (
    <MovieDetailDiv >
      <Card style={{ width: "30rem" , }}>
        <Card.Img variant="top" src={image_url + dataDetail?.backdrop_path} />
        <Card.Body>
          <Card.Title>{dataDetail?.title}</Card.Title>
          <Card.Text>{dataDetail?.overview}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{dataDetail?.release_date}</ListGroup.Item>
          <ListGroup.Item>{dataDetail?.vote_average}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <button className="btn btn-success" onClick={() => navigate("/")}>Home</button>
        </Card.Body>
      </Card>
    </MovieDetailDiv>
  );
};

export default MovieDetail;
