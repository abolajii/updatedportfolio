import { FaNodeJs, FaReact } from "react-icons/fa";
/* eslint-disable react/prop-types */
import { Main, Sidebar } from "../../components";
import { useNavigate, useParams } from "react-router-dom";

import { BiLogoFirebase } from "react-icons/bi";
import React from "react";
import images from "../../constants/images";
import styled from "styled-components";

const projects = [
  {
    id: 1,
    onGoing: true,
    name: "Lovebird Dating Application",
    stacks: ["react", "node", "firebase"],
    link: "https://lovebirdz-app.web.app",
    images: {
      large: [
        { id: 1, name: images.lb1 },
        { id: 2, name: images.lb2 },
        { id: 3, name: images.lb3 },
        { id: 4, name: images.lb4 },
        { id: 5, name: images.lb5 },
        { id: 6, name: images.lb6 },
        { id: 7, name: images.lb7 },
        { id: 8, name: images.lb8 },
        { id: 9, name: images.lb9 },
      ],
      small: [
        { id: 1, name: images.mobilelb1 },
        { id: 2, name: images.mobilelb2 },
        { id: 3, name: images.mobilelb3 },
        { id: 4, name: images.mobilelb4 },
        { id: 5, name: images.mobilelb5 },
        { id: 6, name: images.mobilelb6 },
        { id: 7, name: images.mobilelb7 },
        { id: 8, name: images.mobilelb8 },
        { id: 9, name: images.mobilelb9 },
      ],
    },
    description:
      "Embark on a journey of love with Lovebirdz, your premier dating application designed for meaningful connections. Whether you're insearch of romance or eager to reconnect with loved ones or colleagues, Lovebirdz offers a vibrant space for forging relationships. With personalized profiles and cutting-edge matching algorithms, Lovebirdz elevates your online dating experience, making it a seamless quest for genuine connections. Uncover the joy of discovering your perfect match or rekindling connections on Lovebirdz, where every interaction is an opportunity for love to blossom. Join Lovebirdz today and let your heart guide you to meaningful connections in the world of digital romance.",
  },
  {
    id: 4,
    name: "FlatHub",
    stacks: ["react"],
    images: {
      large: [
        { id: 1, name: images.lm1 },
        { id: 2, name: images.lm2 },
        { id: 3, name: images.lm3 },
        { id: 4, name: images.lm4 },
        { id: 5, name: images.lm5 },
        { id: 6, name: images.lm6 },
        { id: 7, name: images.lm7 },
        { id: 8, name: images.lm8 },
        { id: 9, name: images.lm9 },
      ],
      small: [
        { id: 1, name: images.mobilelm1 },
        { id: 2, name: images.mobilelm2 },
        { id: 3, name: images.mobilelm3 },
        { id: 4, name: images.mobilelm4 },
        { id: 5, name: images.mobilelm5 },
        { id: 6, name: images.mobilelm6 },
        { id: 7, name: images.mobilelm7 },
        { id: 8, name: images.mobilelm8 },
        { id: 9, name: images.mobilelm9 },
      ],
    },
  },
  {
    id: 3,
    onGoing: true,
    link: "https://logisticsmanagerapp.web.app",
    name: "Logistics Manager",
    stacks: ["react", "node", "firebase"],
    images: {
      large: [
        { id: 1, name: images.lm1 },
        { id: 2, name: images.lm2 },
        { id: 3, name: images.lm3 },
        { id: 4, name: images.lm4 },
        { id: 5, name: images.lm5 },
        { id: 6, name: images.lm6 },
        { id: 7, name: images.lm7 },
        { id: 8, name: images.lm8 },
        { id: 9, name: images.lm9 },
      ],
      small: [
        { id: 1, name: images.mobilelm1 },
        { id: 2, name: images.mobilelm2 },
        { id: 3, name: images.mobilelm3 },
        { id: 4, name: images.mobilelm4 },
        { id: 5, name: images.mobilelm5 },
        { id: 6, name: images.mobilelm6 },
        { id: 7, name: images.mobilelm7 },
        { id: 8, name: images.mobilelm8 },
        { id: 9, name: images.mobilelm9 },
      ],
    },
    description:
      "Revolutionize your logistics management with Logistics Manager – the ultimate solution for seamless operations. Experience unmatched convenience as you effortlessly create single or multiple jobs, upload job details using Excel, and manage expenses with ease. Gain valuable insights with detailed daily, weekly, and monthly reports on your job activity, returns, and expenses. Our user-friendly interface empowers you to track the number of jobs, predict top clients for repeat jobs, and even create backdated jobs with full control. Stay on top of your business with activity charts showcasing monthly trends. Need quick communication? Send messages directly to clients. Transform your logistics experience with file uploads, comprehensive reports, and intuitive features. Elevate your business – simplify logistics with Logistics Manager!",
  },
  {
    id: 5,
    name: "One Card Nigeria",
    stacks: ["react", "firebase"],
    images: {
      large: [
        { id: 1, name: images.lm1 },
        { id: 2, name: images.lm2 },
        { id: 3, name: images.lm3 },
        { id: 4, name: images.lm4 },
        { id: 5, name: images.lm5 },
        { id: 6, name: images.lm6 },
        { id: 7, name: images.lm7 },
        { id: 8, name: images.lm8 },
        { id: 9, name: images.lm9 },
      ],
      small: [
        { id: 1, name: images.mobilelm1 },
        { id: 2, name: images.mobilelm2 },
        { id: 3, name: images.mobilelm3 },
        { id: 4, name: images.mobilelm4 },
        { id: 5, name: images.mobilelm5 },
        { id: 6, name: images.mobilelm6 },
        { id: 7, name: images.mobilelm7 },
        { id: 8, name: images.mobilelm8 },
        { id: 9, name: images.mobilelm9 },
      ],
    },
    description: "",
  },
  {
    id: 6,
    name: "Afriskaut",
    stacks: ["react"],
    images: {
      large: [
        { id: 1, name: images.lm1 },
        { id: 2, name: images.lm2 },
        { id: 3, name: images.lm3 },
        { id: 4, name: images.lm4 },
        { id: 5, name: images.lm5 },
        { id: 6, name: images.lm6 },
        { id: 7, name: images.lm7 },
        { id: 8, name: images.lm8 },
        { id: 9, name: images.lm9 },
      ],
      small: [
        { id: 1, name: images.mobilelm1 },
        { id: 2, name: images.mobilelm2 },
        { id: 3, name: images.mobilelm3 },
        { id: 4, name: images.mobilelm4 },
        { id: 5, name: images.mobilelm5 },
        { id: 6, name: images.mobilelm6 },
        { id: 7, name: images.mobilelm7 },
        { id: 8, name: images.mobilelm8 },
        { id: 9, name: images.mobilelm9 },
      ],
    },
  },
  {
    id: 7,
    name: "WestPay",
    stacks: ["react"],
    images: {
      large: [
        { id: 1, name: images.lm1 },
        { id: 2, name: images.lm2 },
        { id: 3, name: images.lm3 },
        { id: 4, name: images.lm4 },
        { id: 5, name: images.lm5 },
        { id: 6, name: images.lm6 },
        { id: 7, name: images.lm7 },
        { id: 8, name: images.lm8 },
        { id: 9, name: images.lm9 },
      ],
      small: [
        { id: 1, name: images.mobilelm1 },
        { id: 2, name: images.mobilelm2 },
        { id: 3, name: images.mobilelm3 },
        { id: 4, name: images.mobilelm4 },
        { id: 5, name: images.mobilelm5 },
        { id: 6, name: images.mobilelm6 },
        { id: 7, name: images.mobilelm7 },
        { id: 8, name: images.mobilelm8 },
        { id: 9, name: images.mobilelm9 },
      ],
    },
  },
  {
    id: 8,
    name: "Connect Nigeria",
    stacks: ["react"],
    images: {
      large: [
        { id: 1, name: images.lm1 },
        { id: 2, name: images.lm2 },
        { id: 3, name: images.lm3 },
        { id: 4, name: images.lm4 },
        { id: 5, name: images.lm5 },
        { id: 6, name: images.lm6 },
        { id: 7, name: images.lm7 },
        { id: 8, name: images.lm8 },
        { id: 9, name: images.lm9 },
      ],
      small: [
        { id: 1, name: images.mobilelm1 },
        { id: 2, name: images.mobilelm2 },
        { id: 3, name: images.mobilelm3 },
        { id: 4, name: images.mobilelm4 },
        { id: 5, name: images.mobilelm5 },
        { id: 6, name: images.mobilelm6 },
        { id: 7, name: images.mobilelm7 },
        { id: 8, name: images.mobilelm8 },
        { id: 9, name: images.mobilelm9 },
      ],
    },
  },
  {
    id: 2,
    onGoing: true,
    name: "Lovebird Admin Page",
    stacks: ["react", "node", "firebase"],
    images: {
      large: [
        { id: 1, name: images.adlb1 },
        { id: 2, name: images.adlb2 },
        { id: 3, name: images.adlb3 },
        { id: 4, name: images.adlb4 },
        { id: 5, name: images.adlb5 },
        { id: 6, name: images.adlb6 },
        { id: 7, name: images.adlb7 },
        { id: 8, name: images.adlb8 },
        { id: 9, name: images.adlb9 },
        { id: 10, name: images.adlb10 },
        { id: 11, name: images.adlb11 },
        { id: 12, name: images.adlb12 },
        { id: 13, name: images.adlb13 },
        { id: 14, name: images.adlb14 },
      ],
      small: [],
    },
  },
  {
    id: 9,
    name: "WhatsApp Clone",
    stacks: ["react", "node", "firebase"],
    images: {
      large: [
        { id: 1, name: images.lm1 },
        { id: 2, name: images.lm2 },
        { id: 3, name: images.lm3 },
        { id: 4, name: images.lm4 },
        { id: 5, name: images.lm5 },
        { id: 6, name: images.lm6 },
        { id: 7, name: images.lm7 },
        { id: 8, name: images.lm8 },
        { id: 9, name: images.lm9 },
      ],
      small: [
        { id: 1, name: images.mobilelm1 },
        { id: 2, name: images.mobilelm2 },
        { id: 3, name: images.mobilelm3 },
        { id: 4, name: images.mobilelm4 },
        { id: 5, name: images.mobilelm5 },
        { id: 6, name: images.mobilelm6 },
        { id: 7, name: images.mobilelm7 },
        { id: 8, name: images.mobilelm8 },
        { id: 9, name: images.mobilelm9 },
      ],
    },
  },
  {
    id: 10,
    name: "Twitter Clone",
    stacks: ["react", "node", "firebase"],
    images: {
      large: [
        { id: 1, name: images.lm1 },
        { id: 2, name: images.lm2 },
        { id: 3, name: images.lm3 },
        { id: 4, name: images.lm4 },
        { id: 5, name: images.lm5 },
        { id: 6, name: images.lm6 },
        { id: 7, name: images.lm7 },
        { id: 8, name: images.lm8 },
        { id: 9, name: images.lm9 },
      ],
      small: [
        { id: 1, name: images.mobilelm1 },
        { id: 2, name: images.mobilelm2 },
        { id: 3, name: images.mobilelm3 },
        { id: 4, name: images.mobilelm4 },
        { id: 5, name: images.mobilelm5 },
        { id: 6, name: images.mobilelm6 },
        { id: 7, name: images.mobilelm7 },
        { id: 8, name: images.mobilelm8 },
        { id: 9, name: images.mobilelm9 },
      ],
    },
  },
  {
    id: 11,
    name: "Notion Clone",
    stacks: ["react", "node", "firebase"],
    images: {
      large: [
        { id: 1, name: images.lm1 },
        { id: 2, name: images.lm2 },
        { id: 3, name: images.lm3 },
        { id: 4, name: images.lm4 },
        { id: 5, name: images.lm5 },
        { id: 6, name: images.lm6 },
        { id: 7, name: images.lm7 },
        { id: 8, name: images.lm8 },
        { id: 9, name: images.lm9 },
      ],
      small: [
        { id: 1, name: images.mobilelm1 },
        { id: 2, name: images.mobilelm2 },
        { id: 3, name: images.mobilelm3 },
        { id: 4, name: images.mobilelm4 },
        { id: 5, name: images.mobilelm5 },
        { id: 6, name: images.mobilelm6 },
        { id: 7, name: images.mobilelm7 },
        { id: 8, name: images.mobilelm8 },
        { id: 9, name: images.mobilelm9 },
      ],
    },
  },
  {
    id: 12,
    name: "LinkedIn Clone",
    stacks: ["react", "node", "firebase"],
    images: {
      large: [
        { id: 1, name: images.lm1 },
        { id: 2, name: images.lm2 },
        { id: 3, name: images.lm3 },
        { id: 4, name: images.lm4 },
        { id: 5, name: images.lm5 },
        { id: 6, name: images.lm6 },
        { id: 7, name: images.lm7 },
        { id: 8, name: images.lm8 },
        { id: 9, name: images.lm9 },
      ],
      small: [
        { id: 1, name: images.mobilelm1 },
        { id: 2, name: images.mobilelm2 },
        { id: 3, name: images.mobilelm3 },
        { id: 4, name: images.mobilelm4 },
        { id: 5, name: images.mobilelm5 },
        { id: 6, name: images.mobilelm6 },
        { id: 7, name: images.mobilelm7 },
        { id: 8, name: images.mobilelm8 },
        { id: 9, name: images.mobilelm9 },
      ],
    },
  },
  {
    id: 13,
    name: "Message Clone",
    stacks: ["react", "node", "firebase"],
    images: {
      large: [
        { id: 1, name: images.lm1 },
        { id: 2, name: images.lm2 },
        { id: 3, name: images.lm3 },
        { id: 4, name: images.lm4 },
        { id: 5, name: images.lm5 },
        { id: 6, name: images.lm6 },
        { id: 7, name: images.lm7 },
        { id: 8, name: images.lm8 },
        { id: 9, name: images.lm9 },
      ],
      small: [
        { id: 1, name: images.mobilelm1 },
        { id: 2, name: images.mobilelm2 },
        { id: 3, name: images.mobilelm3 },
        { id: 4, name: images.mobilelm4 },
        { id: 5, name: images.mobilelm5 },
        { id: 6, name: images.mobilelm6 },
        { id: 7, name: images.mobilelm7 },
        { id: 8, name: images.mobilelm8 },
        { id: 9, name: images.mobilelm9 },
      ],
    },
  },
];

