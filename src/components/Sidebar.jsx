/* eslint-disable react/prop-types */
import { FaUserTie } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { MdContactPage } from "react-icons/md";
import { MdWorkHistory } from "react-icons/md";
import React from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { RiMenu3Fill } from "react-icons/ri";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SidebarContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: ${(props) => (props.isOpen ? "200px" : "110px")};
  border-right: 1px solid rgba(255, 255, 255, 0.03);
  transition: all 0.3s;
  padding: 10px;
  color: white;
  display: flex;
  flex-direction: column;
`;

const SidebarLink = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  margin-left: 30px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  color: ${(props) =>
    props.isActive ? "rgb(76, 175, 80)" : "rgba(0, 255, 0, 0.3)"};

  background: ${(props) =>
    props.isActive ? "rgba(66, 107, 105, 0.15)" : "transparent"};
  margin-top: 5px;

  & > span {
    margin-left: 10px;
    font-size: 15px;
    text-transform: capitalize;
    display: ${(props) => (props.isOpen ? "inline" : "none")};
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    transform: ${(props) =>
      props.isOpen ? "translateX(0)" : "translateX(-10px)"};

    transition: opacity 0.3s, transform 0.3s;
    display: inline-block;
  }

  &:hover {
    background: rgba(66, 107, 105, 0.15);
  }
`;

const HamBurgerContainer = styled.div`
  margin-bottom: 30px;
`;

const links = [
  {
    id: 1,
    title: "Home",
    icon: <IoIosHome />,
  },
  { id: 2, title: "About", icon: <FaUserTie /> },
  { id: 3, title: "Projects", icon: <MdWorkHistory /> },
  { id: 4, title: "Contact", icon: <MdContactPage /> },
];

const Sidebar = ({
  isOpen,
  handleOpen,
  activeLink,
  setActiveLink,
  handleScrollIntoView,
  single,
  setAutoScrollToProjectSection,
}) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (single) {
      setActiveLink(3);
    }
  }, [single, setActiveLink]);

  const handleLinkClick = (id) => {
    setActiveLink(id);
    if (single) {
      navigate("/");
      setAutoScrollToProjectSection(true);
    } else {
      handleScrollIntoView(id);
    }
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <HamBurgerContainer
        className="flex justify-end cursor-pointer"
        onClick={handleOpen}
      >
        {isOpen ? (
          <RiMenu3Fill size={16} color="rgb(76, 175, 80)" />
        ) : (
          <RiMenu2Fill size={16} color="rgb(76, 175, 80)" />
        )}
      </HamBurgerContainer>
      {links.map((link) => (
        <SidebarLink
          title={link.title}
          key={link.id}
          isOpen={isOpen}
          isActive={link.id === activeLink}
          onClick={() => handleLinkClick(link.id)}
        >
          <div>{React.cloneElement(link.icon, { size: 18 })}</div>
          <span>{link.title}</span>
        </SidebarLink>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
