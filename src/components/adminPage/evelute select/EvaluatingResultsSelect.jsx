import { RESULT, resultData } from "../../../utils/constants/AdminTable";
import { ContentWrapper } from "../../UI/content_wrapper/ContentWrapper";
import { AdminTable } from "../../UI/admin-table/AdminTable";
import { styled } from "@mui/material";
import { Button } from "../../UI/button/Button";

export const EvaluatingResultsSelect = () => {
  return (
    <StyledWrapper>
      <ContentWrapper>
        <StyledDecription>
          <StyledWrapperTitle>
            <StyledTitle>
              User: <span style={{ color: "black" }}>{null}</span>
            </StyledTitle>
            <StyledTitle>
              Test: Test number <span style={{ color: "black" }}>{null}</span>
            </StyledTitle>
            <StyledTitle>
              Date of submission: <span style={{ color: "black" }}>{null}</span>
            </StyledTitle>
          </StyledWrapperTitle>
          <StyledWrapperTitleSecond>
            <h4>Final Score: {null}</h4>
            <h4>Final Status: {null}</h4>
          </StyledWrapperTitleSecond>
        </StyledDecription>
        <StyledUIBtn variant="outlined" disabled={true}>
          SEND RESULTS TO USER’S EMAIL
        </StyledUIBtn>

        <AdminTable columns={RESULT} data={resultData} />
      </ContentWrapper>
    </StyledWrapper>
  );
};
const StyledUIBtn = styled(Button)({
  position: "relative",
  left: "33.8rem",
  bottom: "1.5rem",
});
const StyledTitle = styled("h4")({
  fontSize: "17px",
  fontWeight: "900",
  color: " #3752B4",
});
const StyledWrapperTitle = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
});
const StyledWrapperTitleSecond = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
});
const StyledDecription = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "40px",
});
const StyledWrapper = styled("div")({
  padding: "40px",
});
