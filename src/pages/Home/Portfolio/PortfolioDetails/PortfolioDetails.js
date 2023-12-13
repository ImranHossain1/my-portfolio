import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./PortfolioDetails.css";
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
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    name,
    id,
    description,
    beAdmin,
    tech,
    live,
    client_code,
    server_code,
    auth_service,
    core_service,
    api_gateway,
    features,
    call_to_action,
  } = found || {};
  return (
    <div>
      <h2 className="my-8 text-4xl text-red-500 mx-16 text-center">
        Project details of {nameId}
      </h2>
      <div className="text-center mt-4 mb-2  grid grid-cols-1 lg:grid-cols-2 lg:mx-5 ml-0 md:ml-5 lg:ml-0">
        <div className="px-2">
          <img className="rounded-lg" src={img} alt="" />
        </div>
        <div className="px-2 mt-4 flex  text-left">
          <div>
            <h2 className="text-2xl font-bold text-gray-400">{name}</h2>
            <br />
            <p>{description}</p>
            <br />

            {features?.authentication_Layer && (
              <>
                <p>Authentication Service: {features?.authentication_Layer}</p>
                <br />
              </>
            )}
            {features?.core_Service && (
              <>
                <p>Core Service: {features?.core_Service}</p>
                <br />
              </>
            )}
            {features?.api_gateway && (
              <>
                <p>Api Gateway Service: {features?.api_gateway}</p>
                <br />
              </>
            )}
            {features?.frontend && (
              <>
                <p>Frontend Features: {features?.frontend}</p>
                <br />
              </>
            )}
            {features?.user && (
              <>
                <p>User Role: {features?.user}</p> <br />
              </>
            )}
            {features?.admin && (
              <>
                <p>Admin Role: {features?.admin}</p>
                <br />
              </>
            )}
            {features?.student && (
              <>
                <p>Student Role: {features?.student}</p>
                <br />
              </>
            )}
            {features?.faculty && (
              <>
                <p>Faculty Role: {features?.faculty}</p>
                <br />
              </>
            )}
            {call_to_action && (
              <>
                <p>Actions: {call_to_action}</p>
                <br />
              </>
            )}
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
                <a
                  href={client_code}
                  rel="noreferrer"
                  target="_blank"
                  alt="live"
                >
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
            {auth_service && (
              <p>
                Authentication Service :
                <a
                  href={auth_service}
                  rel="noreferrer"
                  target="_blank"
                  alt="live"
                >
                  <span className="underline text-blue-500">Here</span>
                </a>
              </p>
            )}
            {core_service && (
              <p>
                Core Service:
                <a
                  href={core_service}
                  rel="noreferrer"
                  target="_blank"
                  alt="live"
                >
                  <span className="underline text-blue-500">Here</span>
                </a>
              </p>
            )}
            {api_gateway && (
              <p>
                Api Gateway :
                <a
                  href={api_gateway}
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

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-8 mt-5 ">
              {img1 && (
                <div
                  className="portfolioDetailsImg"
                  style={{
                    transition: "background 3s ease",
                    backgroundImage: `url(${img1})`,
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              )}
              {img2 && (
                <div
                  className="portfolioDetailsImg"
                  style={{
                    transition: "background 3s ease",
                    backgroundImage: `url(${img2})`,
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              )}
              {img3 && (
                <div
                  className="portfolioDetailsImg"
                  style={{
                    transition: "background 3s ease",
                    backgroundImage: `url(${img3})`,
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              )}
              {img4 && (
                <div
                  className="portfolioDetailsImg"
                  style={{
                    transition: "background 3s ease",
                    backgroundImage: `url(${img4})`,
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              )}
              {img5 && (
                <div
                  className="portfolioDetailsImg"
                  style={{
                    transition: "background 3s ease",
                    backgroundImage: `url(${img5})`,
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              )}
              {img6 && (
                <div
                  className="portfolioDetailsImg"
                  style={{
                    transition: "background 3s ease",
                    backgroundImage: `url(${img6})`,
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              )}
              {img7 && (
                <div
                  className="portfolioDetailsImg"
                  style={{
                    transition: "background 3s ease",
                    backgroundImage: `url(${img7})`,
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              )}
              {img8 && (
                <div
                  className="portfolioDetailsImg"
                  style={{
                    transition: "background 3s ease",
                    backgroundImage: `url(${img8})`,
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              )}
              {img9 && (
                <div
                  className="portfolioDetailsImg"
                  style={{
                    transition: "background 3s ease",
                    backgroundImage: `url(${img9})`,
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              )}
              {img10 && (
                <div
                  className="portfolioDetailsImg"
                  style={{
                    transition: "background 3s ease",
                    backgroundImage: `url(${img10})`,
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              )}
              {img11 && (
                <div
                  className="portfolioDetailsImg"
                  style={{
                    transition: "background 3s ease",
                    backgroundImage: `url(${img11})`,
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              )}
              {img12 && (
                <div
                  className="portfolioDetailsImg"
                  style={{
                    transition: "background 3s ease",
                    backgroundImage: `url(${img12})`,
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              )}
              {img13 && (
                <div
                  className="portfolioDetailsImg"
                  style={{
                    transition: "background 3s ease",
                    backgroundImage: `url(${img13})`,
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              )}
              {img14 && (
                <div
                  className="portfolioDetailsImg"
                  style={{
                    transition: "background 3s ease",
                    backgroundImage: `url(${img14})`,
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              )}
              {img15 && (
                <div
                  className="portfolioDetailsImg"
                  style={{
                    transition: "background 3s ease",
                    backgroundImage: `url(${img15})`,
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              )}
              {img16 && (
                <div
                  className="portfolioDetailsImg"
                  style={{
                    transition: "background 3s ease",
                    backgroundImage: `url(${img16})`,
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              )}
              {img17 && (
                <div
                  className="portfolioDetailsImg"
                  style={{
                    transition: "background 3s ease",
                    backgroundImage: `url(${img17})`,
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              )}
              {img18 && (
                <div
                  className="portfolioDetailsImg"
                  style={{
                    transition: "background 3s ease",
                    backgroundImage: `url(${img18})`,
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              )}
              {img19 && (
                <div
                  className="portfolioDetailsImg"
                  style={{
                    transition: "background 3s ease",
                    backgroundImage: `url(${img19})`,
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetails;
