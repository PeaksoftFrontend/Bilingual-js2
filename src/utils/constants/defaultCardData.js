import ImageInfoOne from "../../assets/images/info_image_1.png";
import ImageInfoTwo from "../../assets/images/info_image_2.png";
import ImageInfoThree from "../../assets/images/info_image_3.png";
import Globe from "../../assets/images/globe.png";
import Profile1 from "../../assets/images/uiProfile1.png";
import Profile2 from "../../assets/images/uiProfile2.png";
import Profile3 from "../../assets/images/uiProfile3.png";

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

export const feedbackData = [
  {
    id: 1,
    name: "Albek Atabekov",
    feedback:
      "Great way to learn a language. Fun, interactive, and engaging. I am enjoying the course immensely and would recommend it to anyone who wishes to learn a second language",
    img: Profile1,
  },
  {
    id: 2,
    name: "Alina Begishova",
    feedback:
      "Bilingual has helped me to get a good grasp of the language in a fun and challenging way. I enjoy the dialogues and scenarios, which include helpful phrases that can be used in various situations.",
    img: Profile2,
  },
  {
    id: 3,
    name: "Minura Telegenova",
    feedback:
      "I have tried other language apps and found them boring but with Bilingual, it is easy and fun to practice every day.",
    img: Profile3,
  },
  {
    id: 4,
    name: "Albek Atabekov",
    feedback:
      "Great way to learn a language. Fun, interactive, and engaging. I am enjoying the course immensely and would recommend it to anyone who wishes to learn a second language",
    img: Profile1,
  },
  {
    id: 5,
    name: "Alina Begishova",
    feedback: "Bilingual has helped me get a good grasp...",
    img: Profile2,
  },
  {
    id: 6,
    name: "Minura Telegenova",
    feedback: "I have tried other language apps... easy to practice.",
    img: Profile3,
  },
];
