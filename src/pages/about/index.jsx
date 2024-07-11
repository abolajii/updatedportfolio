import Profile from "./Profile";
// import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 50px;
  margin: 0 auto;

  padding: 50px;
  color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
  .gap {
    gap: 10px;
  }

  .details {
    width: 80%;
  }
`;

const Heading = styled.h2`
  color: #4caf50;
  font-size: 24px;
  font-weight: bold;
`;

const Line = styled.div`
  background: linear-gradient(to left, #2d2d2d, #4caf50);
  height: 3px;
  width: 80px;
  border-radius: 1px;
  margin-bottom: 30px;
`;

const Paragraph = styled.p`
  line-height: 1.5;
  font-size: 15px;
  max-width: 70%;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const About = () => {
  return (
    <Container className="w-1000 auto">
      <Heading>About Me</Heading>
      <Line />
      <div className="flex gap details">
        <div className="flex flex-col">
          <Paragraph>
            Computer Science graduate with five years of full-stack development
            experience, specializing in HTML 5, CSS, JavaScript, React JS, React
            Native, Node JS, and MongoDB.
          </Paragraph>

          <Paragraph>
            Committed to delivering high-quality solutions and passionate about
            staying abreast of emerging technologies. Thrives in dynamic and
            collaborative environments, where innovation is essential for
            success.
          </Paragraph>

          <Paragraph>
            Versatile full-stack developer adept at front-end development using
            React JS, server-side scripting with Node JS, and database
            management with MongoDB. Proactive learner and adapter to new
            technologies.
          </Paragraph>

          <Paragraph>
            Excited about creating seamless and integrated solutions across the
            entire software stack. Finds satisfaction in translating complex
            requirements into user-friendly interfaces, optimizing server-side
            performance, and ensuring robust database management.
          </Paragraph>
        </div>
        <Profile />
      </div>
    </Container>
  );
};

export default About;
