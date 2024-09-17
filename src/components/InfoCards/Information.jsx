import { Grid, Typography, CardContent, Box } from "@mui/material";
import { styled } from "@mui/system";
import ImageInfoOne from "../../assets/images/info_image_1.svg";
import ImageInfoTwo from "../../assets/images/info_image_2.svg";
import ImageInfoThree from "../../assets/images/info_image_3.svg";

export const InfoCards = () => {
  return (
    <StyledGrid>
      <StyledGridContainer>
        <Grid item>
          <StyledBox>
            <ImageInfoOne />
            <CardContent>
              <Typography variant="body1Bold" align="center">
                Over 10,000 fee waivers for the Bilingual English Test are
                offered annually.
              </Typography>
            </CardContent>
          </StyledBox>
        </Grid>

        <Grid item>
          <StyledBox>
            <ImageInfoTwo />
            <CardContent>
              <Typography variant="body1Bold" align="center">
                Students from over 200 countries and territories have
                benefitted.
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
