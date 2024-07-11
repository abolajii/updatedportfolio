import { Route, Routes } from "react-router-dom";

import { MainContainer } from "./components";
import React from "react";
import SingleProject from "./pages/projects/SingleProject";

const App = () => {
  const [autoScrollToProjectSection, setAutoScrollToProjectSection] =
    React.useState(false);

  const [activeLink, setActiveLink] = React.useState(1);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainContainer
            autoScrollToProjectSection={autoScrollToProjectSection}
            setActiveLink={setActiveLink}
            activeLink={activeLink}
            setAutoScrollToProjectSection={setAutoScrollToProjectSection}
          />
        }
      />
      <Route
        path="/projects/:id"
        element={
          <SingleProject
            setActiveLink={setActiveLink}
            activeLink={activeLink}
            setAutoScrollToProjectSection={setAutoScrollToProjectSection}
          />
        }
      />
    </Routes>
  );
};

export default App;
