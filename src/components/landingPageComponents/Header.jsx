import { styled } from "@mui/material";
import { motion } from "framer-motion";
import BgImage from "../../assets/images/bgImage.png";
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
} from "../../store/slices/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { Icons } from "../../assets/icons";

export const Header = () => {
  const { openSignIn, openSignUp, isAuth, role } = useSelector(
    (state) => state.auth
  );
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
          <motion.article
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
            >
              Prove your English proficiency today with
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              BILINGUAL
            </motion.h2>
          </motion.article>
          <motion.section
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              For nearly 30 years, learners have turned to Rosetta Stone to
              build the fluency and confidence they need to speak new languages.
            </motion.p>
            <StyledLandingButton
              variant="team"
              onClick={
                role === "GUEST"
                  ? handleOpenSignInModal
                  : () => navigate("/main")
              }
            >
              to begin
            </StyledLandingButton>
          </motion.section>
        </TextContainer>
        <motion.img
          src={BooksFat}
          alt="Books"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        />
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

const MainBlock = styled("div")({
  display: "flex",
  gap: "18px",
});

const StyledLandingButton = styled(LandingButton)({
  fontSize: "14px",
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
