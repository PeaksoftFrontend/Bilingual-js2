import { styled } from "@mui/material";
import { Button } from "../../../components/UI/button/Button";
import { ContentWrapper } from "../../../components/UI/content_wrapper/ContentWrapper";
import { userTest } from "../../../utils/constants/userTest";
import { useNavigate } from "react-router-dom";
import { TestNotFound } from "../../404/TestNotFound";

export const UserTestPage = () => {
  const navigate = useNavigate();

  return (
    <StyledDiv>
      {userTest.length > 0 ? (
        userTest.map((item, index) => (
          <ContentWrapper key={index}>
            <StyledContainer>
              <BlockImg>
                <img src={item.img} alt="" />
                <TextBlock>
                  <StyledDuration>{item.duration} minutes</StyledDuration>
                  <StyledTitle>{item.title}</StyledTitle>
                  <StyledDescription>{item.description}</StyledDescription>
                </TextBlock>
              </BlockImg>
              <Button
                variant="outlined"
                onClick={() =>
                  navigate("/main/test/start-test", { state: item })
                }
              >
                try test
              </Button>
            </StyledContainer>
          </ContentWrapper>
        ))
      ) : (
        <ContentWrapper>
          <TestNotFound />
        </ContentWrapper>
      )}
    </StyledDiv>
  );
};

const StyledContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "end",
  justifyContent: "space-between",
}));

const BlockImg = styled("div")(() => ({
  display: "flex",
  gap: "46px",
}));

const StyledDuration = styled("h6")(() => ({
  fontSize: "16px",
  color: "#3A10E5",
  fontWeight: "500",
  fontFamily: "DIN Next Rounded LT Pro Medium",
  textDecoration: "uppercase",
}));

const StyledTitle = styled("h5")(() => ({
  fontSize: "26px",
  color: "#4C4859",
}));

const StyledDescription = styled("h5")(() => ({
  fontSize: "16px",
  color: "#4C4859",
  fontWeight: "600",
}));

const TextBlock = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
}));

const StyledDiv = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "50px",
}));
