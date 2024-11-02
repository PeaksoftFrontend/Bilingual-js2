import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { LandingButton } from "../../components/UI/button/LandingButton";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Title variant="h1">404</Title>
      <Subtitle variant="h5">Oops! This page could not be found.</Subtitle>
      <StyledLandingButton variant="team" onClick={() => navigate("/")}>
        go to Home
      </StyledLandingButton>
    </Container>
  );
};

const Container = styled(Box)({
  width: "100%",
  height: "100vh",
  background: "linear-gradient(135deg, #FCD200, #FEF5E8)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "20px",
  animation: "fadeIn 1s ease-out",
  "@keyframes fadeIn": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
});

const Title = styled(Typography)({
  fontSize: "96px",
  color: "#C93D7D",
  fontWeight: "bold",
  marginBottom: "16px",
  animation: "slideIn 1s ease-out",
  "@keyframes slideIn": {
    from: { transform: "translateY(-20px)", opacity: 0 },
    to: { transform: "translateY(0)", opacity: 1 },
  },
});

const Subtitle = styled(Typography)({
  fontSize: "24px",
  color: "#3A10E5",
  marginBottom: "40px",
  maxWidth: "600px",
  lineHeight: 1.6,
  animation: "fadeInSubtitle 1.5s ease-in-out",
  "@keyframes fadeInSubtitle": {
    from: { opacity: 0, transform: "translateY(10px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
});

const StyledLandingButton = styled(LandingButton)(() => ({
  fontSize: "16px",
}));
