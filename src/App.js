import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [feed, setFeed] = useState([]);
  const [price, setPrice] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/categories")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setFeed(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const sortbylow_high = feed.sort((a, b) => {
      if (price === "lower_to_high") {
        return a.price - b.price;
      } else if (price === "upper_to_low") {
        return b.price - a.price;
      } else {
        return 0;
      }
    });

    setPrice(sortbylow_high);
  }, [price]);

  return (
    <div className="App">
      <button className="btn" onClick={() => setPrice("lower_to_high")}>
        low to high
      </button>
      <button className="btn" onClick={() => setPrice("upper_to_low")}>
        low to high
      </button>
      {feed.map((data, index) => {
        return (
          <>
            <li>
              {data.title} {data.price}
            </li>
            <img width="100px" src={data.img} alt="fig" />
          </>
        );
      })}
    </div>
  );
}

export default App;
