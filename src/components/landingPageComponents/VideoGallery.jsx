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
        <VideoWrapper>
          <StyledVideo
            onLoadedMetadata={handleLoadedMetadata}
            ref={videoRef}
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
          >
            <source src={videoSrc} />
            Your browser does not support the video tag.
          </StyledVideo>
        </VideoWrapper>

        {!isPlaying && (
          <CenteredIconWrapper>
            <Icons.arrowIcon />
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
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "10px",
});

const VideoContainer = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  borderRadius: theme.shape.borderRadius,
  position: "relative",
  cursor: "pointer",
  overflow: "hidden",
}));

const VideoWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
});

const StyledVideo = styled("video")({
  width: "310px",
  height: "280px",
  objectFit: "cover",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "16px 16px 0 0",
});

const CenteredIconWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
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
