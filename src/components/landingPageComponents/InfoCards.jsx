import { Grid, Typography, CardContent, Box } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { defaultCardData } from "../../utils/constants/defaultCardData";
export const InfoCards = ({ cardData = defaultCardData }) => {
  return (
    <StyledGrid>
      <StyledGridContainer>
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
          >
            {" "}
            <Grid item>
              {" "}
              <StyledBox>
                {" "}
                <motion.img
                  src={card.imgSrc}
                  alt=""
                  style={styledImgStyles(index === 1)}
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                />{" "}
                <CardContent>
                  {" "}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  >
                    {" "}
                    <Typography variant="body1Bold" align="center">
                      {" "}
                      {card.text}{" "}
                    </Typography>{" "}
                  </motion.div>{" "}
                </CardContent>{" "}
              </StyledBox>{" "}
            </Grid>{" "}
          </motion.div>
        ))}{" "}
      </StyledGridContainer>{" "}
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
const styledImgStyles = (isSpecial) => ({
  width: isSpecial ? "16rem" : "18.813rem",
  height: "11rem",
});
