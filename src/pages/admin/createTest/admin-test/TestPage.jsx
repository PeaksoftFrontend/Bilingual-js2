import { useNavigate } from "react-router-dom";
import { Icons } from "../../../../assets/icons";
import { Button } from "../../../../components/UI/button/Button";
import { ContentWrapper } from "../../../../components/UI/content_wrapper/ContentWrapper";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, styled } from "@mui/material";
import {
  deleteTest,
  falseValid,
  trueValid,
} from "../../../../store/slices/adminSlice/adminSlice";
import { TestNotFound } from "../../../404/TestNotFound";

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
    navigate("/admin/addNewTest", { state: { test } });
  };

  const handlerNavigate = (selectedId) => {
    navigate(`/admin/testInfo/${selectedId}`);
  };

  return (
    <ContentWrapper>
      <ContainerButton>
        <Button onClick={() => navigate("/admin/addNewTest")}>
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
              <div>
                <StyledTitle>{item.title}</StyledTitle>
                <StyledTitle>{item.description}</StyledTitle>
              </div>
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
  fontWeight: "600",
  color: "#4C4859",
}));
