import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './PortfolioDetails.css'
const PortfolioDetails = () => {
  const { nameId } = useParams();
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    fetch(`/portfolio.json`)
      .then((res) => res.json())
      .then((data) => setPortfolio(data));
  }, []);
  const found = portfolio.find((detail) => detail.id === nameId);
  const {
    img,
    img1,
    img2,
    img3,
    img4,
    img5,
    name,
    id,
    description,
    beAdmin,
    tech,
    live,
    client_code,
    server_code,
  } = found || {};
  return (
    <div>
      <h2 className="my-8 text-4xl text-red-500 mx-16 text-center">
        Project details of {nameId}
      </h2>
      <div className="text-center mt-4 mb-2  grid grid-cols-1 lg:grid-cols-2 lg:mx-5 ml-0 md:ml-5 lg:ml-0">
        <div className="px-2">
          <img className="rounded-lg" src={img} alt=""/>
        </div>
        <div className="px-2 mt-4 flex  text-left">
          <div>
            <h2 className="text-2xl font-bold text-gray-400">{name}</h2>
            <p className="font-semibold text-gray-300">Project type : {id}</p>
            <br />
            <p>{description}</p>
            <br />
            {live && (
            <p>
              website live here :{" "}
              <a href={live} rel="noreferrer" target="_blank" alt="live">
                <span className="underline text-blue-500">Here</span>
              </a>
            </p>
            )}
            {client_code && (
            <p>
              client code :
              <a href={client_code} rel="noreferrer" target="_blank" alt="live">
                <span className="underline text-blue-500">Here</span>
              </a>
            </p>
            )}
            {server_code && (
              <p>
                server code :
                <a
                  href={server_code}
                  rel="noreferrer"
                  target="_blank"
                  alt="live"
                >
                  <span className="underline text-blue-500">Here</span>
                </a>
              </p>
            )}
            <br />
            <p className="w-72">{beAdmin}</p>
            <br />
            <h4>
              Technology I have used : <br />{" "}
              <span className="font-bold">{tech}</span>
            </h4>
            <br />
            <Link to="/" className="bg-red-600 py-2 px-4 rounded-lg">
              Go back
            </Link>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-8 mt-5 '>
              {img1 && <div
                  className="portfolioDetailsImg"
                  style={{
                    transition: "background 3s ease",
                    backgroundImage: `url(${img1})`,
                    backgroundRepeat: "no-repeat",
                  }}
                >
              </div>}
              { img2 && <div
                  className="portfolioDetailsImg"
                  style={{
                    transition: "background 3s ease",
                    backgroundImage: `url(${img2})`,
                    backgroundRepeat: "no-repeat",
                  }}
                >
              </div>}
              { img3 && <div
                  className="portfolioDetailsImg"
                  style={{
                    transition: "background 3s ease",
                    backgroundImage: `url(${img3})`,
                    backgroundRepeat: "no-repeat",
                  }}
                >
              </div>}
              { img4 && <div
                  className="portfolioDetailsImg"
                  style={{
                    transition: "background 3s ease",
                    backgroundImage: `url(${img4})`,
                    backgroundRepeat: "no-repeat",
                  }}
                >
              </div>}
              { img5 && <div
                  className="portfolioDetailsImg"
                  style={{
                    transition: "background 3s ease",
                    backgroundImage: `url(${img5})`,
                    backgroundRepeat: "no-repeat",
                  }}
                >
              </div>}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default PortfolioDetails;
