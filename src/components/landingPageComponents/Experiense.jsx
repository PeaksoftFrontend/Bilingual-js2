import { Box, styled } from "@mui/material";
import { data } from "../../utils/constants/general";
import GlobusUserExperienceImage from "../../assets/images/globus-user-experience.png";
import BookImage from "../../assets/images/book.png";
import LearnImage from "../../assets/images/learn.png";
import ReadingImage from "../../assets/images/reading.png";
import { motion } from "framer-motion";

export const Experiense = () => {
  return (
    <StyledFon>
      <StyledAllWrapper>
        <StyledWrapper>
          <StyledName>Unparalleled user experience</StyledName>
          <StyledPharagraph>
            The most effective way to perfect a language is by immersing
            yourself in it. Rosetta Stone for Enterprise delivers an effective
            end-to-end experience, founded on a wealth of carefully structured
            content. Each learner has the opportunity to balance independent
            study with optional online tutoring in a way that fits their
            schedule and language learning goals.
          </StyledPharagraph>
        </StyledWrapper>
        <StyledContainer>
          {data.map((item) => (
            <StyleDiv key={item.id}>
              <StyleImg src={item.img} alt="" />
              <p>{item.des}</p>
            </StyleDiv>
          ))}
        </StyledContainer>
      </StyledAllWrapper>
      <StyledGlobusBox>
        <img src={GlobusUserExperienceImage} alt="globus" className="globus" />

        <StyledAnimationsImagesBox>
          <StyledBookImage
            src={BookImage}
            variants={PULSE_ANIMATION}
            initial="offscreen"
            whileInView="onscreen"
            animate="animate"
            loading="lazy"
            alt="book"
          />

          <StyledLearnImage
            src={LearnImage}
            variants={ANIMATE}
            initial="offscreen"
            whileInView="onscreen"
            animate="animate"
            loading="lazy"
            alt="learn"
          />

          <StyledReadingImage
            src={ReadingImage}
            variants={ANIMATE}
            initial="offscreen"
            whileInView="onscreen"
            animate="animate"
            loading="lazy"
            alt="reading"
          />
        </StyledAnimationsImagesBox>
      </StyledGlobusBox>
    </StyledFon>
  );
};

const StyledPharagraph = styled("p")`
  font-size: 1rem;
  font-weight: 400;
  line-height: 2rem;
  width: 40rem;
  height: 7.5rem;
`;
const StyledName = styled("h2")`
  width: 20.5rem;
  height: 6rem;
  color: #3752b4;
  font-size: 2.5rem;
  font-family: Gilroy;
`;
const StyledFon = styled("div")`
  width: 100%;
  height: 80vh;
  background-color: #fef5e8;
  display: flex;
  gap: 9rem;
  justify-content: center;
  align-items: center;
`;
const StyleImg = styled("img")`
  width: 2.7575rem;
  object-fit: cover;
`;
const StyleDiv = styled("div")`
  width: 14.3825rem;
  height: 3.125rem;
  gap: 1.625rem;
  display: flex;
  align-items: center;
  & > p {
    width: 10rem;
    height: 2.75rem;
  }
`;
const StyledContainer = styled("div")`
  width: 31.25rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.875rem;
`;
const StyledWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;
const StyledAllWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const StyledGlobusBox = styled(Box)(({ theme }) => ({
  marginTop: "40px",
  [theme.breakpoints.down("lg")]: {
    position: "absolute",
    left: "30rem",
  },

  "& > .globus": {
    marginTop: "1.0625rem",
    width: "27.52988rem",
    height: "26.25rem",
    marginLeft: "3rem",
  },
}));

const StyledAnimationsImagesBox = styled(Box)(() => ({
  position: "relative",
  right: "48rem",
  bottom: "28rem",
}));

const StyledBookImage = styled(motion.img)(() => ({
  position: "absolute",
  width: "22.11994rem",
  height: "18.65006rem",
  left: "52.5rem",
  top: "6.5rem",
  animation: `${PULSE_ANIMATION} 2s infinite`,
}));

const StyledLearnImage = styled(motion.img)(() => ({
  width: "5.312rem",
  height: "3.65719rem",
  position: "relative",
  left: "52rem",
  top: "5rem",
}));

const StyledReadingImage = styled(motion.img)(() => ({
  width: "5.17588rem",
  height: "3.52131rem",
  position: "relative",
  zIndex: "10",
  left: "66rem",
  top: "7rem",
}));

const ANIMATE = {
  offscreen: {
    opacity: 0,
  },

  onscreen: {
    opacity: 1,
    transition: {
      duration: 1,
      damping: 3,
    },
  },

  animate: {
    rotate: [-2, 3, -7, 4, 4],

    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const PULSE_ANIMATION = {
  animate: {
    scale: [0.9, 0.95, 0.9],

    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
