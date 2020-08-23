import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const MyButton = styled(Button)`
  @media screen and (max-width: 500px) {
    margin-left: 0px;
  }
  padding: 10px 30px;
  margin-top: 20px;
`;

export default function Card(props) {
  const viewPage = () => {
    window.location.href = `https://www.themoviedb.org/movie/${props.id}`;
  };

  return (
    <div className="container-card">
      <h1>{props.title}</h1>
      <p>{props.overview}</p>
      <p>
        <b>Original language: {props.language}</b>
      </p>
      <p>
        <b>Release date: {props.date}</b>
      </p>

      <img
        src={`https://image.tmdb.org/t/p/w185/${props.poster}`}
        width="200px"
        height="300px"
        alt="no poster"
      />

      <MyButton onClick={viewPage}>more</MyButton>
    </div>
  );
}
