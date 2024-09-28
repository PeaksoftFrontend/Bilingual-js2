import { styled } from "@mui/material";
import { Icons } from "../../../assets/icons";
import { Button } from "../../UI/button/Button";

export const AdminHeader = () => {
  return (
    <StyledHeader>
      <Icons.FullLogo />
      <NavContainer>
        <StyledATag style={{ color: "#3A10E5" }} href="#">
          tests
        </StyledATag>
        <StyledATag style={{ color: "#4C4859" }} href="#">
          submitted results
        </StyledATag>
        <StyledButton variant="outlined">LOG OUT</StyledButton>
      </NavContainer>
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

const NavContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "60px",
});

const StyledATag = styled("a")({
  textDecoration: "none",
  fontSize: "15px",
  fontFamily: "DIN Next Rounded LT Pro Medium",
  fontWeight: "700",
  lineHeight: "17.58px",
  textTransform: "uppercase",
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
