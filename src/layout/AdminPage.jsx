import { Outlet } from "react-router-dom";
import { styled } from "@mui/material";
import { Snackbar } from "../components/UI/snackbar/SnackBar";
import { ContentWrapper, StyledAdminHeader } from "./UserLayout";

export const AdminPage = () => {
  return (
    <StyledDiv>
      <Snackbar />
      <StyledAdminHeader />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </StyledDiv>
  );
};

const StyledDiv = styled("div")(() => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  // gap: "48px",
  backgroundColor: "#D7E1F8",
}));
