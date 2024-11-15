import { styled } from "@mui/material";
import { Button } from "../../../components/UI/button/Button";
import { ContentWrapper } from "../../../components/UI/content_wrapper/ContentWrapper";
import { Icons } from "../../../assets/icons";

export const CompleteTest = () => {
  return (
    <ContentWrapper>
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
          <Button variant="outlined">try again</Button>
          <Button>done</Button>
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
