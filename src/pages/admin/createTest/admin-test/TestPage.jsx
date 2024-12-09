import { useNavigate } from "react-router-dom";
import { Icons } from "../../../../assets/icons";
import { Button } from "../../../../components/UI/button/Button";
import { ContentWrapper } from "../../../../components/UI/content_wrapper/ContentWrapper";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, styled } from "@mui/material";
import { TestNotFound } from "../../../404/TestNotFound";
import { useEffect, useState, useCallback } from "react";
import {
  deleteTestRequest,
  getTestRequest,
  putSwitchRequest,
} from "../../../../store/admin create test/adminCreatetestThunk";
import { UiModal } from "../../../../components/UI/modal/UiModal";

export const TestPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [testId, setTestId] = useState(null);

  const { tests, isLoading, error } = useSelector((state) => state.test);
  console.log("tests: ", tests);
  console.log("error: ", error);
  console.log("isLoading: ", isLoading);

  useEffect(() => {
    dispatch(getTestRequest());
  }, [dispatch]);

  const openModalHandler = useCallback((event, item) => {
    event.stopPropagation();
    setTestId(item.id);
    setOpenModal(true);
  }, []);

  const closeModalHandler = useCallback(() => {
    setOpenModal(false);
    setTestId(null);
  }, []);

  const deleteHandler = useCallback(() => {
    if (testId) {
      dispatch(deleteTestRequest(testId));
      closeModalHandler();
    }
  }, [dispatch, testId, closeModalHandler]);

  const isTrueHandler = useCallback(
    (event, item) => {
      event.stopPropagation();
      dispatch(putSwitchRequest({ id: item.id, action: !item.enable }));
    },
    [dispatch]
  );

  return (
    <ContentWrapper>
      <ContainerButton>
        <Button onClick={() => navigate("/admin/test-page/add-new-test")}>
          <Icons.Plus />
          ADD NEW TEST
        </Button>
      </ContainerButton>
      <MapBlock>
        {tests.length > 0 ? (
          tests.map((item) => (
            <StyledContainer key={item.id}>
              <TextContainer>
                <StyledTitle>{item.title}</StyledTitle>
                <StyledDescription
                  onClick={() =>
                    navigate(`/admin/test-page/test-info/${item.id}`)
                  }
                >
                  {item.description}
                </StyledDescription>
              </TextContainer>
              <IconContainer>
                <IconButton
                  aria-label={item.enable ? "Disable test" : "Enable test"}
                  onClick={(event) => isTrueHandler(event, item)}
                >
                  {item.enable ? <Icons.SwitchOff /> : <Icons.SwitchOn />}
                </IconButton>
                <IconButton
                  aria-label="Edit test"
                  onClick={() =>
                    navigate("/admin/test-page/add-new-test", {
                      state: { test: item },
                    })
                  }
                >
                  <Icons.Note />
                </IconButton>
                <IconButton
                  aria-label="Delete test"
                  onClick={(event) => openModalHandler(event, item)}
                >
                  <Icons.Trash />
                </IconButton>
              </IconContainer>
            </StyledContainer>
          ))
        ) : (
          <TestNotFound>
            <p>No tests found. Click below to create a new test.</p>
            <Button onClick={() => navigate("/admin/test-page/add-new-test")}>
              Create Test
            </Button>
          </TestNotFound>
        )}
      </MapBlock>
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
            <Button variant="contained" color="error" onClick={deleteHandler}>
              Delete
            </Button>
          </ContainerButtons>
        </ContainerModal>
      </UiModal>
    </ContentWrapper>
  );
};
const CloseIconContainer = styled("div")(() => ({
  position: "absolute",
  top: "16px",
  right: "16px",
  cursor: "pointer",
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

const StyledContainer = styled("div")(() => ({
  height: "66px",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "space-between",
  padding: "16px",
  cursor: "pointer",
  boxShadow:
    "0px 4px 10px 0px rgba(0, 0, 0, 0.06),  0px -4px 10px 0px rgba(0, 0, 0, 0.06)",
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

const ContainerButton = styled("div")(() => ({
  display: "flex",
  justifyContent: "end",
  paddingBottom: "24px",
}));

const MapBlock = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
}));

const IconContainer = styled("div")(() => ({
  display: "flex",
  gap: "13px",
}));

const StyledTitle = styled("p")(() => ({
  fontWeight: "500",
  color: "#4C4859",
  fontSize: "22px",
}));

const StyledDescription = styled("p")(() => ({
  fontWeight: "400",
  color: "#4C4859",
}));

const TextContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));
