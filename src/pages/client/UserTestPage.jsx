import { styled } from "@mui/material";
import { Button } from "../../components/UI/button/Button";
import { ContentWrapper } from "../../components/UI/content_wrapper/ContentWrapper";
import { userTest } from "../../utils/constants/userTest";
import { useNavigate } from "react-router-dom";

export const UserTestPage = () => {
  const navigate = useNavigate();

  return (
    <ContentWrapper>
      {userTest.map((item, index) => (
        <StyledContainer key={index}>
          <BlockImg>
            <img src={item.img} alt="" />
            <TextBlock>
              <StyledDuration>{item.duration}</StyledDuration>
              <StyledTitle>{item.title}</StyledTitle>
              <StyledDescription>{item.description}</StyledDescription>
            </TextBlock>
          </BlockImg>
          <Button
            variant="outlined"
            onClick={() => navigate("/main/test/start-test")}
          >
            try test
          </Button>
        </StyledContainer>
      ))}
    </ContentWrapper>
  );
};

const StyledContainer = styled("div")(() => ({
  display: "flex",
  gap: "257px",
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
