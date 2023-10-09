import React, { useEffect, useState } from "react";
import SinglePortfolio from "./SinglePortfolio/SinglePortfolio";
import "./Portfolio.css";

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]);
  useEffect(() => {
    fetch("/portfolio.json")
      .then((res) => res.json())
      .then((data) => setPortfolios(data));
  }, []);
  return (
    <div className="grid justify-items-center mx-auto my-12 text-center ">
      <h2 id="portfolio" className="text-5xl mb-5 font-bold text-gray-300 ">
        My Portfolio
      </h2>
      <div className="grid mx-auto gap-16 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 ">
        {portfolios.map((portfolio) => (
          <SinglePortfolio
            key={portfolio.name}
            portfolio={portfolio}
          ></SinglePortfolio>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
/*

 */
