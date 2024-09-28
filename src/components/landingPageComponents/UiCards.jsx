import { Box, Typography, Card, IconButton, Avatar } from "@mui/material";
import { uiData } from "../../utils/constants/defaultCardData";
import { Slider } from "../UI/swiper/Slider";
import { Icons } from "../../assets/icons/index";
import { styled } from "@mui/system";

export const UiCards = () => {
  const renderSlide = (slide, i, activeIndex) => (
    <StyledCard
      key={i}
      sx={{
        backgroundColor: activeIndex === i ? "#676da8" : "#e6e6e6",
        transform: activeIndex === i ? "scale(1.0009)" : "scale(0.9)",
        transition: "transform 0.3s ease",
      }}
    >
      <AvatarImage src={slide.img} alt={slide.title} />
      <TextContainer>
        <StyledBodyTypography
          sx={{
            color: activeIndex === i ? "#fff" : "#000",
          }}
        >
          {slide.feedback}
        </StyledBodyTypography>
        <StyledTitleTypography
          sx={{
            color: activeIndex === i ? "#fff" : "#3b10e5",
          }}
        >
          - {slide.name}
        </StyledTitleTypography>
        <StyledIconStars>
          <Icons.Stars />
        </StyledIconStars>
      </TextContainer>
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
      <div style={{ width: "1170px" }}>
        <Slider
          data={uiData}
          renderSlide={renderSlide}
          renderPagination={renderPagination}
          slidesPerView={3}
          spaceBetween={0}
          autoplay={false}
          className="app"
        />
      </div>
    </StyledCardWrapper>
  );
};

const AvatarImage = styled(Avatar)({
  width: "200px",
  height: "200px",
  margin: "0 auto 1rem",
  boxShadow: "0 0.3rem 0.6rem rgba(0, 0, 0, 0.1)",
});

const pxToRem = (px) => `${px / 16}rem`;

const StyledCardWrapper = styled("div")({
  padding: `${pxToRem(50)} 0`,
  background: "#FEF5E8",
  display: "flex",
  overflow: "hidden",
  boxSizing: "border-box",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  position: "relative",
});

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: pxToRem(564),
  width: pxToRem(366),
  borderRadius: pxToRem(50),
  padding: theme.spacing(5),
  boxShadow: theme.shadows[3],
  marginBottom: "2rem",
}));

const TextContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "16px",
  gap: pxToRem(15),
  fontWeight: "500",
  width: "100%",
  textAlign: "left",
  marginTop: pxToRem(50),
});

const StyledTitleTypography = styled(Typography)({
  fontSize: pxToRem(17),
  fontWeight: "700",
});

const StyledBodyTypography = styled(Typography)({
  color: "#fff",
});

const StyledPaginationWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  position: "absolute",
  justifyContent: "center",
  bottom: "1%",
  left: "46%",
  gap: pxToRem(16),
  marginTop: pxToRem(24),
});

const StyledArrowForwardButton = styled(IconButton)({
  transform: "scaleX(-1)",
  position: "absolute",
  display: "flex",
  left: "530%",
  bottom: "800%",
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
  position: "absolute",
  right: "549%",
  bottom: "800%",
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
const StyledIconStars = styled("div")({
  fontSize: "10px",
});
