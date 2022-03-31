import React, { useEffect } from "react";
import "./CardsContainer.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const CardsContainer = () => {
  const items = [
    {
      id: 1,
      title: "Competitions",
      url: "/competitions",
    },
    {
      id: 2,
      title: "Workshops",
      url: "/workshop",
    },
    {
      id: 3,
      title: "Fun Events",
      url: "/funevents",
    },
  ];

  useEffect(() => {
    setTimeout(function () {
      AOS.init();
    }, 1000);
  }, []);

  return (
    <div className="cards">
      <div className="cards-list">
        {items.map((item, i) => {
          return (
            <div className="card-li" key={item.id}>
              <img
                data-aos="zoom-in-right"
                className="card-img"
                src={item.img}
                alt=""
              />
              <Link
                className="card-title"
                to={item.url}
                rel="noopener noreferrer"
              >
                {item.title}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardsContainer;
