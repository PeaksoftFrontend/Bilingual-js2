import { useNavigate } from "react-router-dom";
import { Icons } from "../../../../assets/icons";
import { Button } from "../../../../components/UI/button/Button";
import { ContentWrapper } from "../../../../components/UI/content_wrapper/ContentWrapper";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, styled } from "@mui/material";
import { TestNotFound } from "../../../404/TestNotFound";
import {
  deleteTest,
  falseValid,
  trueValid,
} from "../../../../store/admin create test/adminSlice";

export const TestPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { tests } = useSelector((state) => state.test);

  const isTrueHandler = (event, id) => {
    event.stopPropagation();
    dispatch(trueValid(id));
  };

  const isFalseHandler = (event, id) => {
    event.stopPropagation();
    dispatch(falseValid(id));
  };

  const deleteHandler = (event, id) => {
    event.stopPropagation();
    dispatch(deleteTest(id));
  };

  const updateHandler = (event, test) => {
    event.stopPropagation();
    navigate("/admin/test-page/add-new-test", { state: { test } });
  };

  const handlerNavigate = (selectedId) => {
    navigate(`/admin/test-page/test-info/${selectedId}`);
  };

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
                {item.isChecked ? (
                  <IconButton
                    onClick={(event) => isFalseHandler(event, item.id)}
                  >
                    <Icons.SwitchOff />
                  </IconButton>
                ) : (
                  <IconButton
                    onClick={(event) => isTrueHandler(event, item.id)}
                  >
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
