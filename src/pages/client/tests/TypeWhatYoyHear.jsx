import { styled } from "@mui/material";
import { ContentWrapper } from "../../../components/UI/content_wrapper/ContentWrapper";

export const TypeWhatYoyHear = () => {
  return (
    <StyledBackdrop>
      <ContentWrapper></ContentWrapper>
    </StyledBackdrop>
  );
};
const StyledBackdrop = styled("div")({
  width: "100%",
  height: "100vh",
  backgroundColor: "#D7E1F8",
});
