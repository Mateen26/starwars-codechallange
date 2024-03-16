import React, { useEffect } from "react";
import { useDataContext } from "../../context/DataContext";
import "./People.css";
const People = () => {
  const { loadedData, loading, loadData } = useDataContext();
  const imgURL = "https://starwars-visualguide.com/assets/img/characters/";
  useEffect(() => {
    loadData("people");
  }, []);

  function getId(url) {
    return url.split("/")[url.split("/").length - 2];
  }

  return (
    <>
      <section id="starWars" class="pb-5">
        <div class="container">
          <div className="row">
            {loading ? (
              <p>Loading...</p>
            ) : loadedData.results && loadedData.results.length > 0 ? (
              loadedData.results.map((person) => (
                <div key={person.name} className="col-xs-12 col-sm-6 col-md-4">
                  <div
                    className="image-flip"
                    onTouchStart="this.classList.toggle('hover');"
                  >
                    <div className="mainflip">
                      <div className="frontside">
                        <div className="card">
                          <div className="card-body text-center">
                            <p className="mt-5">
                              <img
                                className="img-fluid"
                                src={`${imgURL + getId(person.url)}.jpg`}
                                alt="card image"
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
