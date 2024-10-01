import { useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { dataForSlider } from "../../utils/constants/general";
import { styled } from "@mui/system";

export const InfinitySlider = () => {
  const sliderRef = useRef(null);

  const [{ x }, api] = useSpring(() => ({
    from: { x: 0 },
    to: { x: -(300 / dataForSlider.length) * 3 },
    config: { duration: 6000, easing: (t) => t },
    loop: true,
  }));

  useEffect(() => {
    api.start();
  }, [api]);

  const items = [...dataForSlider, ...dataForSlider, ...dataForSlider];

  return (
    <StyledAllContainer>
      <StyledContainerName>Partners</StyledContainerName>
      <SliderContainer ref={sliderRef}>
        <animated.div
          style={{
            display: "flex",
            transform: x.to((a) => `translateX(${a}%)`),
            willChange: "transform",
          }}
        >
          {items.map((item, index) => (
            <SliderItem key={index}>
              <SliderImage src={item.logo} alt={`Logo ${item.id}`} />
            </SliderItem>
          ))}
        </animated.div>
      </SliderContainer>
    </StyledAllContainer>
  );
};

const StyledAllContainer = styled("div")({
  width: "100%",
  height: "100vh",
  backgroundColor: "#fef5e8",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "2.5rem",
});

const StyledContainerName = styled("h1")({
  fontFamily: "Gilroy",
  fontSize: "40px",
  fontWeight: "700",
  color: "#3a10e5",
});

const SliderContainer = styled("div")({
  overflow: "hidden",
  width: "100%",
  position: "relative",
  whiteSpace: "nowrap",
});

const SliderItem = styled("div")({
  minWidth: "12.5rem",
  margin: "0 0.625rem",
  textAlign: "center",
});

const SliderImage = styled("img")({
  width: "12rem",
  height: "7.2rem",
});
