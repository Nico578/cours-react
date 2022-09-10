import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries">
        <ul className="radio-container">
            <input type="range" min="1" max="250" defaultValue={36} onChange={(e) => setRangeValue(e.target.value)}/>
            <input type="radio"  id="" /> Amerique du Nord
            <input type="radio"  id="" /> Amerique du Sud
            <input type="radio"  id="" /> Europe
            <input type="radio"  id="" /> Afrique
            <input type="radio"  id="" /> Antartique
            <input type="radio"  id="" /> Océanie
            <input type="radio"  id="" /> Asie
        </ul>
      <ul>
        {data
        .slice(0, rangeValue )
        .map((country, index) => (
          <Card key={index} country={country} />
        ))}
      </ul>
    </div>
  );
};

export default Countries;
