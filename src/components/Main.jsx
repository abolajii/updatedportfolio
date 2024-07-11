import { About, Contact, Home, Projects } from "../pages";

/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  margin-left: ${(props) => (props.isOpen ? "180px" : "90px")};
  padding: 10px;
  flex-grow: 1;
  overflow-y: auto;
  transition: margin-left 0.3s;
`;

const PageContainer = styled.div`
  padding: 10px;
`;

const Main = ({ isOpen, sectionsRefs, setActiveLink, children }) => {
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // // Calculate which section is currently in view
      const activeSection = sectionsRefs.current.findIndex(
        (sectionRef) =>
          sectionRef &&
          sectionRef.offsetTop - 100 <= scrollPosition &&
          sectionRef.offsetTop + sectionRef.offsetHeight - 100 > scrollPosition
      );

      // // Update the active link if the section is found
      if (activeSection !== -1) {
        setActiveLink(activeSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionsRefs, setActiveLink]);

  if (children) {
    return <MainContainer isOpen={isOpen}>{children}</MainContainer>;
  }

  return (
    <MainContainer isOpen={isOpen}>
      <PageContainer ref={(el) => (sectionsRefs.current[1] = el)} id="home">
        <Home />
      </PageContainer>
      <PageContainer ref={(el) => (sectionsRefs.current[2] = el)} id="about">
        <About />
      </PageContainer>
      <PageContainer ref={(el) => (sectionsRefs.current[3] = el)} id="projects">
        <Projects />
      </PageContainer>
      <PageContainer ref={(el) => (sectionsRefs.current[4] = el)} id="contact">
        <Contact />
      </PageContainer>
    </MainContainer>
  );
};

export default Main;
