import { useEffect, useState } from "react";

export const CountdownTimer = ({ time }) => {
  const [remainingTime, setRemainingTime] = useState(time);

  useEffect(() => {
    if (remainingTime > 0) {
      const timerId = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [remainingTime]);

  // Calculate the progress as a percentage
  const progress = (remainingTime / time) * 100;

  return (
    <div style={{ width: "300px", textAlign: "center" }}>
      <div>{remainingTime}s</div>
      <div
        style={{
          width: "100%",
          height: "10px",
          backgroundColor: "#ddd",
          position: "relative",
          overflow: "hidden",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "blue",
            transition: "width 1s linear",
            position: "absolute",
            right: 0,
          }}
        ></div>
      </div>
    </div>
  );
};
