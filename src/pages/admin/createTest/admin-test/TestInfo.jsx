import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ContentWrapper } from "../../../../components/UI/content_wrapper/ContentWrapper";
import { Button } from "../../../../components/UI/button/Button";
import { Icons } from "../../../../assets/icons";
import { AdminTable } from "../../../../components/UI/admin-table/AdminTable";
import { styled } from "@mui/system";
import { TestNotFound } from "../../../404/TestNotFound";
import { useEffect, useMemo, useState } from "react";
import { IconButton } from "@mui/material";
import {
  deleteTestQuestionById,
  updateTestQuestionById,
} from "../../../../store/adminQuestion/adminQuestionThunk";
import { UiModal } from "../../../../components/UI/modal/UiModal";
import { Loading } from "../../../../components/UI/loading/Loading";
import {
  getTestByIdRequest,
  getTestRequest,
  questionEnablePutRequest,
} from "../../../../store/admin create test/adminCreatetestThunk";

export const TestInfo = () => {
  const navigate = useNavigate();
  const { testInfoId } = useParams();
  const { tests, testsById } = useSelector((state) => state.test);
  console.log("tests: ", tests);
  const { isLoading } = useSelector((state) => state.questions);
  const [deleteModal, setDeleteModal] = useState(false);
  const [questionId, setQuestionId] = useState(null);
  const dispatch = useDispatch();

  const handleNavigate = () => {
    navigate(`/admin/test-page/test-info/${testInfoId}/create-test`);
  };

  const handleDeleteQuestion = (id) => {
    dispatch(deleteTestQuestionById({ id, testInfoId }));
    closeModal();
  };

  const handleUpdateQuestion = (id) => {
    dispatch(updateTestQuestionById(id));
    handleNavigate();
  };

  const openModal = (id) => {
    setDeleteModal(true);
    setQuestionId(id);
  };
  useEffect(() => {
    dispatch(getTestByIdRequest(testInfoId));
  }, [dispatch]);

  const closeModal = () => {
    setDeleteModal(false);
    setQuestionId(null);
  };

  useEffect(() => {
    dispatch(getTestRequest());
  }, [dispatch]);

  const handleUpdateEnable = (testQuestionId, enable) => {
    dispatch(
      questionEnablePutRequest({ testQuestionId, testInfoId, enable: !enable })
    );
  };

  const test = tests?.find((item) => item.id === Number(testInfoId));
  const totalDurationMinutes =
    testsById?.reduce(
      (total, testDuration) => total + testDuration.duration,
      0
    ) / 60;

  const columns = useMemo(
    () => [
      {
        Header: "№",
        accessor: "row_number",
        Cell: ({ row }) => {
          return <ActionsContainer>{row.index + 1}</ActionsContainer>;
        },
      },
      {
        Header: "Name",
        accessor: "title",
      },
      {
        Header: "Duration",
        accessor: "duration",
        Cell: ({ row }) => {
          const seconds = row.original.duration;
          const minutes = Math.floor(seconds / 60);
          return <ActionsContainer>{`${minutes} min`}</ActionsContainer>;
        },
      },
      {
        Header: "Question type",
        accessor: "questionType",
      },
      {
        Header: "Actions",
        accessor: "actions",
        Cell: ({ row }) => (
          <ActionsContainer>
            {row.original.enable ? (
              <IconButton
                onClick={() =>
                  handleUpdateEnable(row.original.id, row.original.enable)
                }
              >
                <Icons.SwitchOn />
              </IconButton>
            ) : (
              <IconButton
                onClick={() =>
                  handleUpdateEnable(row.original.id, row.original.enable)
                }
              >
                <Icons.SwitchOff />
              </IconButton>
            )}
            <IconButton onClick={() => handleUpdateQuestion(row.original.id)}>
              <Icons.Note />
            </IconButton>
            <IconButton onClick={() => openModal(row.original.id)}>
              <Icons.Trash />
            </IconButton>
          </ActionsContainer>
        ),
      },
    ],
    []
  );

  return (
    <ContentWrapper>
      {test ? (
        <StyledContainerText>
          <StyledText>
            <span>Title:</span> {test?.title}
          </StyledText>
          <StyledText>
            <span>Short Description:</span> {test?.description}
          </StyledText>
          <StyledText>
            <span>Duration:</span> {Math.round(totalDurationMinutes)} min
          </StyledText>
        </StyledContainerText>
      ) : (
        <TestNotFound />
      )}
      <ButtonContainer>
        <Button onClick={handleNavigate}>
          <Icons.Plus />
          ADD MORE QUESTIONS
        </Button>
      </ButtonContainer>

      <AdminTable columns={columns} data={testsById || []} />
      {isLoading && <Loading />}
      {deleteModal && (
        <UiModal onClose={closeModal} open={deleteModal}>
          <ContainerModal>
            <CloseIconContainer>
              <Icons.closeModalicon onClick={closeModal} />
            </CloseIconContainer>
            <Icons.errorClose onClick={closeModal} />
            <ContainerDescriptionModal>
              <h2>Do you want delete ?</h2>
              <p>You can’t restore this file </p>
            </ContainerDescriptionModal>
            <ContainerButtons>
              <Button variant="outlined" onClick={closeModal}>
                Cancel
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => handleDeleteQuestion(questionId)}
              >
                Delete
              </Button>
            </ContainerButtons>
          </ContainerModal>
        </UiModal>
      )}
    </ContentWrapper>
  );
};

const ContainerDescriptionModal = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  flexDirection: "column",
  fontFamily: "DINNextRoundedLTW01-Regular",
  fontSize: "16px",
  fontWeight: "400",
}));

const ContainerModal = styled("div")(() => ({
  position: "relative", // Добавлено
  width: "510px",
  height: "360px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "60px",
}));

const ContainerButtons = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "40px",
  fontFamily: "DINNextRoundedLTW01-Regular",
  fontSize: "16px",
  fontWeight: "400",
}));

const CloseIconContainer = styled("div")(() => ({
  position: "absolute",
  top: "16px",
  right: "16px",
  cursor: "pointer",
}));

const StyledText = styled("div")(() => ({
  "& span": {
    color: "#3752B4",
    fontWeight: "700",
  },
  color: "#4C4859",
  fontWeight: "700",
}));

const StyledContainerText = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
}));

const ButtonContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "end",
  marginTop: "44px",
  borderBottom: "1px solid #C4C4C4",
  paddingBottom: "22px",

  "& button": {
    width: "213px",
  },
}));

const ActionsContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "12px",
});
