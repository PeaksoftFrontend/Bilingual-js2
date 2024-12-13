export const TEST = [
  {
    Header: "#",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Duration",
    accessor: "duration",
  },
  {
    Header: "Question Type",
    accessor: "questionType",
  },
  {
    Header: "",
    accessor: "icon",
  },
];

export const USERINFO = [
  {
    Header: "#",
    accessor: "id",
  },
  {
    Header: "User Name",
    accessor: "userName",
  },
  {
    Header: "Date of Submition",
    accessor: "dateOfSubmition",
  },
  {
    Header: "Test Name",
    accessor: "testName",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Score",
    accessor: "score",
  },
  {
    Header: "",
    accessor: "icon",
  },
];
export const RESULTDATA = [
  {
    Header: "#",
    accessor: "id",
  },
  {
    Header: "Date of Submition",
    accessor: "dateOfSubmition",
  },
  {
    Header: "Test Name",
    accessor: "testName",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Score",
    accessor: "score",
  },
  {
    Header: "",
    accessor: "icon",
  },
];

export const RESULT = [
  {
    Header: "#",
    accessor: "id",
  },
  {
    Header: "Question",
    accessor: "question",
  },
  {
    Header: "Score",
    accessor: "score",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "",
    accessor: "icon",
  },
];

// export const testData = [
//   {
//     id: 1,
//     name: "Select the real Englisg word in the list",
//     duration: "1 min",
//     questionType: "Select real English word",
//     icon: true,
//   },
//   {
//     id: 2,
//     name: "Select the real Englisg word in the list",
//     duration: "1 min",
//     questionType: "Select real English word",
//     icon: true,
//   },
//   {
//     id: 3,
//     name: "Select the real Englisg word in the list",
//     duration: "1 min",
//     questionType: "Select real English word",
//     icon: false,
//   },
// ];
export const userResultData = [
  {
    id: 1,
    dateOfSubmition: "08:15 20.11.2021",
    testName: "English advanced test",
    status: "Not evaluated",
    score: "0",
    icon: true,
  },
  {
    id: 2,
    dateOfSubmition: "08:15 20.11.2021",
    testName: "English advanced test",
    status: "Not evaluated",
    score: "0",
    icon: true,
  },
  {
    id: 3,
    dateOfSubmition: "08:15 20.11.2021",
    testName: "English advanced test",
    status: "Evaluated",
    score: "7",
    icon: false,
  },
  {
    id: 4,
    dateOfSubmition: "08:15 20.11.2021",
    testName: "English advanced test",
    status: "Evaluated",
    score: "7",
    icon: false,
  },
];

export const userInfoData = [
  {
    userFullName: "Donald Tramp",
    dateOfSubmission: "12.12.2022",
    testName: "Test number 1",
    checked: false,
    finalScore: 0,
    maxScore: null,
    userId: 1,
    testId: 1,
    questionResultResponseList: [
      {
        id: 1,
        questionTitle: "Select the real english words",
        score: 10,
        checked: true,
        questionType: "SELECT_REAL_ENGLISH_WORD",
      },
      {
        id: 2,
        questionTitle: "Listen and select English words",
        score: 10,
        checked: true,
        questionType: "LISTEN_AND_SELECT_ENGLISH_WORDS",
      },
      {
        id: 3,
        questionTitle: "Write what you hear",
        score: 10,
        checked: true,
        questionType: "TYPE_WHAT_YOU_HEAR",
      },
      {
        id: 4,
        questionTitle: "Describe the image",
        score: 10,
        checked: true,
        questionType: "DESCRIBE_IMAGE",
      },
      {
        id: 5,
        questionTitle: "Record yourself saying the statement below",
        score: 10,
        checked: true,
        questionType: "RECORD_SAYING_STATEMENT",
      },
      {
        id: 6,
        questionTitle: "Respond in at least N words",
        score: 10,
        checked: true,
        questionType: "RESPOND_AT_LEAST_N_WORDS",
      },
      {
        id: 7,
        questionTitle: "Highlight the answer",
        score: 10,
        checked: true,
        questionType: "HIGHLIGHT_THE_ANSWER",
      },
      {
        id: 8,
        questionTitle: "Select the main idea in this options",
        score: 10,
        checked: true,
        questionType: "SELECT_THE_MAIN_IDEA",
      },
      {
        id: 9,
        questionTitle: "Select the best title in this options",
        score: 10,
        checked: true,
        questionType: "SELECT_THE_BEST_TITLE",
      },
    ],
  },
  {
    userFullName: "zhakshylyk",
    dateOfSubmission: "12.12.2022",
    testName: "Test number 1",
    checked: true,
    finalScore: 100,
    maxScore: null,
    userId: 2,
    testId: 2,
    questionResultResponseList: [
      {
        id: 1,
        questionTitle: "Select the real english words",
        score: 10,
        checked: true,
        questionType: "SELECT_REAL_ENGLISH_WORD",
      },
      {
        id: 2,
        questionTitle: "Listen and select English words",
        score: 10,
        checked: true,
        questionType: "LISTEN_AND_SELECT_ENGLISH_WORDS",
      },
      {
        id: 3,
        questionTitle: "Write what you hear",
        score: 10,
        checked: true,
        questionType: "TYPE_WHAT_YOU_HEAR",
      },
      {
        id: 4,
        questionTitle: "Describe the image",
        score: 10,
        checked: true,
        questionType: "DESCRIBE_IMAGE",
      },
      {
        id: 5,
        questionTitle: "Record yourself saying the statement below",
        score: 10,
        checked: true,
        questionType: "RECORD_SAYING_STATEMENT",
      },
      {
        id: 6,
        questionTitle: "Respond in at least N words",
        score: 10,
        checked: true,
        questionType: "RESPOND_AT_LEAST_N_WORDS",
      },
      {
        id: 7,
        questionTitle: "Highlight the answer",
        score: 10,
        checked: true,
        questionType: "HIGHLIGHT_THE_ANSWER",
      },
      {
        id: 8,
        questionTitle: "Select the main idea in this options",
        score: 10,
        checked: true,
        questionType: "SELECT_THE_MAIN_IDEA",
      },
      {
        id: 9,
        questionTitle: "Select the best title in this options",
        score: 10,
        checked: true,
        questionType: "SELECT_THE_BEST_TITLE",
      },
    ],
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
