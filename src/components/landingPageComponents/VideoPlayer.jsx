import { useState, useRef } from "react";
import { Grid, Typography, Box, styled } from "@mui/material";
import { dataVideo } from "../../utils/constants/general";
import { Icons } from "../../assets/icons";

const VideoPlayer = ({ videoSrc, title }) => {
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = (event) => {
    const videoDuration = event.target.duration;
    setDuration(videoDuration);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const remainingTime = duration - currentTime;

  return (
    <VideoCard>
      <VideoContainer container onClick={handlePlayPause}>
        <StyledVideo
          onLoadedMetadata={handleLoadedMetadata}
          ref={videoRef}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
        >
          <source src={videoSrc} />
          Your browser does not support the video tag.
        </StyledVideo>

        {!isPlaying && (
          <CenteredIconWrapper>
            <StyledBackdropIcon>
              <Icons.PlayIcon />
            </StyledBackdropIcon>
          </CenteredIconWrapper>
        )}
      </VideoContainer>

      <VideoInfo>
        <StyledTitle variant="h6" sx={{ fontWeight: 600 }}>
          {title}
        </StyledTitle>
        <Typography variant="body2">
          Duration: {formatTime(remainingTime)}
        </Typography>
      </VideoInfo>
    </VideoCard>
  );
};

export const VideoGallery = () => {
  return (
    <StyledAllContainer>
      <Grid container spacing={10} justifyContent="center">
        {dataVideo.map((item, index) => (
          <Grid item key={index}>
            <VideoPlayer videoSrc={item.video} title={item.title} />
          </Grid>
        ))}
      </Grid>
    </StyledAllContainer>
  );
};

const StyledBackdropIcon = styled("span")({
  backgroundColor: "#fef5e8",
  borderRadius: "50%",
  width: "60px",
  height: "60px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const StyledAllContainer = styled("div")({
  width: "100%",
  height: "100vh",
  backgroundColor: "#fef5e8",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const VideoCard = styled(Box)({
  borderRadius: "1rem",
  overflow: "hidden",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

const VideoContainer = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "210px",
  borderRadius: theme.shape.borderRadius,
  position: "relative",
  cursor: "pointer",
  overflow: "hidden",
}));

const StyledVideo = styled("video")({
  width: "310px",
  height: "280px",
  objectFit: "cover",
});

const CenteredIconWrapper = styled("div")(() => ({
  fontSize: 64,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
}));

const StyledTitle = styled("h3")({
  color: "#3a10e5",
  fontSize: "1.5rem",
  fontWeight: "900",
});

const VideoInfo = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "left",
}));
