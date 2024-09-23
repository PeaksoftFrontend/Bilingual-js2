export const TABLE_VARIANTS = {
  variant1: {
    headers: ["#", "Name", "Duration", "Question Type"],
    keys: ["id", "name", "duration", "questionType"],
  },
  variant2: {
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
  variant3: {
    headers: ["#", "Question", "Score", "Status"],
    keys: ["id", "question", "score", "status"],
  },
};

export const data = [
  {
    id: 1,
    name: "Select the real Englisg word in the list...",
    duration: "1 min",
    questionType: "Select real English word",
    onIcon: true,
  },
  {
    id: 2,
    name: "Select the real Englisg word in the list...",
    duration: "1 min",
    questionType: "Select real English word",
    onIcon: true,
  },
  {
    id: 3,
    name: "Select the real Englisg word in the list...",
    duration: "1 min",
    questionType: "Select real English word",
    onIcon: false,
  },
];
