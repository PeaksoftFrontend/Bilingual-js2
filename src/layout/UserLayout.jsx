import { Outlet } from "react-router-dom";
import { AdminHeader } from "../pages/admin/adminHeader/AdminHeader";
import { styled } from "@mui/material";
import { Snackbar } from "../components/UI/snackbar/SnackBar";

export const UserLayout = () => {
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
  backgroundColor: "#D7E1F8",
}));

const StyledAdminHeader = styled(AdminHeader)(() => ({
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 1,
}));

const ContentWrapper = styled("div")(() => ({
  marginTop: "0px",
  height: "calc(100vh - 80px)",
  overflowY: "auto",
  paddingTop: "80px",
}));
