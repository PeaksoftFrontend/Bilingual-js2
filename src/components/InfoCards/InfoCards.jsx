import { Grid, Typography, CardContent, Box } from "@mui/material";
import { styled } from "@mui/system";
import { defaultCardData } from "../../utils/constants/defaultCardData";

export const InfoCards = ({ cardData = defaultCardData }) => {
  return (
    <StyledGrid>
      <StyledGridContainer>
        {cardData.map((card, index) => (
          <Grid item key={index}>
            <StyledBox>
              <StyledImg src={card.imgSrc} alt="" />
              <CardContent>
                <Typography variant="body1Bold" align="center">
                  {card.text}
                </Typography>
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

const StyledImg = styled("img")({
  width: "270.96px",
  height: "186px",
});
