import React from "react";
import { Grid, Typography, CardContent, Box } from "@mui/material";
import { styled } from "@mui/system";
import ImageInfoOne from "../../assets/images/info_image_1.svg";
import ImageInfoTwo from "../../assets/images/info_image_2.svg";
import ImageInfoThree from "../../assets/images/info_image_3.svg";

export const InfoCards = () => {
  return (
    <StyledGrid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={15}
    >
      <Grid item>
        <StyledBox>
          <ImageInfoOne />
          <CardContent>
            <Typography variant="body1Bold" align="center">
              Over 10,000 fee waivers for the Bilingual English Test are offered
              annually.
            </Typography>
          </CardContent>
        </StyledBox>
      </Grid>

      <Grid item>
        <StyledBox>
          <ImageInfoTwo />
          <CardContent>
            <Typography variant="body1Bold" align="center">
              Students from over 200 countries and territories have benefitted.
            </Typography>
          </CardContent>
        </StyledBox>
      </Grid>

      <Grid item>
        <StyledBox>
          <ImageInfoThree />
          <CardContent>
            <Typography variant="body1Bold" align="center">
              Eligible students can take the test with absolutely zero cost to
              them.
            </Typography>
          </CardContent>
        </StyledBox>
      </Grid>
    </StyledGrid>
  );
};

const StyledGrid = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(15), // 15 * 8px = 120px
  backgroundColor: "#FEF5E8",
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
