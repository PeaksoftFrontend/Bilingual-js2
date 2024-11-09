import { styled } from "@mui/material";
import { Icons } from "../../../assets/icons";
import { Button } from "../../../components/UI/button/Button";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

export const AdminHeader = () => {
  const { role } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <Icons.FullLogo onClick={() => navigate("/")} />
      <DivContainer>
        <StyledNavLink to={role === "USER" ? "/main/test" : "/admin/test-page"}>
          tests
        </StyledNavLink>
        {role === "USER" ? (
          <StyledNavLink to={"/main/result"}>my results</StyledNavLink>
        ) : (
          <StyledNavLink to={"/admin/submitted-results"}>
            submitted results
          </StyledNavLink>
        )}
        <StyledButton variant="outlined">LOG OUT</StyledButton>
      </DivContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled("header")({
  width: "100%",
  height: "90px",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "26px 120px",
});

const DivContainer = styled("nav")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "60px",
});

const StyledNavLink = styled(NavLink)({
  textDecoration: "none",
  fontSize: "15px",
  fontFamily: "DIN Next Rounded LT Pro Medium",
  fontWeight: "700",
  lineHeight: "17.58px",
  textTransform: "uppercase",
  color: "#4C4859",

  "&.active": {
    color: "#3A10E5",
  },
});

const StyledButton = styled(Button)({
  color: "#4C4C4C",
  borderColor: "#4C4859",
  boxShadow: "0px 2px 3px 0px rgba(76, 72, 89, 0.2)",

  "&:hover": {
    backgroundColor: "transparent",
    color: "#4C4C4C",
    border: "2px solid #4C4859 ",
  },
});
