import { styled } from "@mui/material";
import { AdminTable } from "../../components/UI/admin-table/AdminTable";
import { USERINFO, userInfoData } from "../../utils/constants/AdminTable";
import { Button } from "../../components/UI/button/Button";
import { dataTwo } from "./../../utils/constants/general";

export const EvaluteSubRes = () => {
  return (
    <div>
      <StyledContainer>
        <StyledTitle>
          Test: <span style={{ color: "black" }}>{dataTwo.Datesubmission}</span>
        </StyledTitle>
        <StyledContent>
          <div>
            <h4>
              Final Score:{" "}
              <span style={{ color: dataTwo.FinalScore === 0 && "red" }}>
                {dataTwo.FinalScore}
              </span>
            </h4>
            <h4>
              Final Status:{" "}
              <span
                style={{
                  color: dataTwo.FinalStatus === "Not Evelauted" && "red",
                }}
              >
                {dataTwo.FinalStatus}
              </span>
            </h4>
          </div>
          <Button variant="outlined" disabled={true}>
            {dataTwo.button}
          </Button>
        </StyledContent>
      </StyledContainer>
      <hr />
      <AdminTable columns={USERINFO} data={userInfoData} />
    </div>
  );
};

export const StyledTitle = styled("h4")({
  fontSize: "17px",
  fontWeight: "900",
  color: " #3752B4",
});

const StyledContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const StyledContent = styled("div")({
  position: "relative",
  bottom: "2.5rem",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: "30px",
});
