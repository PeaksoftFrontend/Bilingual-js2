import { styled } from "@mui/material";
import { Button } from "../../../components/UI/button/Button";
import { ContentWrapper } from "../../../components/UI/content_wrapper/ContentWrapper";
import { useNavigate } from "react-router-dom";
import { TestNotFound } from "../../404/TestNotFound";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { testRequest } from "../../../store/user create test/userThunk";
import { Loading } from "../../../components/UI/loading/Loading";
import Sheet from "../../../assets/images/sheet.png";

export const UserTestPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userTest, isLoading, isError } = useSelector(
    (state) => state.userTest
  );

  useEffect(() => {
    dispatch(testRequest());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error loading tests</div>;
  }

  return (
    <StyledDiv>
      {userTest.length > 0 ? (
        userTest.map((item, index) => (
          <ContentWrapper key={index}>
            <StyledContainer>
              <BlockImg>
                <img src={Sheet} alt={item.tit} />
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
