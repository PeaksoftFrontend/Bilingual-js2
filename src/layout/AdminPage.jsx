import { Outlet } from "react-router-dom";
import { AdminHeader } from "../pages/admin/adminHeader/AdminHeader";
import { styled } from "@mui/material";
import { Snackbar } from "../components/UI/snackbar/SnackBar";

export const AdminPage = () => {
  return (
    <StyledDiv>
      <AdminHeader />
      <Snackbar />
      <Outlet />
    </StyledDiv>
  );
};

const StyledDiv = styled("div")(() => ({
  width: "100%",
  height: "110vh",
  display: "flex",
  flexDirection: "column",
  gap: "48px",
  backgroundColor: "#D7E1F8",
}));
