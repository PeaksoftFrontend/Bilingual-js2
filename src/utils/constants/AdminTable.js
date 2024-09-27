export const TABLE_VARIANTS = {
  test: {
    headers: ["#", "Name", "Duration", "Question Type"],
    keys: ["id", "name", "duration", "questionType"],
  },
  userInfo: {
    headers: [
      "#",
      "User Name",
      "Date of Submission",
      "Test Name",
      "Status",
      "Score",
    ],
    keys: ["id", "userName", "dateOfSubmission", "testName", "status", "score"],
  },
  result: {
    headers: ["#", "Question", "Score", "Status"],
    keys: ["id", "question", "score", "status"],
  },
};

export const testData = [
  {
    id: 1,
    name: "Select the real Englisg word in the list...",
    duration: "1 min",
    questionType: "Select real English word",
    icon: true,
  },
  {
    id: 2,
    name: "Select the real Englisg word in the list...",
    duration: "1 min",
    questionType: "Select real English word",
    icon: true,
  },
  {
    id: 3,
    name: "Select the real Englisg word in the list...",
    duration: "1 min",
    questionType: "Select real English word",
    icon: false,
  },
];

export const userInfoData = [
  {
    id: 1,
    userName: "Kubanov Farid",
    dateOfSubmission: "08:15 20.11.2021",
    testName: "Test number 1",
    status: "Not evaluated",
    score: "0",
    icon: true,
  },
  {
    id: 2,
    userName: "Kubanov Farid",
    dateOfSubmission: "08:15 20.11.2021",
    testName: "Test number 1",
    status: "Not evaluated",
    score: "0",
    icon: true,
  },
  {
    id: 3,
    userName: "Kubanov Farid",
    dateOfSubmission: "08:15 20.11.2021",
    testName: "Test number 1",
    status: "Evaluated",
    score: "0",
    icon: false,
  },
  {
    id: 4,
    userName: "Kubanov Farid",
    dateOfSubmission: "08:15 20.11.2021",
    testName: "Test number 1",
    status: "Evaluated",
    score: "0",
    icon: false,
  },
];

export const resultData = [
  {
    id: 1,
    question: "Select real English words",
    score: "0 out of 10",
    status: "Not evaluated",
    icon: true,
  },
  {
    id: 2,
    question: "Select real English words",
    score: "0 out of 10",
    status: "Not evaluated",
    icon: true,
  },
  {
    id: 3,
    question: "Select real English words",
    score: "0 out of 10",
    status: "Evaluated",
    icon: false,
  },
  {
    id: 4,
    question: "Select real English words",
    score: "0 out of 10",
    status: "Evaluated",
    icon: false,
  },
];
