import assesibleImage from "../../assets/images/accessible.png";
import searchImage from "../../assets/images/search.png";
import voiceImage from "../../assets/images/voice.png";
import adminImage from "../../assets/images/tutoring.png";
///Our Team Images
import firstUser from "../../assets/images/user1.png";
import secondUser from "../../assets/images/user2.png";
import thirdUser from "../../assets/images/user3.png";
import fourthUser from "../../assets/images/user4.png";
import fifthUser from "../../assets/images/user5.png";
import sixthUser from "../../assets/images/user6.png";
///Slider
import adama from "../../assets/images/adama.png";
import basf from "../../assets/images/BASF.png";
import deklab from "../../assets/images/declab.png";
import lidea from "../../assets/images/lidea.png";
//video data
import videoo from "../../assets/video/1110710_Soap-bubbles_Breathing_1280x720.mp4";

import selectImage from "../../assets/images/ImageSelect.png";
//data evelute
export const dataTwo = {
  id: 2,
  Datesubmission: "12.12.2022  16:45",
  FinalScore: 0,
  FinalStatus: "Not Evelauted",
  button: "SEND RESULTS TO USER’S EMAIL",
};
export const dataThree = {
  id: 3,
  testQuestions: "Test Question",
  questionTitle: "Select real English words",
  duration: "0:30",
  questionType: "Select real English words",
  evaluation: "Evaluation",
  score: 7,
  question: [
    { id: 1, question: "champion" },
    { id: 2, question: "listen" },
    { id: 3, question: "nature" },
    { id: 4, question: "twall" },
    { id: 5, question: "advantage" },
    { id: 6, question: "greesey" },
  ],
  answer: "User's Answer",
  usersAnswer: [
    { question: "greesey" },
    { question: "listen" },
    { question: "champion" },
    { question: "listen" },
  ],
};
export const dataFour = {
  id: 4,
  testQuestions: "Test Question",
  questionTitle: "Select real English words",
  duration: "0:30",
  questionType: "Select real English words",
  evaluation: "Evaluation",
  score: 7,
  question: [
    { id: 1, question: "WORD 1" },
    { id: 2, question: "WORD 2" },
    { id: 3, question: "WORD 3" },
    { id: 4, question: "WORD 4" },
    { id: 5, question: "WORD 5" },
    { id: 6, question: "WORD 6" },
  ],
  answer: "User's Answer",
  usersAnswer: [
    { id: 1, question: "WORD 1" },
    { id: 1, question: "WORD 5" },
    { id: 1, question: "WORD 6" },
  ],
};
export const dataFife = {
  id: 5,
  testQuestions: "Test Question",
  questionTitle: "Type the statement that you hear",
  duration: "0:30",
  questionType: "Type what you hear",
  evaluation: "Evaluation",
  Mimimumnumber: 3,
  correctAnswer: "Correct ansver: “Hello, how is it going?”",
  answer: "User's Answer",
  enteredStatmen: "“Hello, how is it going?”",
  Numberofplays: 1,
};
export const dataSix = {
  id: 6,
  testQuestions: "Test Question",
  questionTitle: "Write one more sentences that describe the image",
  duration: "0:30",
  questionType: "Describe image",
  evaluation: "Evaluation",
  image: selectImage,
  correctAnswer:
    "Correct ansver: “Protecting nature means protecting the Motherland”",
  answer: "User's Answer",
  enteredStatmen: "Entered Statement:  “I see a white car is burning”",
};
export const dataSeven = {
  id: 7,
  testQuestions: "Test Question",
  questionTitle: "Record yourself saying the statement below",
  duration: "0:30",
  questionType: "Record saying statement ",
  statement: "Statement: “Do you like my car? yes or no?”",
  correctAnswer: "Correct ansver: “Hello, how is it going?”",
};
export const dataEight = {
  id: 8,
  testQuestions: "Test Question",
  questionTitle: "Respond to the questionin at least 30 words",
  duration: "0:30",
  questionType: "Respond in at least N words",
  minNum: 30,
  questionStatement: "“Describe a time you were surprised? What happened?”",
  evaluation: "Evaluation",
  answer: "User's çAnswer",
  respond:
    "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  numofwords: 39,
};
export const dataNine = {
  id: 9,
  testQuestions: "Test Question",
  questionTitle: "Highlight the answer to the questoin below",
  duration: "0:30",
  questionType: "Highlight the answer",
  passage:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  questionStatement: "“Describe a time you were surprised? what happened?”",
  correctAnswer:
    "No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",
  respond:
    "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
};
//
export const dataTen = {
  id: 10,
  testQuestions: "Test Question",
  questionTitle: "Select the main idea that is expressed in the passage",
  duration: "0:30",
  questionType: "Select the main idea",
  evaluation: "Evaluation",
  passage:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
};
export const dataVideo = [
  {
    video: videoo,
    title: "Test Overview",
  },
  {
    video: videoo,
    title: "Test Walkthrough",
  },
  {
    video: videoo,
    title: "Integrated Subscores",
  },
];

export const data = [
  { id: 1, img: assesibleImage, des: "Accessible anytime, anywhere" },
  { id: 2, img: searchImage, des: "Extensive business content" },
  { id: 3, img: voiceImage, des: "Leading speech recognition" },
  { id: 4, img: adminImage, des: "Unlimited live tutoring  " },
];
export const dataForSlider = [
  { id: 1, logo: adama },
  { id: 2, logo: basf },
  { id: 3, logo: deklab },
  { id: 4, logo: lidea },
  { id: 5, logo: deklab },
  { id: 6, logo: adama },
  { id: 7, logo: basf },
];
export const userData = [
  {
    id: 1,
    img: firstUser,
    name: "Alice Archie",
    description: "Founder Bilingual",
  },
  {
    id: 2,
    img: secondUser,
    name: "Mia George",
    description: "Marketer ",
  },
  {
    id: 3,
    img: thirdUser,
    name: "	Oscar Ryan",
    description: "Developer ",
  },
  {
    id: 4,
    img: fourthUser,
    name: "	Jack William",
    description: "UX/UI Designer ",
  },
  {
    id: 5,
    img: fifthUser,
    name: "Rose Thomas",
    description: "Chief Editor ",
  },
  {
    id: 6,
    img: sixthUser,
    name: "Albert Stanley",
    description: "Chief Editor ",
  },
];
