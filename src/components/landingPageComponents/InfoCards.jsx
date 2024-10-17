import { Grid, Typography, CardContent, Box } from "@mui/material";
import { styled } from "@mui/system";
import { defaultCardData } from "../../utils/constants/defaultCardData";
import { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

export const InfoCards = ({ cardData = defaultCardData }) => {
  const [startAnimations, setStartAnimations] = useState(
    new Array(cardData.length).fill(false)
  );

  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            setStartAnimations((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
            observer.disconnect();
          }
        });
        observer.observe(ref);
        return observer;
      }
      return null;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [cardData.length]);

  return (
    <StyledGrid>
      <StyledGridContainer>
        {cardData.map((card, index) => (
          <Grid item key={index}>
            <StyledBox ref={(el) => (cardRefs.current[index] = el)}>
              <StyledImg src={card.imgSrc} alt="" isSpecial={index === 1} />
              <CardContent>
                <Typography variant="body1Bold" align="center">
                  {card.text}
                </Typography>
                {index === 0 && startAnimations[0] && (
                  <StyledNumbers>
                    <CountUp start={0} end={10000} duration={2} separator="," />
                  </StyledNumbers>
                )}
                {index === 1 && startAnimations[1] && (
                  <StyledNumbers>
                    <CountUp start={0} end={200} duration={2} separator="," />
                  </StyledNumbers>
                )}
              </CardContent>
            </StyledBox>
          </Grid>
        ))}
      </StyledGridContainer>
    </StyledGrid>
  );
};

const StyledGrid = styled(Box)(({ theme }) => ({
  padding: theme.spacing(15),
  backgroundColor: "#FEF5E8",
}));

const StyledGridContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(15),
}));

const StyledBox = styled(Box)({
  maxWidth: 335,
  maxHeight: 248,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
});

const StyledImg = styled("img")(({ isSpecial }) => ({
  width: isSpecial ? "16rem" : "18.813rem",
  height: "11rem",
}));

const StyledNumbers = styled(Typography)({
  fontSize: "45px",
  fontWeight: "bold",
  backgroundColor: "white",
  color: "#4c4c4c",
});
