import { useState, useRef } from "react";
import { Box, Typography, Card, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { styled } from "@mui/system";
import { defaultImageSlider } from "../../utils/constants/defaultCardData";
import { Slider } from "../Slider/Slider";

export const InfoSlider = () => {
  const [index, setIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.current.slideNext();
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.current.slidePrev();
  };

  return (
    <StyledCardWrapper>
      <StyledTitle>Check out each question type</StyledTitle>

      <Slider
        onSlideChange={(swiper) => setIndex(swiper.realIndex)}
        onSwiperReady={(ref) => (swiperRef.current = ref)}
      >
        {defaultImageSlider.map((slide) => (
          <StyledCard key={slide.id} sx={{ backgroundColor: slide.bgColor }}>
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
        ))}
      </Slider>

      <StyledTrack>
        <StyledPaginationWrapper>
          <StyledArrowButton onClick={handlePrev}>
            <ArrowBack />
          </StyledArrowButton>

          {defaultImageSlider.map((_, i) => (
            <StyledPaginationDot key={i} isActive={i === index} />
          ))}

          <StyledArrowButton onClick={handleNext}>
            <ArrowForward />
          </StyledArrowButton>
        </StyledPaginationWrapper>
      </StyledTrack>
    </StyledCardWrapper>
  );
};

const StyledCardWrapper = styled("div")({
  padding: "3.125rem 0",
  background: "#FEF5E8",
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

const StyledTitle = styled(Typography)({
  textAlign: "center",
  fontSize: "2.5rem",
  color: "#4B00A2",
  marginBottom: "3rem",
});

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  width: "51.75rem",
  height: "25rem",
  borderRadius: "4.375rem",
  borderBottomLeftRadius: "0rem",
  padding: theme.spacing(5),
  boxShadow: theme.shadows[3],
}));

const TextContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "1.5625rem",
  width: "70%",
  textAlign: "left",
});

const StyledTitleTypography = styled(Typography)({
  fontSize: "2.1875rem",
});

const StyledBodyTypography = styled(Typography)({
  color: "#fff",
});

const ImageContainer = styled(Box)({
  width: "16.404rem",
  height: "19.9625rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

const StyledTrack = styled("div")({});

const StyledPaginationWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  marginTop: "1.5rem",
});

const StyledArrowButton = styled(IconButton)({
  border: "2px solid #4B00A2",
  color: "#4B00A2",
  width: "3.5rem",
  height: "3.5rem",
  "&:hover": {
    backgroundColor: "#4B00A2",
    color: "#fff",
  },
});

const StyledPaginationDot = styled(Box)(({ isActive }) => ({
  width: "0.375rem",
  height: isActive ? "1.875rem" : "1rem",
  backgroundColor: isActive ? "#4B00A2" : "#E0D7FF",
  borderRadius: "20px",
  marginBottom: isActive ? "0.75rem" : "0rem",
}));
