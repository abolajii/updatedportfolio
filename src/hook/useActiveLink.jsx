import React, { useCallback, useEffect, useRef, useState } from "react";

// Custom Hook
const useSidebar = (
  initialSidebarState = true,
  initialActiveLink = 1,
  numSections = 4
) => {
  const [isSidebarOpen, setSidebarOpen] = useState(initialSidebarState);
  const [activeLink, setActiveLink] = useState(initialActiveLink);

  const toggleSidebar = () => setSidebarOpen((prevState) => !prevState);
  const updateActiveLink = useCallback(
    (linkIndex) => setActiveLink(linkIndex),
    []
  );

  const sectionsRefs = useRef(new Array(numSections).fill(null));

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const activeSection = sectionsRefs.current.findIndex((sectionRef) => {
        console.log({
          value:
            sectionRef &&
            sectionRef.offsetTop - 100 <= scrollPosition &&
            sectionRef.offsetTop + sectionRef.offsetHeight - 100 >
              scrollPosition,
        });
        return (
          sectionRef &&
          sectionRef.offsetTop - 100 <= scrollPosition &&
          sectionRef.offsetTop + sectionRef.offsetHeight - 100 > scrollPosition
        );
      });

      if (activeSection !== -1) {
        updateActiveLink(activeSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionsRefs, updateActiveLink]);

  const handleScrollToSection = (id) => {
    const section = sectionsRefs.current[id];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return {
    isSidebarOpen,
    toggleSidebar,
    activeLink,
    sectionsRefs,
    updateActiveLink,
    handleScrollToSection,
  };
};

export default useSidebar;
