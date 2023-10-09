import React from "react";
import { Link } from "react-router-dom";
import "../Portfolio.css";

const SinglePortfolio = ({ portfolio }) => {
  const { img, id } = portfolio;
  return (
    <>
      <div
        className="img"
        style={{
          transition: "background 3s ease",
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <Link to={`/portfolio/${id}`}>
          <button className="btn-visit">Visit</button>
        </Link>
      </div>
    </>
  );
};

export default SinglePortfolio;
