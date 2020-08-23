import React from "react";
import "../src/styles.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Search from "./components/Search";
import Footer from "./components/Footer";
import { Fab } from "@material-ui/core";
import { AiOutlineArrowUp } from "react-icons/ai";
import styled from "styled-components";

const ArrowUp = styled(AiOutlineArrowUp)`
  font-size: 25px;
`;

export default function App() {
  const [data, setData] = React.useState([]);
  const [value, setValue] = React.useState("marvel");

  React.useEffect(() => {
    if (value.length > 0) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${value}&api_key=c44f3055c4d3fd71f47ac4b8393d9a16`
      )
        .then((res) => res.json())
        .then((movie) => {
          setData(movie.results);
        });
    }
  }, [value]);
  console.log(value.length > 0);
  console.log(value);
  return (
    <>
      <Navbar firstData={value} setFirstData={setValue} />
      <Fab
        color="primary"
        style={{
          position: "fixed",
          right: 0,
          marginRight: "20px",
          top: "76vh",
          outline: "none",
        }}
        onClick={() => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
      >
        <ArrowUp />
      </Fab>
      {value.length > 0 ? (
        data.map((item, index) => {
          return (
            <Card
              title={item.title}
              overview={item.overview}
              poster={item.poster_path}
              date={item.release_date}
              id={item.id}
              language={item.original_language}
              key={index}
            />
          );
        })
      ) : (
        <Search />
      )}
      {value.length > 0 ? <Footer /> : null}
    </>
  );
}