const Container = styled.div`
  min-height: 100vh;
  transition: all 0.3s; /* Changed transition duration to a more reasonable value */
  background-color: #2d2d2d;
  color: rgb(204, 204, 204);

  .btn-link {
    font-size: 12px;
    text-decoration: underline;
  }

  .gap {
    gap: 7px;
  }

  .flex-wrap {
    display: flex;
    flex-wrap: wrap;
  }
  .gallery {
    margin-top: 10px;
    p {
      margin-bottom: 10px;
    }

    .item {
      overflow: hidden;
      transition: transform 0.5s ease;
    }
    .item:hover {
      transform: scale(1.06);
      transition: transform 0.2s ease, box-shadow 0.5s ease;
      box-shadow: 0px 4px 8px rgba(0, 255, 0, 0.07); // Green box shadow
    }

    .item:active {
      transform: scale(1.02);
    }
  }

  h2 {
    margin: 10px 0;
    background: linear-gradient(to left, #5d5d5d, #4caf50);
    color: transparent;
    width: fit-content;
    -webkit-background-clip: text;
    background-clip: text;
  }

  .gap {
    margin: 10px 0;
  }

  .inner {
    padding: 30px;
    flex-grow: 1;
  }
`;

const BigImage = styled.div`
  height: 250px;
  width: 400px;
  border-radius: 4px;
  margin-top: -40px;
  margin-left: 20px;
  user-select: none;
  overflow: hidden;

  img {
    height: 250px;
    border-radius: 4px;
    width: 100%;
    object-fit: contain;
  }
`;

