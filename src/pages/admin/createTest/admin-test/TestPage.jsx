import { useNavigate } from "react-router-dom";
import { Icons } from "../../../../assets/icons";
import { Button } from "../../../../components/UI/button/Button";
import { ContentWrapper } from "../../../../components/UI/content_wrapper/ContentWrapper";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, styled } from "@mui/material";
import { TestNotFound } from "../../../404/TestNotFound";
import { useEffect } from "react";
import {
  deleteTestRequest,
  getTestRequest,
  putSwitchRequest,
} from "../../../../store/admin create test/adminCreatetestThunk";

export const TestPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { tests } = useSelector((state) => state.test);

  // const isFalseHandler = (event, item) => {
  //   event.stopPropagation();
  //   const { id } = item;
  //   dispatch(putSwitchRequest({ id, action: { isEnabled: false } }));
  // };

  const isTrueHandler = (event, item) => {
    event.stopPropagation();
    const { id } = item;

    dispatch(putSwitchRequest({ id, action: !item.enable }));
  };

  const deleteHandler = (event, id) => {
    event.stopPropagation();
    dispatch(deleteTestRequest(id));
  };

  const updateHandler = (event, test) => {
    event.stopPropagation();
    navigate("/admin/test-page/add-new-test", { state: { test } });
  };

  const handlerNavigate = (selectedId) => {
    navigate(`/admin/test-page/test-info/${selectedId}`);
  };

  useEffect(() => {
    dispatch(getTestRequest());
  }, []);
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
            <StyledContainer
              key={item.id}
              onClick={() => handlerNavigate(item.id)}
            >
              <TextContainer>
                <StyledTitle>{item.title}</StyledTitle>
                <StyledDescription>{item.description}</StyledDescription>
              </TextContainer>
              <IconContainer>
                {item.enable ? (
                  <IconButton onClick={(event) => isTrueHandler(event, item)}>
                    <Icons.SwitchOff />
                  </IconButton>
                ) : (
                  <IconButton onClick={(event) => isTrueHandler(event, item)}>
                    <Icons.SwitchOn />
                  </IconButton>
                )}
                <IconButton onClick={(event) => updateHandler(event, item)}>
                  <Icons.Note />
                </IconButton>
                <IconButton onClick={(event) => deleteHandler(event, item.id)}>
                  <Icons.Trash />
                </IconButton>
              </IconContainer>
            </StyledContainer>
          ))
        ) : (
          <TestNotFound />
        )}
      </MapBlock>
    </ContentWrapper>
  );
};

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
