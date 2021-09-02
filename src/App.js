import './App.css';
import Row from "./Row";
import requests from "./request";
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className="app">
      <Nav/>

    <Banner/>
      <Row title="Trending Now" fetchURL={requests.fetchTrending}  isLargeRow={true}/>
      <Row  title="Netflix Orignals" fetchURL={requests.fetchNetflixOrignals}/>
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries Movies" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
