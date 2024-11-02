import { Outlet } from "react-router-dom";
import { AdminHeader } from "../pages/admin/adminHeader/AdminHeader";
import { styled } from "@mui/material";

export const AdminPage = () => {
  return (
    <StyledDiv>
      <AdminHeader />
      <Outlet />
    </StyledDiv>
  );
};

const StyledDiv = styled("div")(() => ({
  width: "100%",
  height: "110vh",
  display: "flex",
  flexDirection: "column",
  gap: "68px",
  backgroundColor: "#D7E1F8",
}));
