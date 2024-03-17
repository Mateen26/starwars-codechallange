import React, { useEffect } from "react";
import { useDataContext } from "../../context/DataContext";
import starDestroyer from "../../assets/images/Star-Destroyer.jpeg";
import { useMediaQuery } from "react-responsive";
import { Spinner } from "react-bootstrap";
import { FetchData } from "../../helper/FetchData";
import { useNavigate } from "react-router-dom";

const StarShips = () => {
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
  const imgURL = "https://starwars-visualguide.com/assets/img/starships/";
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    loadData("starships");
    // eslint-disable-next-line
  }, []);

  const onImageError = (e) => {
    e.target.src = starDestroyer;
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

  const handleEntryClick = async (starShips) => {
    try {
      setLoading(true);
      setSelectedDetailsType("starships");
      setSelectedCharacter(starShips);
      const result = await FetchData(starShips);
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
              loadedData.results.map((starShips) => (
                <div
                  key={starShips?.name}
                  className="col-xs-12 col-sm-6 col-md-4"
                >
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
                                src={`${imgURL + getId(starShips?.url)}.jpg`}
                                onError={onImageError}
                                alt="planet"
                              />
                            </p>
                            <h4 className="card-title">{starShips?.name}</h4>
                            <p className="card-text">{starShips?.height}</p>
                          </div>
                        </div>
                      </div>
                      <div className="backside">
                        <div className="card">
                          <div className="card-body text-center">
                            <h4 className="card-title">{starShips?.name}</h4>
                            <p className="card-text">Crew: {starShips?.crew}</p>
                            <p className="card-text">
                              Cargo Capacity: {starShips?.cargo_capacity}
                            </p>
                            <p className="card-text">
                              consumables: {starShips?.consumables}
                            </p>
                            <p className="card-text">
                              Cost In Credits: {starShips?.cost_in_credits}
                            </p>
                            <button
                              className="btn-container-details"
                              onClick={() => handleEntryClick(starShips)}
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

export default StarShips;
