import React from "react";
import { Route, Link, Outlet, Routes } from "react-router-dom";
import HomePage from "../modules/homepage/HomePage";
import People from "../modules/people/People";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<HomePage />} />
        <Route path="people" element={<People />} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );

  function NoMatch() {
    return (
      <div className="d-flex justify-content-center ms-5">
        <div style={{ marginTop: "15%", textAlign: "center" }}>
          <h2>404 Page not found!</h2>
          <p style={{ fontSize: "1.3rem", marginTop: "18px" }}>
            <Link to="/">Go to the Home page</Link>
          </p>
        </div>
      </div>
    );
  }
};

export default MainRoutes;
