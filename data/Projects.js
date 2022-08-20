import Project from "../public/Images/assests/nextfood.png";
import Project1 from "../public/Images/assests/ishortner.png";
import Project2 from "../public/Images/assests/wpost.png";
import Project3 from "../public/Images/assests/xdome.png";
import Project4 from "../public/Images/assests/vitriol.png";
import Project5 from "../public/Images/assests/fichta.png";
import Drophq from "../public/Images/assests/drophq.png";
import Credizest from "../public/Images/assests/credizest.png";

export const AllProjectData = [
  {
    id: 10,
    ProjectName: "Drop-hq  ",
    ProjectTechUsed: ["Next Js", "SCSS", "Redux ", "Vercel", "Node js"],
    ProjectDescription: "A Food Ordering and delivery service.",
    ProjectImage: Drophq,
    ProjectUrl: "https://drop-hq.vercel.app/",
    order: 0,
  },
  {
    id: 1,
    ProjectName: "!Vitriol  ",
    ProjectTechUsed: [
      "Next Js",
      "styled-Components",
      "vercel",
      "ethers js",
      "MetaMask",
    ],
    ProjectDescription:
      "A web3 charity dapp Website template. Awesome UI , connected to ethers and blockchain.",
    ProjectImage: Project4,
    ProjectUrl: "https://vitriol-neon.vercel.app/",
    order: 1,
  },
  {
    id: 5,
    ProjectName: "Credizest ",
    ProjectTechUsed: ["Next Js", "styled-Components", "Vercel"],
    ProjectDescription: "Credizest is a Fintech landing page template.",
    ProjectImage: Credizest,
    ProjectUrl: "https://credizestx.vercel.app/",
    order: 0,
  },
  {
    id: 2,
    ProjectName: "Fichta",
    ProjectTechUsed: [
      "Next Js",
      "styled-Components",
      "Redux toolkit",
      "vercel",
      "MetaMask",
    ],
    ProjectDescription:
      "A web3 Ecommerce dapp for grocery, connected to ethers and blockchain. all payment is done in crypto currency. ",
    ProjectImage: Project5,
    ProjectUrl: "https://fichta-mart.vercel.app/",
    order: 1,
  },
  {
    id: 3,
    ProjectName: "NextFood Template",
    ProjectTechUsed: ["React Js", "Next js", "Styled-Components", "Vercel"],
    ProjectDescription:
      "A web app for Food Website template.  this project includes all the features of the website.",
    ProjectImage: Project,
    ProjectUrl: "https://next-food-app-nine.vercel.app/",
    order: 0,
  },
  {
    id: 4,
    ProjectName: "Ishortner",
    ProjectTechUsed: ["React Js", "styled-Components", "Netlify"],
    ProjectDescription:
      "A web app for url link shortner to give easy and memorable url to your website.",
    ProjectImage: Project1,
    ProjectUrl: "https://ishortner.netlify.app/",
    order: 1,
  },

  {
    id: 6,
    ProjectName: "Xdome Todo Application ",
    ProjectTechUsed: [
      "Next Js",
      "styled-Components",
      "Redux toolkit",
      "vercel",
    ],
    ProjectDescription:
      "A TODO web app managed with redux toolkit, slick design and well structured components.",
    ProjectImage: Project3,
    ProjectUrl: "https://xdome-todo.vercel.app/",
    order: 1,
  },
];

export default AllProjectData;
