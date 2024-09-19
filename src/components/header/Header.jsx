import { styled } from "@mui/material";
import BgImage from "../../assets/images/bgImage.png";
import { Button } from "../UI/Button";
import { Icons } from "../../assets/icons/index";
import BooksFat from "../../assets/images/booksAndFat.png";

export const Header = () => {
  return (
    <HeaderStyled $bgImg={BgImage}>
      <Container>
        <Icons.FullLogo />
        <BtnContainer>
          <StyledBtn>to come in</StyledBtn>
          <SecondBtn>register</SecondBtn>
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
            <Button>to begin</Button>
          </section>
        </TextContainer>
        <img src={BooksFat} alt="Books" />
      </MainBlock>
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
  padding: "27px 80px",
}));

const Container = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const BtnContainer = styled("section")({
  display: "flex",
  gap: "24px",
});

const StyledBtn = styled(Button)({
  width: "122px",
});

const SecondBtn = styled(Button)({
  width: "113px",
  backgroundColor: "white",
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
    fontWeight: "400px",
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
  gap: "60px",
  padding: "120px 0 0 0",
});
