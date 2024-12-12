import { styled } from "@mui/material";
import { Icons } from "../../../assets/icons";
import { Button } from "../../../components/UI/button/Button";
import { ContentWrapper } from "../../../components/UI/content_wrapper/ContentWrapper";
import { useDispatch, useSelector } from "react-redux";
import { userAnswerPostRequest } from "../../../store/userTest/userTestThunk";
import { Snackbar } from "../../../components/UI/snackbar/SnackBar";
import { useNavigate } from "react-router-dom";

export const CompletePractice = () => {
  const { userAnswer } = useSelector((state) => state.userTest);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOptions = () => {
    dispatch(userAnswerPostRequest(userAnswer));
  };
  const handleNavigate = () => {
    navigate("/main/test");
  };

  return (
    <ContentWrapper>
      <Snackbar />
      <StyledAllContent>
        <StyledWrapperContent>
          <StyledTitleSecond>Test is complete! </StyledTitleSecond>
          <Icons.clickChecked />
        </StyledWrapperContent>
        <StyledWrapperMain>
          <Icons.Logo />
          <StyledTitle>
            Your results were sent for evaluation proccess. after evaluation
            your results will be sent to your email.
          </StyledTitle>
        </StyledWrapperMain>
        <hr />
        <StyledWrapperBtn>
          <Button variant="outlined" onClick={handleNavigate}>
            try again
          </Button>
          <Button onClick={handleOptions}>done</Button>
        </StyledWrapperBtn>
      </StyledAllContent>
    </ContentWrapper>
  );
};
const StyledTitle = styled("p")({
  width: "430px",
  height: "46px",
  textAlign: "center",
  fontFamily: "DINNextRoundedLTW01-Regular",
  fontSize: "18px",
  fontWeight: "400",
});
const StyledTitleSecond = styled("p")({
  fontFamily: "DINNextRoundedLTW01-Regular",
  fontSize: "28px",
  fontWeight: "400",
});
const StyledAllContent = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "45px",
});
const StyledWrapperContent = styled("div")({
  display: "flex",
  gap: "15px",
  alignItems: "center",
  justifyContent: "center",
});
const StyledWrapperMain = styled("div")({
  display: "flex",
  gap: "40px",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
const StyledWrapperBtn = styled("div")({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  justifyContent: "space-between",
});
