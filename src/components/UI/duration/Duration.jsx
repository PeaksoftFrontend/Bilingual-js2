import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { theme } from "../../../theme/theme";

export const Duration = ({ minutes = 0, time = 0 }) => {
  const initialTime = minutes * 60 + time;
  const [remainingTime, setRemainingTime] = useState(initialTime);

  useEffect(() => {
    if (remainingTime > 0) {
      const timerId = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [remainingTime]);

  const progress = (remainingTime / initialTime) * 100;
  const displayMinutes = Math.floor(remainingTime / 60);
  const displaySeconds = remainingTime % 60;

  return (
    <StyledContentWrapper>
      <div>
        {displayMinutes}:
        {displaySeconds < 10 ? `0${displaySeconds}` : displaySeconds}
      </div>
      <StyledDiv>
        <div
          theme={theme}
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "rgba(2,17,253,1) ",
            transition: "width 1s linear",
            position: "absolute",
            left: 0,
            borderRadius: "5px",
          }}
        ></div>
      </StyledDiv>
    </StyledContentWrapper>
  );
};

const StyledDiv = styled("div")({
  width: "100%",
  height: "10px",
  backgroundColor: "#ddd",
  position: "relative",
  overflow: "hidden",
  borderRadius: "5px",
  marginTop: "0.5rem",
});

const StyledContentWrapper = styled("div")({
  width: "100%",
  textAlign: "start",
  color: "#4C4859",
  fontFamily: "DINNextRoundedLTW04-Medium",
  fontWeight: "bold",
  lineHeight: "24px",
});
