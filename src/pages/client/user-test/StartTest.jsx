import { Button } from "../../../components/UI/button/Button";
import { ContentWrapper } from "../../../components/UI/content_wrapper/ContentWrapper";
import SearchInfo from "../../../assets/images/searchInfo.png";
import { Icons } from "../../../assets/icons";
import { styled } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { userTestGetByIdRequest } from "../../../store/userTest/userTestThunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const StartTest = () => {
  const { userTestById } = useSelector((state) => state.userTest);
  console.log("userTestById: ", userTestById);

  const navigate = useNavigate();
  const { state } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userTestGetByIdRequest(state.id));
  }, [dispatch]);

  const handlerNavigate = (selectedId) => {
    console.log("selectedId: ", selectedId);
    // test/:testId/start-test/user-test/:userTestId
    navigate(`/main/test/${selectedId}/start-test/user-test/questionId`, {
      state: { questions: userTestById },
    });
  };

  return (
    <ContentWrapper>
      <Container>
        <h1>Take a free practice test and estimate your score</h1>
        <ImgBlock>
          <img src={SearchInfo} alt="" />
          <IconContainer>
            <p>
              <Icons.NoteBook />
              See what the test is like *
            </p>
            <p>
              <Icons.Time />
              Practice takes just {Math.ceil(state?.duration / 60)} minutes
            </p>
            <p>
              <Icons.PhotoId />
              Get an unofficial score estimate
            </p>
          </IconContainer>
        </ImgBlock>
        <StyledText>
          * The practice test may include question types that may not appear on
          the certified test.
        </StyledText>
      </Container>
      <BtnBlock>
        <Button variant="outlined" onClick={() => navigate("/main/test")}>
          CANCEL
        </Button>
        <Button onClick={() => handlerNavigate(state.id)}>PRACTICE TEST</Button>
      </BtnBlock>
    </ContentWrapper>
  );
};

const ImgBlock = styled("div")(() => ({
  display: "flex",
  gap: "49px",
}));

const Container = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "58px",
  "& h1, p": {
    fontWeight: "900",
    color: "#4C4859",
  },
}));

const StyledText = styled("div")(() => ({
  marginTop: "33px",
  fontWeight: "900",
  color: "#4C4859",
}));

const IconContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "26px",
  justifyContent: "center",

  "& p": {
    display: "flex",
    gap: "19px",
  },
}));

const BtnBlock = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "end",
  borderTop: "2px solid #D4D0D0",
  marginTop: "60px",
  paddingTop: "32px",
}));
