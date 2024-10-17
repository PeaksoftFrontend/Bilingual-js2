import { styled } from "@mui/material";
import { ContentWrapper } from "../../components/UI/content_wrapper/ContentWrapper";
import { AdminHeader } from "../../components/adminPage/adminHeader/AdminHeader";

export const TestQuestion = () => {
  return (
    <StyledAllContainer>
      <AdminHeader />
      <ContentWrapper>
        <StyledWrapperSecond>
          <StyledTitle>
            User: <span style={{ color: "black" }}>{null}</span>
          </StyledTitle>
          <StyledTitle>
            Test: <span style={{ color: "black" }}>Test number {null}</span>
          </StyledTitle>
        </StyledWrapperSecond>

        <StyledWrapperDes>
          <h3>Test Question </h3>
          <StyledWrapperDesSecond>
            <StyledTitle>
              Question Title: <span style={{ color: "black" }}>{null}</span>
            </StyledTitle>
            <StyledTitle>
              Duration (in minutes):{" "}
              <span style={{ color: "black" }}>{null}</span>
            </StyledTitle>
            <StyledTitle>
              Question Type: <span style={{ color: "black" }}>{null}</span>
            </StyledTitle>
          </StyledWrapperDesSecond>
        </StyledWrapperDes>
      </ContentWrapper>
    </StyledAllContainer>
  );
};

const StyledWrapperSecond = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
});

const StyledTitle = styled("h4")({
  fontSize: "17px",
  fontWeight: "900",
  color: " #3752B4",
});

const StyledAllContainer = styled("div")({
  width: "100%",
  height: "1180vh",
  backgroundColor: "#D7E1F8",
});

const StyledWrapperDes = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "14px",
});

const StyledWrapperDesSecond = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
});
