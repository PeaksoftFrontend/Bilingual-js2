import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ContentWrapper } from "../../../components/UI/content_wrapper/ContentWrapper";
import { AdminTable } from "../../../components/UI/admin-table/AdminTable";
// import { userResultData } from "../../../utils/constants/AdminTable";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getQuestionsResultsById,
  getResultUserById,
} from "../../../store/result/resultThunk";
import { styled } from "@mui/material";
import { Icons } from "../../../assets/icons";

export const ResultInfo = () => {
  const { resultById } = useSelector((state) => state.result);
  const { testInfoId, testId } = useParams();
  const navigate = useNavigate();
  // console.log("testId: ", testId);
  // console.log("testInfoId: ", testInfoId);
  const location = useLocation();
  const userData = location.state;
  console.log("userData: ", userData);
  // console.log("userData: ", userData);
  const dispatch = useDispatch();

  const handleNavigateByIdAnswer = (questionId) => {
    dispatch(getQuestionsResultsById({ userId: testInfoId, questionId }));
    navigate(
      `/admin/submitted-results/result-info/${testInfoId}/testInfo/${testId}/userAnswer/${questionId}`
    );
  };

  if (!resultById) {
    return <div>Ошибка: данные пользователя отсутствуют</div>;
  }

  useEffect(() => {
    dispatch(getResultUserById({ testId: testId, userId: testInfoId }));
  }, [dispatch]);

  const columns = [
    {
      Header: "#",
      accessor: "id",
      Cell: ({ row }) => <Actions>{row.index + 1}</Actions>,
    },

    {
      Header: "Question",
      accessor: "questionTitle",
      Cell: ({ row }) => (
        <p onClick={() => handleNavigateByIdAnswer(row.original.id)}>
          {row?.original.questionTitle}
        </p>
      ),
    },
    {
      Header: "Score",
      accessor: "score",
      Cell: ({ row }) => <p>{row?.original.score} out of 10</p>,
    },
    {
      Header: "",
      accessor: "asasddf",
    },
    {
      Header: "Status",
      accessor: "checked",
      Cell: ({ row }) => (
        <StatusCell status={row?.original.checked}>
          {row?.original.checked ? "Evaluated" : "Not evaluated"}
        </StatusCell>
      ),
    },
    {
      Header: "",
      accessor: "asdf",
    },

    {
      Header: "",
      accessor: "asasdfdf",
    },
    {
      Header: "",
      accessor: "actions",
      Cell: ({ row }) => (
        <StatusCell status={row.original.checked}>
          {row.original.checked ? <Icons.TickGreen /> : <Icons.Eye />}
        </StatusCell>
      ),
    },
  ];

  return (
    <ContentWrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <p>
            <StyledSpan>User:</StyledSpan> {resultById.userFullName}
          </p>
          <p>
            <StyledSpan>Test:</StyledSpan>
            {userData.testName}
          </p>
          <p>
            <StyledSpan>Date of submission:</StyledSpan>
            {/* <span> {userData.dateOfSubmition} </span> */}
            <span>12.12.2024 16:45</span>
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "flex-end",
          }}
        >
          <p>
            <StyledSpanSecond>Final Score:</StyledSpanSecond>
            <span
              style={{
                color: resultById?.finalScore === 0 ? "red" : "green",
                marginLeft: "8px",
              }}
            >
              {resultById?.finalScore}
            </span>
          </p>
          <p>
            <StyledSpanSecond>Final Status: </StyledSpanSecond>
            {/* <span>{userData.score}</span> */}
            <StyledSpanSecond>Not Evaluated</StyledSpanSecond>
          </p>
        </div>
      </div>
      <AdminTable
        columns={columns}
        data={resultById?.questionResultResponseList}
        // data={userResultData}
      />
    </ContentWrapper>
  );
};

const StatusCell = styled("div")(({ status }) => ({
  color: status ? "green" : "red",
}));

const StyledSpan = styled("span")`
  color: #3752b4;
  font-weight: bold;
  margin-right: 4px;
`;
const StyledSpanSecond = styled("span")`
  color: red;
  font-weight: bold;
`;

const Actions = styled("p")(() => ({
  fontWeight: "900",
  ".css-8gebbd-MuiTableCell-root": {
    fontFamily: "",
  },
}));
