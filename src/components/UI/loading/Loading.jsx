import { Box, styled, keyframes } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const rotatePage2 = keyframes`
  0% {
    transform: rotateY(180deg);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  35%, 100% {
    opacity: 0;
  }
  50%, 100% {
    transform: rotateY(0deg);
  }
`;

const rotatePage3 = keyframes`
  15% {
    transform: rotateY(180deg);
    opacity: 0;
  }
  35% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0;
  }
  65%, 100% {
    transform: rotateY(0deg);
  }
`;

const rotatePage4 = keyframes`
  30% {
    transform: rotateY(180deg);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  65%, 100% {
    opacity: 0;
  }
  80%, 100% {
    transform: rotateY(0deg);
  }
`;

const rotatePage5 = keyframes`
  45% {
    transform: rotateY(180deg);
    opacity: 0;
  }
  65% {
    opacity: 1;
  }
  80%, 100% {
    opacity: 0;
  }
  95%, 100% {
    transform: rotateY(0deg);
  }
`;

const getAnimation = (index) => {
  switch (index) {
    case 1:
      return rotatePage2;
    case 2:
      return rotatePage3;
    case 3:
      return rotatePage4;
    case 4:
      return rotatePage5;
    default:
      return null;
  }
};

const StyledContainer = styled(Box)({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(12, 12, 12, 0.4)",
  zIndex: 2000,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Loader = styled(Box)({
  "--background": "linear-gradient(135deg, #833fac, #3a10e5)",
  "--shadow": "#3b10e550",
  "--page": "rgba(255, 255, 255, 0.9)",
  "--page-fold": "rgba(255, 255, 255, 0.6)",
  "--duration": "1s",
  width: "160px",
  height: "110px",
  position: "relative",
  "&:before, &:after": {
    content: '""',
    position: "absolute",
    bottom: "8px",
    width: "120px",
    height: "80%",
    backdropFilter: "blur(10px)",
    boxShadow: "0 16px 12px var(--shadow)",
    transform: "rotate(-6deg)",
  },
  "&:before": { left: "4px" },
  "&:after": { right: "4px", transform: "rotate(6deg)" },
});

const Book = styled(Box)({
  width: "100%",
  height: "100%",
  borderRadius: "13px",
  position: "relative",
  zIndex: 1,
  perspective: "600px",
  boxShadow: "0 4px 6px var(--shadow)",
  backgroundImage: "var(--background)",
});

const Pages = styled("ul")({
  margin: 0,
  padding: 0,
  listStyle: "none",
  position: "relative",
});

const Page = styled("li")(({ index }) => ({
  "--r": "180deg",
  "--o": "0",
  "--c": index === 0 || index === 5 ? "var(--page)" : "var(--page-fold)",
  position: "absolute",
  top: "5px",
  left: "10px",
  transformOrigin: "100% 50%",
  color: "var(--c)",
  opacity: "var(--o)",
  transform: `rotateY(var(--r))`,
  animation: `${getAnimation(index)} var(--duration) ease infinite`,
}));

const SvgIcon = styled("svg")({
  width: "70px",
  height: "100px",
  display: "block",
});

export const Loading = () => (
  <StyledContainer>
    <Loader>
      <Book>
        <Pages>
          {[...Array(6)].map((_, index) => (
            <Page key={uuidv4()} index={index}>
              <SvgIcon fill="currentColor" viewBox="0 0 90 120">
                <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z" />
              </SvgIcon>
            </Page>
          ))}
        </Pages>
      </Book>
    </Loader>
  </StyledContainer>
);
