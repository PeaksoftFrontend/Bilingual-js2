import { styled } from "@mui/material";
import BgImage from "../../assets/images/bgImage.png";
import { Icons } from "../../assets/icons/index";
import BooksFat from "../../assets/images/booksAndFat.png";
import { LandingButton } from "../UI/button/LandingButton";
import { Button } from "../UI/button/Button";
import { useEffect, useState } from "react";
import { SignIn } from "../../auth/SignIn";
import { SignUp } from "../../auth/SignUp";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModal,
  openSignInModal,
  openSignUpModal,
} from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { openSignIn, openSignUp, isAuth } = useSelector((state) => state.auth);
  const [isScroled, setIsScroled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScrol = () => {
      if (window.scrollY > 0) {
        setIsScroled(true);
      } else {
        setIsScroled(false);
      }
    };
    window.addEventListener("scroll", handleScrol);
    return () => {
      window.removeEventListener("scroll", handleScrol);
    };
  }, []);

  const handleOpenSignInModal = () => {
    dispatch(openSignInModal());
  };
  const handleOpenSignUpModal = () => {
    dispatch(openSignUpModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <HeaderStyled $bgImg={BgImage}>
      <Container isScroled={isScroled}>
        <Icons.FullLogo />
        <BtnContainer>
          <StyledBtn onClick={handleOpenSignInModal}>to come in</StyledBtn>
          <SecondBtn onClick={handleOpenSignUpModal}>register</SecondBtn>
        </BtnContainer>
      </Container>
      <MainBlock>
        <TextContainer>
          <article>
            <h1>Prove your English proficiency today with</h1>
            <h2>BILINGUAL</h2>
          </article>
          <section>
            <p>
              For nearly 30 years, learners have turned to Rosetta Stone to
              build the fluency and confidence they need to speak new languages.
            </p>
            <StyledLandingButton
              variant="team"
              onClick={() => navigate("/main")}
            >
              to begin
            </StyledLandingButton>
          </section>
        </TextContainer>
        <img src={BooksFat} alt="Books" />
      </MainBlock>
      {isAuth ||
        (openSignIn && <SignIn open={openSignIn} onClose={handleCloseModal} />)}
      {isAuth ||
        (openSignUp && <SignUp open={openSignUp} onClose={handleCloseModal} />)}
    </HeaderStyled>
  );
};

const HeaderStyled = styled("header")(({ $bgImg }) => ({
  width: "100%",
  height: "100vh",
  backgroundColor: "#FCD200",
  backgroundImage: `url(${$bgImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  padding: "150px 0 0 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const Container = styled("div")(({ isScroled }) => ({
  width: "100%",
  height: "90px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "fixed",
  top: "0",
  padding: "0 80px 0 100px",
  backgroundColor: isScroled ? "white" : "transparent",
  transition: "background-color 0.3s ease",
  zIndex: 1000,
}));

const BtnContainer = styled("section")({
  display: "flex",
  gap: "24px",
});

const StyledBtn = styled(Button)({
  width: "122px",
  boxShadow:
    " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
});

const SecondBtn = styled(Button)({
  width: "113px",
  backgroundColor: "white",
  boxShadow:
    " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
  color: "#4C4C4C",
  "&:hover": {
    backgroundColor: "white",
  },
});

const TextContainer = styled("div")({
  width: "635px",
  height: "219px",
  display: "flex",
  flexDirection: "column",
  gap: "26px",

  "& h1, h2": {
    fontSize: "60px",
    fontFamily: "Gilroy",
    fontWeight: "700",
    color: "#43404E",
  },
  "& h2": {
    fontWeight: "800",
    color: "#C93D7D",
  },
  "& section": {
    fontSize: "20px",
    fontWeight: "400",
    color: "#23212A",
    width: "772px",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    "& p": {
      fontFamily: "Poppins",
    },
  },
});

const MainBlock = styled("div")({
  display: "flex",
  gap: "18px",
});

const StyledLandingButton = styled(LandingButton)({
  fontSize: "14px",
});
