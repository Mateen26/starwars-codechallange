import React, { useEffect } from "react";
import { useDataContext } from "../../context/DataContext";
import tatooine from "../../assets/images/Tatooine.jpg";
import { useMediaQuery } from "react-responsive";
import "./Planets.css";
import { Spinner } from "react-bootstrap";
import { FetchData } from "../../helper/FetchData";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../helper/HelperFunctions";

const Planets = () => {
  const navigate = useNavigate();

  const {
    loadedData,
    loading,
    loadData,
    loadMore,
    setSelectedData,
    setSelectedCharacter,
    setLoading,
    setSelectedDetailsType,
  } = useDataContext();
  const imgURL = "https://starwars-visualguide.com/assets/img/planets/";
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    loadData("planets");
    scrollToTop();
    // eslint-disable-next-line
  }, []);

  const onImageError = (e) => {
    e.target.src = tatooine;
  };

  function getId(url) {
    return url.split("/")[url.split("/").length - 2];
  }

  const toggleHover = (event) => {
    if (isMobile) {
      event.currentTarget.classList.toggle("hover");
    }
  };

  const handleLoadMore = () => {
    if (loadedData.next) {
      loadMore(loadedData.next);
    }
  };

  const handleEntryClick = async (planets) => {
    try {
      setLoading(true);
      setSelectedDetailsType("planets");
      setSelectedCharacter(planets);
      const result = await FetchData(planets);
      if (result) {
        setSelectedData(result);
        navigate("/details");
        setLoading(false);
      } else {
        setLoading(false);
        setSelectedData([]);
      }
    } catch (error) {
      setLoading(false);
      console.log("Failed to fetch data:", error);
    }
  };

  return (
    <>
      <section id="starWars" className="pb-5">
        <div className="container">
          <div className="row">
            {loading ? (
              <>
                <div className="d-flex">
                  <p>Please wait...</p>
                  <Spinner
                    variant="warning"
                    className="ms-2"
                    animation="grow"
                  />
                </div>
              </>
            ) : loadedData.results && loadedData.results.length > 0 ? (
              loadedData.results.map((planets) => (
                <div key={planets.name} className="col-xs-12 col-sm-6 col-md-4">
                  <div
                    className="image-flip"
                    onTouchStart={toggleHover}
                    onClick={!isMobile ? toggleHover : undefined}
                  >
                    <div className="mainflip">
                      <div className="frontside">
                        <div className="card">
                          <div className="card-body text-center planets-card-body">
                            <p>
                              <img
                                className="planets-images"
                                src={
                                  planets?.name === "Tatooine"
                                    ? tatooine
                                    : `${imgURL + getId(planets.url)}.jpg`
                                }
                                onError={onImageError}
                                alt="planet"
                              />
                            </p>
                            <h4 className="card-title">{planets.name}</h4>
                            <p className="card-text">{planets.height}</p>
                          </div>
                        </div>
                      </div>
                      <div className="backside">
                        <div className="card">
                          <div className="card-body text-center">
                            <h4 className="card-title">{planets.name}</h4>
                            <p className="card-text">
                              Climate: {planets.climate}
                            </p>
                            <p className="card-text">
                              Diameter: {planets.diameter}
                            </p>
                            <p className="card-text">
                              Gravity: {planets.gravity}
                            </p>
                            <p className="card-text">
                              Rotation Period: {planets.rotation_period}
                            </p>
                            <button
                              className="btn-container-details"
                              onClick={() => handleEntryClick(planets)}
                            >
                              Details
                            </button>
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
            {!loading && loadedData.next && (
              <div className="col-12 text-center mt-3">
                <button className="btn-container" onClick={handleLoadMore}>
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Planets;
