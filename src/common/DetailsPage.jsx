import React, { useEffect } from "react";
import { useDataContext } from "../context/DataContext";
import "./DetailsPage.css";
import { SkipBackwardCircleFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../helper/HelperFunctions";
import { Spinner } from "react-bootstrap";

const DetailsPage = () => {
  const { selectedData, selectedCharacter, loading, selectedDetailsType } =
    useDataContext();
  console.log("🚀 ~ selectedData:", selectedData);
  console.log("🚀 ~ selectedEntry:", selectedCharacter);
  const navigate = useNavigate();

  const imgURL = `https://starwars-visualguide.com/assets/img/${selectedDetailsType}/`;

  function getId(url) {
    return url.split("/")[url.split("/").length - 2];
  }

  const handleBack = () => {
    navigate(`/${selectedDetailsType}`);
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div>
      {loading ? (
        <>
          <div className="d-flex">
            <p>Please wait...</p>
            <Spinner variant="warning" className="ms-2" animation="grow" />
          </div>
        </>
      ) : (
        selectedCharacter && (
          <div class="container mt-5 mb-5">
            <div class="row">
              <div class="profile-nav col-md-3">
                <div class="panel">
                  <div class="user-heading">
                    <a href="/">
                      <img
                        src={`${imgURL + getId(selectedCharacter.url)}.jpg`}
                        alt="people"
                      />
                    </a>
                    <h1>{selectedCharacter?.name}</h1>
                    {selectedDetailsType === "planets" ? (
                      <p>Population {selectedCharacter?.population}</p>
                    ) : selectedDetailsType === "characters" ? (
                      <p>D.O.B {selectedCharacter?.birth_year}</p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <div class="profile-info col-md-9">
                <div class="">
                  <div class="bio-graph-heading profile-data-heading ">
                    <div className="back-button" onClick={handleBack}>
                      <SkipBackwardCircleFill size={20} /> Go Back
                    </div>
                    Details About {selectedCharacter?.name}
                  </div>
                  <div class="panel-body bio-graph-info card card-background">
                    <div class="row ms-3 mt-2">
                      <div class="bio-row">
                        <p>
                          <span className="profile-data-heading">Name </span>:{" "}
                          {selectedCharacter?.name}
                        </p>
                      </div>
                      {selectedDetailsType === "planets" ? (
                        <p>
                          <span className="styling-ship-details text-start">
                            <b>Climate:</b> {selectedCharacter.climate}&nbsp;{" "}
                            <b>Diameter:</b> {selectedCharacter.diameter} <br />
                            <b>Gravity:</b> {selectedCharacter.gravity}&nbsp;{" "}
                            <b>Orbital period:</b>{" "}
                            {selectedCharacter.orbital_period}
                            <br />
                            <b>Rotation Period:</b>{" "}
                            {selectedCharacter.rotation_period}&nbsp;{" "}
                            <b>Surface Water:</b>{" "}
                            {selectedCharacter.surface_water}
                            <br />
                            <b>Terrain:</b> {selectedCharacter.terrain}
                            <br />
                          </span>
                        </p>
                      ) : selectedDetailsType === "characters" ? (
                        <div class="bio-row">
                          <p>
                            <span className="profile-data-heading">
                              Height{" "}
                            </span>
                            : {selectedCharacter?.height}
                          </p>
                        </div>
                      ) : (
                        ""
                      )}

                      <div class="bio-row">
                        <p>
                          <span className="profile-data-heading">
                            Total Movies{" "}
                          </span>
                          : {selectedData?.filmsData?.length}
                        </p>
                      </div>
                      <div className="bio-row">
                        <p>
                          <span className="profile-data-heading">
                            Movies Names
                          </span>
                          :{" "}
                          {selectedData?.filmsData?.map((e, index) => (
                            <span key={e.title}>
                              {e.title}
                              {index !== selectedData.filmsData.length - 1 &&
                                ", "}
                            </span>
                          ))}
                        </p>
                      </div>

                      <div class="bio-row">
                        <p>
                          <span className="profile-data-heading">
                            Directors Of Each Movie{" "}
                          </span>
                          :{" "}
                          {selectedData?.filmsData?.map((e, index) => (
                            <span key={index}>
                              {e.director}
                              {index !== selectedData.filmsData.length - 1 &&
                                ", "}
                            </span>
                          ))}
                        </p>
                      </div>
                      <div class="bio-row">
                        <p>
                          <span className="profile-data-heading">
                            Producers Of Each Movie{" "}
                          </span>
                          :{" "}
                          {selectedData?.filmsData?.map((e, index) => (
                            <span key={index}>
                              {e.producer}
                              {index !== selectedData.filmsData.length - 1 &&
                                ", "}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="panel-body bio-graph-info mt-5 card card-background">
                    <div class="row ms-3">
                      {selectedDetailsType === "characters" ? (
                        <div class="bio-row">
                          <p>
                            <span className="profile-data-heading">
                              Total Starships{" "}
                            </span>
                            : {selectedCharacter?.starships?.length}
                          </p>
                        </div>
                      ) : (
                        ""
                      )}
                      {selectedDetailsType === "characters" ? (
                        <>
                          <div class="bio-row">
                            <span className="profile-data-heading">
                              {selectedCharacter?.starships?.length > 0 &&
                                "Ships Details :"}
                            </span>
                            <p>
                              {selectedData?.shipData?.map((e, index) => (
                                <span
                                  key={e.name}
                                  className="styling-ship-details"
                                >
                                  <b>Name:</b> {e.name}&nbsp; <br />
                                  <b>Cargo Capacity:</b> {e.cargo_capacity}{" "}
                                  <br />
                                  <b>Consumables:</b> {e.consumables}
                                  <br />
                                  <b>Cost_in_credits:</b> {e.cost_in_credits}
                                  <br />
                                  <b>Crew:</b> {e.crew}
                                  <br />
                                  <b>Hyperdrive_rating:</b>{" "}
                                  {e.hyperdrive_rating}
                                  <br />
                                  <b>Length:</b> {e.length}
                                  <br />
                                  <b>Manufacturer:</b> {e.manufacturer}
                                  <br />
                                  <b>Max Atmosphering Speed:</b>{" "}
                                  {e.max_atmosphering_speed}
                                  <br />
                                  <b>Model:</b> {e.model}
                                  <br />
                                  <b>Passengers:</b> {e.passengers}
                                  <br />
                                  <b>Starship Class:</b> {e.starship_class}
                                  <br />
                                </span>
                              ))}
                            </p>
                          </div>
                        </>
                      ) : selectedDetailsType === "planets" ? (
                        <div class="bio-row">
                          <span className="profile-data-heading">
                            {selectedCharacter?.films?.length > 0 &&
                              "Movies Details :"}
                          </span>
                          <p>
                            {selectedData?.filmsData?.map((e, index) => (
                              <span
                                key={e.title}
                                className="styling-ship-details"
                              >
                                <b>Name:</b> {e.title}&nbsp; <br />
                                <b>director:</b> {e.director} <br />
                                <b>release_date:</b> {e.release_date}
                                <br />
                              </span>
                            ))}
                          </p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default DetailsPage;
