import { styled } from "@mui/material";
import { Button } from "../../../components/UI/button/Button";
import { ContentWrapper } from "../../../components/UI/content_wrapper/ContentWrapper";
import { useNavigate } from "react-router-dom";
import { TestNotFound } from "../../404/TestNotFound";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userTestGetRequest } from "../../../store/userTest/userTestThunk";
import Sheet from "../../../assets/images/sheet.png";

export const UserTestPage = () => {
  const { userTest } = useSelector((state) => state.userTest);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigate = (testId, state) => {
    navigate(`${testId}/start-test`, state);
  };

  useEffect(() => {
    dispatch(userTestGetRequest());
  }, [dispatch]);
  return (
    <StyledDiv>
      {userTest.length > 0 ? (
        userTest
          .filter((item) => item.enable)
          .map((item, index) => (
            <ContentWrapper key={index}>
              <StyledContainer>
                <BlockImg>
                  <img src={Sheet} alt={item.title} />
                  <TextBlock>
                    <StyledDuration>
                      {Math.ceil(item.duration / 60)} minutes
                    </StyledDuration>
                    <StyledTitle>{item.title}</StyledTitle>
                    <StyledDescription>{item.description}</StyledDescription>
                  </TextBlock>
                </BlockImg>
                <Button
                  variant="outlined"
                  onClick={() => handleNavigate(item.id, { state: item })}
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
