/* eslint-disable react/prop-types */
import Main from "./Main";
import React from "react";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  transition: all 0.3s; /* Changed transition duration to a more reasonable value */
  background-color: #2d2d2d;
`;

const MainContainer = ({
  autoScrollToProjectSection,
  setAutoScrollToProjectSection,
  activeLink,
  setActiveLink,
}) => {
  //
  const [isSidebarOpen, setSidebarOpen] = React.useState(true);

  const sectionsRefs = React.useRef([]);

  React.useEffect(() => {
    //
    if (autoScrollToProjectSection) {
      setActiveLink(activeLink);
      handleScrollIntoView(activeLink);
      setAutoScrollToProjectSection(false);
    }
  }, [
    autoScrollToProjectSection,
    activeLink,
    setAutoScrollToProjectSection,
    setActiveLink,
  ]);

  const handleOpen = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleScrollIntoView = (id) => {
    const section = sectionsRefs.current[id];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container className="flex">
      <Sidebar
        isOpen={isSidebarOpen}
        handleOpen={handleOpen}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        handleScrollIntoView={handleScrollIntoView}
      />
      <Main
        isOpen={isSidebarOpen}
        sectionsRefs={sectionsRefs}
        setActiveLink={setActiveLink}
      />
    </Container>
  );
};

export default MainContainer;
