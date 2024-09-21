import { Box, Typography, Card, IconButton } from "@mui/material";
import { defaultImageSlider } from "../../utils/constants/defaultCardData";
import { Slider } from "../UI/slider/Slider";
import { Icons } from "../../assets/icons/index";
import { styled } from "@mui/system";

export const InfoSlider = () => {
  const renderSlide = (slide) => (
    <StyledCard sx={{ backgroundColor: slide.bgColor }}>
      <TextContainer>
        <StyledTitleTypography sx={{ color: slide.color }}>
          {slide.title}
        </StyledTitleTypography>

        <StyledBodyTypography>{slide.description}</StyledBodyTypography>
      </TextContainer>
      <ImageContainer>
        <StyledImage src={slide.img} alt="Slide Image" />
      </ImageContainer>
    </StyledCard>
  );

  const renderPagination = ({ handlePrev, handleNext, index, data }) => (
    <>
      <StyledPaginationWrapper>
        <StyledArrowButton onClick={handlePrev}>
          <Icons.ArrowBack />
        </StyledArrowButton>

        {data.map((_, i) => (
          <StyledPaginationDot key={i} isActive={i === index} />
        ))}

        <StyledArrowForwardButton onClick={handleNext}>
          <Icons.ArrowForward />
        </StyledArrowForwardButton>
      </StyledPaginationWrapper>
    </>
  );

  return (
    <StyledCardWrapper>
      <TitleContainer>
        <Typography variant="h1Bold">Check out each question type</Typography>
      </TitleContainer>
      <Slider
        data={defaultImageSlider}
        renderSlide={renderSlide}
        renderPagination={renderPagination}
        slidesPerView={2}
        spaceBetween={30}
      />
    </StyledCardWrapper>
  );
};

const pxToRem = (px) => `${px / 16}rem`;

const StyledCardWrapper = styled("div")({
  padding: `${pxToRem(50)} 0`,
  background: "#FEF5E8",
  boxSizing: "border-box",
  textAlign: "center",
  "& .swiper-backface-hidden .swiper-slide": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& :active": {
      cursor: "grabbing",
    },
  },
});

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  width: pxToRem(828),
  height: pxToRem(400),
  borderRadius: pxToRem(70),
  borderBottomLeftRadius: pxToRem(0),
  padding: theme.spacing(5),
  boxShadow: theme.shadows[3],
}));

const TextContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: pxToRem(25),
  width: "70%",
  textAlign: "left",
});

const StyledTitleTypography = styled(Typography)({
  fontSize: pxToRem(35),
});

const StyledBodyTypography = styled(Typography)({
  color: "#fff",
});

const ImageContainer = styled(Box)({
  width: pxToRem(262.52),
  height: pxToRem(319.44),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

const StyledPaginationWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: pxToRem(16),
  marginTop: pxToRem(24),
});

const StyledArrowForwardButton = styled(IconButton)({
  transform: "scaleX(-1)",
  "&:hover svg circle": {
    stroke: "#4B00A2",
    fill: "#4B00A2",
    background: "#4B00A2",
  },
  "&:hover svg path": {
    fill: "#fff",
  },
});

const StyledArrowButton = styled(IconButton)({
  "&:hover svg circle": {
    stroke: "#4B00A2",
    fill: "#4B00A2",
    background: "#4B00A2",
  },
  "&:hover svg path": {
    fill: "#fff",
  },
});

const StyledPaginationDot = styled(Box)(({ isActive }) => ({
  width: pxToRem(6),
  height: isActive ? pxToRem(30) : pxToRem(16),
  backgroundColor: isActive ? "#4B00A2" : "#E0D7FF",
  borderRadius: "20px",
  marginBottom: isActive ? pxToRem(12) : pxToRem(0),
}));

const TitleContainer = styled("div")({
  marginBottom: pxToRem(48),
  color: "#4B00A2",
});