const Images = styled.div`
  height: 90px;
  width: 120px;
  border-radius: 4px;
  border: 1px solid #3d3d3d;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const SmallPicture = styled.div`
  width: 80px;
  border-radius: 4px;
  user-select: none;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const CTAButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4caf50; /* Green background color */
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049; /* Darker green on hover */
  }

  &:active {
    background-color: #367935; /* Even darker green on click */
  }
`;

const Line = styled.div`
  background: linear-gradient(to left, #2d2d2d, #4caf50);
  height: 3px;
  width: 90px;
  border-radius: 1px;
  margin-bottom: 30px;
  margin-top: -8px;
`;

const iconMapping = {
  react: <FaReact size={20} color="#61dafb" />,
  node: <FaNodeJs size={20} color="#8CC84B" />,
  firebase: <BiLogoFirebase size={20} color="#FFCA28" />,
};

const SingleProject = ({
  setAutoScrollToProjectSection,
  setActiveLink,
  activeLink,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  const { id } = useParams();

  const navigate = useNavigate();
  const [active, setActive] = React.useState(1);
  const project = projects.find((each) => each.id == id);

  const image = project.images?.large[active - 1];
  const small = project.images?.small[active - 1];

  const handleOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = () => {
    setActiveLink(3);
    navigate("/");
    setAutoScrollToProjectSection(true);
  };

  return (
    <Container className="flex">
      <Sidebar
        single
        isOpen={isSidebarOpen}
        setActiveLink={setActiveLink}
        handleOpen={handleOpen}
        activeLink={activeLink}
        setAutoScrollToProjectSection={setAutoScrollToProjectSection}
      />
      <Main isOpen={isSidebarOpen}>
        <div className="inner">
          <button className="btn btn-link" onClick={handleLinkClick}>
            Back to Projects
          </button>

          <h2>{project?.name}</h2>
          <Line />
          <div className="flex ai-center">
            <div className="flex flex-1 flex-col">
              <p>{project.description}</p>
              <div className="flex gap">
                {project.stacks.map((stack) => (
                  <div key={stack}>{iconMapping[stack]}</div>
                ))}
              </div>
            </div>
            <div className="flex flex-1 center sm-gap">
              {image && (
                <BigImage>
                  <img src={image?.name} />
                </BigImage>
              )}
              {small && (
                <SmallPicture>
                  <div>
                    <img src={small?.name} />
                  </div>
                </SmallPicture>
              )}
            </div>
          </div>
          <div className="gallery">
            <p>Gallery</p>
            <div className="flex gap flex-wrap">
              {project.images.large?.map((each) => (
                <Images
                  key={each}
                  className="cursor item"
                  onClick={() => {
                    setActive(each.id);
                  }}
                >
                  <img src={each?.name} />
                </Images>
              ))}
            </div>
          </div>

          <div className="btn">
            <CTAButton>
              <a href={project.link} target="_blank" rel="noreferrer">
                VIEW SITE
              </a>
            </CTAButton>
          </div>
        </div>
      </Main>
      {/* <Main
        isOpen={isSidebarOpen}
        sectionsRefs={sectionsRefs}
        setActiveLink={setActiveLink}
      /> */}
    </Container>
  );
};

export default SingleProject;
