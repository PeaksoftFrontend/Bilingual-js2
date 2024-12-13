// import { useNavigate } from "react-router-dom";
import { IconButton, styled } from "@mui/material";
import { AdminTable } from "../../../components/UI/admin-table/AdminTable";
import { ContentWrapper } from "../../../components/UI/content_wrapper/ContentWrapper";
import { userInfoData } from "../../../utils/constants/AdminTable";
import { Icons } from "../../../assets/icons";
import { useEffect, useState } from "react";
import { UiModal } from "../../../components/UI/modal/UiModal";
import { Button } from "../../../components/UI/button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteResultUserAnswer,
  getAllUserResultAnswer,
} from "../../../store/result/resultThunk";

export const SubmittedResults = () => {
  const [testId, setTestId] = useState(null);
  const [userId, setUserId] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const { result } = useSelector((state) => state.result);
  console.log("result: ", result);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateHandler = (userData) => {
    navigate(
      `/admin/submitted-results/result-info/${userData.userId}/testInfo/${userData.testId}`,
      {
        state: userData,
      }
    );
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const openModalHandler = (userrId, userTestId) => {
    setOpenModal(true);
    setTestId(userTestId);
    setUserId(userrId);
  };

  const handleDelete = () => {
    console.log("deleted");
    console.log(testId);
    console.log(userId);
    dispatch(deleteResultUserAnswer({ testId: 22, userId: 11 }));
  };

  useEffect(() => {
    dispatch(getAllUserResultAnswer());
  }, [dispatch]);
  const columns = [
    {
      Header: "#",
      accessor: "id",
      Cell: ({ row }) => <Actions>{row.index + 1}</Actions>,
    },
    {
      Header: "User Name",
      accessor: "userFullName",
      Cell: ({ row }) => (
        <Actions onClick={() => navigateHandler(row.original)}>
          {row.original.userFullName}
        </Actions>
      ),
    },
    {
      Header: "Date of Submition",
      accessor: "dateOfSubmission",
    },
    {
      Header: "Test Name",
      accessor: "testName",
    },
    {
      Header: "Status",
      accessor: "checked",
      Cell: ({ row }) => (
        <StatusCell status={row.original.checked}>
          {row.original.checked ? "Evaluated" : "Not evaluated"}
        </StatusCell>
      ),
    },
    {
      Header: "Score",
      accessor: "finalScore",
      Cell: ({ row }) => (
        <StatusCell status={row.original.checked}>
          {row.original.finalScore}
        </StatusCell>
      ),
    },
    {
      Header: "",
      accessor: "actions",
      Cell: ({ row }) => (
        <StatusCell status={row.original.checked}>
          {row.original.checked ? <Icons.Eye /> : <Icons.Tick />}
        </StatusCell>
      ),
    },
    {
      Header: "",
      accessor: "delete",
      Cell: ({ row }) => (
        <StatusCell>
          <IconButton
            onClick={() =>
              openModalHandler(row.original.userId, row.original.testId)
            }
          >
            <Icons.Trash />
          </IconButton>
        </StatusCell>
      ),
    },
  ];
  return (
    <ContentWrapper>
      <AdminTable
        columns={columns}
        data={userInfoData}
        // data={result}
      />

      <UiModal open={openModal} onClose={closeModalHandler}>
        <ContainerModal>
          <CloseIconContainer>
            <Icons.closeModalicon onClick={closeModalHandler} />
          </CloseIconContainer>
          <Icons.errorClose onClick={closeModalHandler} />
          <ContainerDescriptionModal>
            <h2>Do you want delete ?</h2>
            <p>You can’t restore this file </p>
          </ContainerDescriptionModal>
          <ContainerButtons>
            <Button variant="outlined" onClick={closeModalHandler}>
              Cancel
            </Button>
            <Button variant="contained" color="error" onClick={handleDelete}>
              Delete
            </Button>
          </ContainerButtons>
        </ContainerModal>
      </UiModal>
    </ContentWrapper>
  );
};

const ContainerButtons = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "40px",
  fontFamily: "DINNextRoundedLTW01-Regular",
  fontSize: "16px",
  fontWeight: "400",
}));
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
const CloseIconContainer = styled("div")(() => ({
  position: "absolute",
  top: "16px",
  right: "16px",
  cursor: "pointer",
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

const StatusCell = styled("div")(({ status }) => ({
  color: status ? "green" : "red",
}));
const Actions = styled("p")(() => ({
  fontWeight: "900",
  ".css-8gebbd-MuiTableCell-root": {
    fontFamily: "",
  },
}));
