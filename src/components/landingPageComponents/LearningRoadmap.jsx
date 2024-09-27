import { Grid, Typography, keyframes, styled } from "@mui/material";
import sphere from "../../assets/images/sphere.png";
import lab from "../../assets/images/lab.png";
import castle from "../../assets/images/castle.png";
import dashboard from "../../assets/images/dashboard.png";
import laptop from "../../assets/images/laptop.png";
import Roadmap from "../../assets/icons/icon/Dots.svg";
import { animation, textAnimation } from "../../utils/constants/animation";
import { motion } from "framer-motion";
import { LandingButton } from "../UI/button/LandingButton";

const dash = keyframes`
  to {
    stroke-dashoffset: 0;  
  } from {
    stroke-dashoffset: 300;
  }
`;

const infoAnimation = {
  hidden: {
    opacity: 0,
    x: -500,
  },
  visible: (custom) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom * 0.3, duration: 1 },
    visibility: true,
  }),
};

const secondInfoAnimation = {
  hidden: {
    opacity: 0,
    x: 500,
  },
  visible: (custom) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom * 0.3, duration: 1 },
  }),
};

export const LearningRoadmap = () => {
  return (
    <Background>
      <div style={{ height: "100vh" }}></div>
      <Contain>
        <TitleContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={textAnimation}
        >
          <Title>Learn more</Title>
        </TitleContainer>
        <StyledIcon />
        <Container
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
        >
          <motion.div variants={infoAnimation}>
            <Title1>Expand your applicant pool</Title1>
            <Text1>
              Tap into a diverse pool of candidates from 100+ countries and
              <br />
              territories of origin, who have taken the Bilingual English Test{" "}
              <br /> because of its radical accessibility.
            </Text1>
          </motion.div>
          <StyledGlobusIcon
            variants={animation}
            custom={0.7}
            style={{ position: "relative", zIndex: 1 }}
          />
        </Container>
        <Container1
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
        >
          <StyledResearchIcon
            variants={animation}
            custom={0.7}
            style={{ position: "relative", zIndex: 1 }}
          />
          <motion.div
            style={{ overflow: "hidden" }}
            variants={secondInfoAnimation}
          >
            <Title2>Built on the latest assessment science</Title2>
            <Text2>
              The Duolingo English Test is a computer adaptive test backed
              <br />
              by rigorous research, with results that are highly correlated
              <br />
              with other major assessments such as the TOEFL and the
              <br /> IELTS.
            </Text2>
          </motion.div>
        </Container1>
        <Container2
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
        >
          <motion.div variants={infoAnimation}>
            <Title1>Innovative test security</Title1>
            <Text1>
              Industry-leading security protocols, individual test proctoring,
              <br />
              and computer adaptive technology help prevent fraud and <br />
              cheating and ensure results you can trust.
            </Text1>
          </motion.div>
          <StyledSecuryIcon
            variants={animation}
            custom={0.7}
            style={{ position: "relative", zIndex: 1 }}
          />
        </Container2>
        <Container3
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
        >
          <StyledDashboardIcon
            variants={animation}
            custom={0.7}
            style={{ position: "relative", zIndex: 1 }}
          />
          <motion.div variants={secondInfoAnimation}>
            <Title2>Convenient results dashboard</Title2>
            <Text2>
              Access candidates’ certificates, video interviews, and writing
              <br />
              samples through a free and secure dashboard. Quickly and
              <br /> easily view applicant data with filtering tools.
            </Text2>
          </motion.div>
        </Container3>
        <Container4
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
        >
          <motion.div variants={infoAnimation}>
            <Title1>Secure Design</Title1>
            <Text1>
              Adaptive test engine dynamically administers test questions
              <br /> from a database of hundreds of thousands of items.
              <br /> Someone would have to take the test more than 1,000 times
              <br /> to see a question repeated.
            </Text1>
          </motion.div>
          <StyledDesignIcon
            variants={animation}
            custom={0.7}
            style={{ position: "relative", zIndex: 1 }}
          />
        </Container4>
        <StyledButton
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={textAnimation}
        ></StyledButton>
        <LandingButton
          variant="team"
          style={{
            fontSize: "14px",
            margin: "4rem auto",
          }}
        >
          Get Started
        </LandingButton>
      </Contain>
    </Background>
  );
};

const Background = styled(motion(Grid))(() => ({
  width: "100%",
  zIndex: "-2",
  overflow: "hidden",
  backgroundColor: "#FEF5E8",
  display: "flex",
  justifyContent: "center",
  position: "relative",
}));
const Contain = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

const TitleContainer = styled(motion(Grid))(() => ({
  textAlign: "center",
}));

const Title = styled(Typography)(() => ({
  fontWeight: "700",
  fontSize: "40px",
  lineHeight: "48px",
  color: "#3752B4",
}));

const StyledIcon = styled(Roadmap)(() => ({
  position: "absolute",
  zIndex: "-1",
  left: "0",
  right: "0",
  margin: "107px auto",
  path: {
    strokeDasharray: "18.56 18.56",
    animation: `${dash} 3.5s infinite linear forwards`,
  },
}));

// Replaced icons with imported images
const StyledGlobusIcon = styled(motion.img)(() => ({
  content: `url(${sphere})`,
  objectFit: "contain",
  width: "16rem",
  height: "9rem",
}));

const StyledResearchIcon = styled(motion.img)(() => ({
  content: `url(${lab})`,
  objectFit: "contain",
  width: "16rem",
  height: "9rem",
}));

const StyledSecuryIcon = styled(motion.img)(() => ({
  content: `url(${castle})`,
  width: "12rem",
  height: "9rem",
  objectFit: "contain",
}));

const StyledDashboardIcon = styled(motion.img)(() => ({
  content: `url(${dashboard})`,
  width: "16rem",
  height: "9rem",
  objectFit: "contain",
}));

const StyledDesignIcon = styled(motion.img)(() => ({
  content: `url(${laptop})`,
  width: "16rem",
  height: "9rem",
  objectFit: "contain",
}));

const Title1 = styled(Typography)(() => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "24px",
  lineHeight: "36px",
  color: "#23212A",
  marginBottom: "16px",
}));

const Text1 = styled(Typography)(() => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "24px",
  color: "#23212A",
}));

const Title2 = styled(Typography)(() => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "24px",
  lineHeight: "120%",
  color: "#23212A",
  marginBottom: "16px",
}));

const Text2 = styled(Typography)(() => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "24px",
  color: "#23212A",
}));

const Container = styled(motion(Grid))(() => ({
  display: "flex",
  gap: "80px",
  marginTop: "4rem",
  marginRight: "33rem",
}));
const Container1 = styled(motion(Grid))(() => ({
  display: "flex",
  alignItems: "center",
  gap: "80px",
  justifyContent: "center",
  marginTop: "20rem",
  marginLeft: "10rem",
}));
const Container2 = styled(motion(Grid))(() => ({
  display: "flex",
  marginTop: "10rem",
  gap: "17rem",
}));
const Container3 = styled(motion(Grid))(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "6rem",
  gap: "7rem",
  marginTop: "12rem",
}));
const Container4 = styled(motion(Grid))(() => ({
  display: "flex",
  alignItems: "center",
  marginTop: "6rem",
  justifyContent: "center",
  gap: "12rem",
  marginRight: "25rem",
}));

const StyledButton = styled(motion(Grid))(() => ({
  textAlign: "center",
  marginTop: "96px",
}));
