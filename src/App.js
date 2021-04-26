import React, { useState, useEffect } from "react";
import axios from "axios";
import Row from "./Row";
import "./App.css";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  const [random, setRandom] = useState([]);
  const [originals, setOriginals] = useState([]);
  const [trending, setTrending] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [action, setAction] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [horror, setHorror] = useState([]);
  const [romantic, setRomantic] = useState([]);
  const [documentaries, setDocumentaries] = useState([]);

  const img_base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const tmdb = async () => {
      // RANDOM ORIGINAL
      let randomData = await axios.get(
        `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.YOUR_KEY}&with_networks=213`
      );
      const total = await randomData.data.results.length;
      const randomResult = await randomData.data.results[
        Math.floor(Math.random() * total)
      ];
      setRandom(randomResult);
      // ORIGINAL
      let originalData = await axios.get(
        `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.YOUR_KEY}&with_networks=213`
      );
      const originalResult = await originalData.data.results;
      setOriginals(originalResult);
      // TRENDING
      let trendingData = await axios.get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.YOUR_KEY}&language=en-US`
      );
      const trendingResult = await trendingData.data.results;
      setTrending(trendingResult);
      // TOPRATED
      let topRatedData = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.YOUR_KEY}&language=en-US`
      );
      const topRatedResult = await topRatedData.data.results;
      setTopRated(topRatedResult);
      // ACTION
      let actionData = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.YOUR_KEY}&with_genres=28`
      );
      const actionResult = await actionData.data.results;
      setAction(actionResult);
      // COMEDY
      let comedyData = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.YOUR_KEY}&with_genres=35`
      );
      const comedyResult = await comedyData.data.results;
      setComedy(comedyResult);
      // HORROR
      let horrorData = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.YOUR_KEY}&with_genres=27`
      );
      const horrorResult = await horrorData.data.results;
      setHorror(horrorResult);
      // ROMANTIC
      let romanticData = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.YOUR_KEY}&with_genres=10749`
      );
      const romanticResult = await romanticData.data.results;
      setRomantic(romanticResult);
      // DOCUMENTARIES;
      let documentariesData = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.YOUR_KEY}&with_genres=99`
      );
      const documentariesResult = await documentariesData.data.results;
      console.log(documentariesResult);
      setDocumentaries(documentariesResult);
    };
    tmdb();
  }, []);
  return (
    <div className="app">
      <Nav />
      <Banner content={random} img_base_url={img_base_url} />
      <Row
        title="NETFLIX ORIGINALS"
        content={originals}
        img_base_url={img_base_url}
        isLargeRow={true}
      />
      <Row
        title="Trending Now"
        content={trending}
        img_base_url={img_base_url}
      />
      <Row title="Top Rated" content={topRated} img_base_url={img_base_url} />
      <Row title="Action Movies" content={action} img_base_url={img_base_url} />
      <Row title="Comedy Movies" content={comedy} img_base_url={img_base_url} />
      <Row title="Horror Movies" content={horror} img_base_url={img_base_url} />
      <Row
        title="Romatic Movies"
        content={romantic}
        img_base_url={img_base_url}
      />
      <Row
        title="Documentaries"
        content={documentaries}
        img_base_url={img_base_url}
      />
    </div>
  );
}

export default App;
