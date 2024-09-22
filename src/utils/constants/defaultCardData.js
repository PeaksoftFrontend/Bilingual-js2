import ImageInfoOne from "../../assets/images/info_image_1.png";
import ImageInfoTwo from "../../assets/images/info_image_2.png";
import ImageInfoThree from "../../assets/images/info_image_3.png";
import Globe from "../../assets/images/globe.png";

export const defaultCardData = [
  {
    imgSrc: ImageInfoOne,
    text: "Over 10,000 fee waivers for the Bilingual English Test are offered annually.",
  },
  {
    imgSrc: ImageInfoTwo,
    text: "Students from over 200 countries and territories have benefitted.",
  },
  {
    imgSrc: ImageInfoThree,
    text: "Eligible students can take the test with absolutely zero cost to them.",
  },
];
export const defaultImageSlider = [
  {
    title: "Unlock Your Language Potential!",
    description: "Master a new language with Rosetta Stone's proven methods.",
    img: Globe,
    id: `${new Date().getTime()}-${Math.floor(Math.random() * 1000)}`,
    bgColor: "#fe9001",
    color: "#fff",
  },
  {
    title: "Now's the Time to Start Learning!",
    description:
      "Join a global community of learners and achieve fluency faster.",
    img: Globe,
    id: `${new Date().getTime()}-${Math.floor(Math.random() * 1000)}`,
    bgColor: "#22272a",
    color: "#fe9001",
  },
  {
    title: "Explore New Languages with Ease!",
    description: "Discover the joy of speaking a new language with confidence.",
    img: Globe,
    id: `${new Date().getTime()}-${Math.floor(Math.random() * 1000)}`,
    bgColor: "#fe9001",
    color: "#fff",
  },
  {
    title: "Join Thousands of Successful Learners!",
    description:
      "Take your first step towards fluency today with our engaging platform.",
    img: Globe,
    id: `${new Date().getTime()}-${Math.floor(Math.random() * 1000)}`,
    bgColor: "#22272a",
    color: "#fe9001",
  },
  {
    title: "Experience Language Learning Like Never Before!",
    description:
      "Transform your language skills with interactive lessons and real-life practice.",
    img: Globe,
    id: `${new Date().getTime()}-${Math.floor(Math.random() * 1000)}`,
    bgColor: "#fe9001",
    color: "#fff",
  },
  {
    title: "Now's the Time to Start Learning!",
    description:
      "Join a global community of learners and achieve fluency faster.",
    img: Globe,
    id: `${new Date().getTime()}-${Math.floor(Math.random() * 1000)}`,
    bgColor: "#22272a",
    color: "#fe9001",
  },
];
