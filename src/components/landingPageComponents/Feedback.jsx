import { Box, Typography, Card, IconButton, Avatar } from "@mui/material";
import { feedbackData } from "../../utils/constants/defaultCardData";
import { Slider } from "../UI/swiper/Slider";
import { Icons } from "../../assets/icons/index";
import { styled } from "@mui/system";

export const Feedback = () => {
  const renderSlide = (slide, i, activeIndex) => (
    <StyledCard key={i} isActive={activeIndex === i}>
      <AvatarImage src={slide.img} alt={slide.title} />
      <TextContainer>
        <StyledBodyTypography isActive={activeIndex === i}>
          {slide.feedback}
        </StyledBodyTypography>
        <StyledTitleTypography isActive={activeIndex === i}>
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

        <PaginationDotsContainer>
          {data.map((_, i) => (
            <StyledPaginationDot key={i} isActive={i === index} />
          ))}
        </PaginationDotsContainer>

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
      <SliderContainer>
        <Slider
          data={feedbackData}
          renderSlide={renderSlide}
          renderPagination={renderPagination}
          slidesPerView={3}
          spaceBetween={0}
          autoplay={true}
        />
      </SliderContainer>
    </StyledCardWrapper>
  );
};

const pxToRem = (px) => `${px / 16}rem`;

const AvatarImage = styled(Avatar)({
  width: "200px",
  height: "200px",
  margin: "0 auto 1rem",
  boxShadow: "0 0.3rem 0.6rem rgba(0, 0, 0, 0.1)",
});

const StyledCardWrapper = styled("div")({
  padding: pxToRem(30),
  background: "#FEF5E8",
  display: "flex",
  overflow: "hidden",
  boxSizing: "border-box",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
});

const StyledCard = styled(Card)(({ isActive, theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: pxToRem(564),
  width: pxToRem(366),
  borderRadius: pxToRem(50),
  padding: theme.spacing(5),
  boxShadow: theme.shadows[3],
  marginBottom: "2rem",
  backgroundColor: isActive ? "#676da8" : "#e6e6e6",
  transform: isActive ? "scale(1.0009)" : "scale(0.9)",
  transition: "transform 0.3s ease",
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

const StyledTitleTypography = styled(Typography)(({ isActive }) => ({
  fontSize: pxToRem(17),
  fontWeight: "700",
  color: isActive ? "#fff" : "#3b10e5",
}));

const StyledBodyTypography = styled(Typography)(({ isActive }) => ({
  color: isActive ? "#fff" : "#000",
}));

const StyledPaginationWrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: pxToRem(16),
  marginTop: pxToRem(24),
});

const StyledArrowForwardButton = styled(IconButton)({
  transform: "scaleX(-1)",
  zIndex: "10",
  position: "relative",
  bottom: "400px",
  left: "50px",
  display: "flex",
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
  zIndex: "10",
  position: "relative",
  bottom: "400px",
  right: "75px",
  display: "flex",
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

const PaginationDotsContainer = styled(Box)({
  display: "flex",
  gap: "1rem",
  alignItems: "center",
});

const SliderContainer = styled("div")({
  width: "1170px",
});
