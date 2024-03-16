import React, { useEffect } from "react";
import { useDataContext } from "../../context/DataContext";
import "./People.css";
import { useMediaQuery } from "react-responsive";
const People = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { loadedData, loading, loadData } = useDataContext();
  const imgURL = "https://starwars-visualguide.com/assets/img/characters/";
  useEffect(() => {
    loadData("people");
    // eslint-disable-next-line
  }, []);

  const toggleHover = (event) => {
    if (isMobile) {
      event.currentTarget.classList.toggle("hover");
    }
  };

  function getId(url) {
    return url.split("/")[url.split("/").length - 2];
  }

  return (
    <>
      <section id="starWars" className="pb-5">
        <div className="container">
          <div className="row">
            {loading ? (
              <p>Loading...</p>
            ) : loadedData.results && loadedData.results.length > 0 ? (
              loadedData.results.map((person) => (
                <div key={person.name} className="col-xs-12 col-sm-6 col-md-4">
                  <div
                    className="image-flip"
                    onTouchStart={toggleHover}
                    onClick={!isMobile ? toggleHover : undefined}
                  >
                    <div className="mainflip">
                      <div className="frontside">
                        <div className="card">
                          <div className="card-body text-center">
                            <p className="mt-5">
                              <img
                                className="img-fluid"
                                src={`${imgURL + getId(person.url)}.jpg`}
                                alt="people"
                              />
                            </p>
                            <h4 className="card-title">{person.name}</h4>
                            <p className="card-text">{person.height}</p>
                          </div>
                        </div>
                      </div>
                      <div className="backside">
                        <div className="card">
                          <div className="card-body text-center">
                            <h4 className="card-title">{person.name}</h4>
                            <p className="card-text">Height: {person.height}</p>
                            <p className="card-text">
                              Eye Color: {person.eye_color}
                            </p>
                            <p className="card-text">Gender: {person.gender}</p>
                            <p className="card-text">Mass: {person.mass}</p>
                            <p className="card-text">
                              Skin Color: {person.skin_color}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No data available.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default People;
