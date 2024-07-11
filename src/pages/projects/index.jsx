import { FaNodeJs, FaReact } from "react-icons/fa";

import { BiLogoFirebase } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Loading } from "../../components";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  padding: 20px 50px;

  color: rgb(204, 204, 204);

  h2 {
    font-size: 24px;
    font-weight: bold;
  }

  .gap {
    gap: 10px;
  }

  .sm-gap {
    gap: 5px;
  }
`;

const Heading = styled.h2`
  color: #4caf50;
  margin-top: 30px;
`;

const Line = styled.div`
  background: linear-gradient(to left, #2d2d2d, #4caf50);
  height: 3px;
  width: 100px;
  border-radius: 1px;
  margin-bottom: 30px;
`;

const Paragraph = styled.p`
  line-height: 1.5;
  margin-top: 30px;
`;

const ProjectList = styled.ul`
  flex-wrap: wrap;
  margin-top: 20px;
  .project-name {
    margin: 5px 0;
    font-size: 15px;
    font-weight: 500;
  }
`;

const ProjectItem = styled.li`
  height: 200px;
  border-radius: 5px;
  background-color: #3d3d3d;
  width: 200px;
  position: relative;
  overflow: hidden;
  a {
    text-decoration: none;
  }

  &:hover {
    transform: scale(1.03);
  }
`;

const Ongoing = styled.div`
  height: 40px;
  border-radius: 0px 0px 2px 2px;
  background-color: rgb(230, 97, 153);
  position: absolute;
  right: 20px;
  width: 20px;
`;

const Tag = styled.div`
  background-color: rgb(230, 97, 153);
  width: 10px;
  height: 2px;
  border-radius: 3px;
`;

const iconMapping = {
  react: <FaReact size={20} color="#61dafb" />,
  node: <FaNodeJs size={20} color="#8CC84B" />,
  firebase: <BiLogoFirebase size={20} color="#FFCA28" />,
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      onGoing: true,
      name: "Lovebird Dating Application",
      stacks: ["react", "node", "firebase"],
    },
    { id: 4, name: "FlatHub", stacks: ["react"] },
    {
      id: 3,
      onGoing: true,
      name: "Logistics Manager",
      stacks: ["react", "node", "firebase"],
    },
    {
      id: 5,
      name: "One Card Nigeria",
      stacks: ["react", "firebase"],
    },
    { id: 6, name: "Afriskaut", stacks: ["react"] },
    { id: 7, name: "WestPay", stacks: ["react"] },
    { id: 8, name: "Connect Nigeria", stacks: ["react"] },
    {
      id: 2,
      onGoing: true,
      name: "Lovebird Admin Page",
      stacks: ["react", "node", "firebase"],
    },
  ];

  const clones = [
    { id: 9, name: "WhatsApp Clone", stacks: ["react", "node", "firebase"] },
    { id: 10, name: "Twitter Clone", stacks: ["react", "node", "firebase"] },
    { id: 11, name: "Notion Clone", stacks: ["react", "node", "firebase"] },
    { id: 12, name: "LinkedIn Clone", stacks: ["react", "node", "firebase"] },
    { id: 13, name: "Message Clone", stacks: ["react", "node", "firebase"] },
  ];

  return (
    <Container className="w-1000 auto">
      <Heading>My Projects</Heading>
      <Line />
      <Paragraph>Below are some of my projects</Paragraph>
      <div className="flex items-center sm-gap">
        <Tag />
        <div className="on-going">On going</div>
      </div>
      <ProjectList className="flex gap cursor">
        {projects.map((each, index) => (
          <div key={index} className="flex flex-col mb-3">
            <Link to={`/projects/${each.id}`}>
              <ProjectItem>
                {each?.onGoing && <Ongoing />}
                {/* <Loading /> */}
              </ProjectItem>
            </Link>
            <p className="project-name">{each.name}</p>
            <div className="flex sm-gap">
              {each.stacks.map((stack) => (
                <div key={stack}>{iconMapping[stack]}</div>
              ))}
            </div>
          </div>
        ))}
      </ProjectList>
      <Paragraph>Below are some of real-life application clones</Paragraph>
      <ProjectList className="flex gap cursor">
        {clones.map((each, index) => (
          <div key={index} className="flex flex-col">
            <ProjectItem>{each?.onGoing && <Ongoing />}</ProjectItem>
            <p className="project-name">{each.name}</p>
            <div className="flex sm-gap">
              {each.stacks.map((stack) => (
                <div key={stack}>{iconMapping[stack]}</div>
              ))}
            </div>
          </div>
        ))}
      </ProjectList>
    </Container>
  );
};

export default Projects;
