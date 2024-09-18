import { styled } from "@mui/material";
import BgImage from "../../assets/images/bgImage.png";
import { Button } from "../UI/Button";
import Books from "../../assets/images/books.png";

export const Header = () => {
  return (
    <HeaderStyled $bgImg={BgImage}>
      <Container>
        <BtnContainer>
          <StyledBtn>to come in</StyledBtn>
          <SecondBtn>register</SecondBtn>
        </BtnContainer>
      </Container>
      <StyledImgContainer>
        <TextContainer>
          <h1>Prove your English proficiency today with</h1>
          <h2>BILINGUAL</h2>
        </TextContainer>
        <ImgBlock>
          <img src={Books} alt="Books" />
        </ImgBlock>
      </StyledImgContainer>
    </HeaderStyled>
  );
};

const HeaderStyled = styled("header")(({ $bgImg }) => ({
  width: "100%",
  height: "100vh",
  backgroundColor: "#FCD200",
  backgroundImage: `url(${$bgImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "left bottom",
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
});

const TextContainer = styled("div")({
  width: "635px",
  height: "219px",
  fontSize: "60px",

  "& h1": {
    fontFamily: "Gilroy",
    fontWeight: "700",
    color: "#43404E",
  },
  "& h2": {
    fontWeight: "600",
    color: "#C93D7D",
  },
});

const ImgBlock = styled("div")({
  // display: "flex",
  // justifyContent: "flex-end",
});

const StyledImgContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
