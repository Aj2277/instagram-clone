import { useState, useEffect } from "react";
import Header from "./components/Header";
import Stories from "./components/Stories";
import Feeds from "./components/Feeds";
// export const ImageContext = createContext();

const App = () => {
  const [searchVal, setSearchVal] = useState([]);
  const [data, setData] = useState([]);
  const [randomData, setRandomData] = useState([]);

  useEffect(() => {
    const fetchRandomPhotos = async () => {
      const response = await fetch(
        `https://api.unsplash.com/collections?page=2&per_page=30&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`
      );

      const data = await response.json();
      console.log(data);
      setRandomData(data);
    };
    fetchRandomPhotos();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchVal(e.target.value);
  };

  const fetchPhotos = async () => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=1&per_page=30&query=${searchVal}&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`
    );
    const data = await response.json();
    console.log(data);

    setData(data);
  };

  return (
    <>
      <Header onClick={fetchPhotos} onChange={handleChange} />
      <Stories userStories={randomData} />
      <Feeds data={data} randomPhotos={randomData} />
    </>
  );
};

export default App;
