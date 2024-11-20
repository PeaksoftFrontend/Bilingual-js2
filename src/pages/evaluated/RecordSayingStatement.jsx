import { useState, useRef } from "react";
import { ContentWrapper } from "../../components/UI/content_wrapper/ContentWrapper";
import * as wavEncoder from "wav-encoder";
import { Duration } from "../../components/UI/duration/Duration";
import speakIcon from "../../assets/images/img-speak 1.png";
import recording from "../../assets/images/recording.png";
import { styled } from "@mui/material";
import { Button } from "../../components/UI/button/Button";

export const RecordSayingStatement = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isRecorded, setIsRecorded] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [isSpeakClicked, setIsSpeakClicked] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const canvasRef = useRef(null);
  const animationIdRef = useRef(null);
  const audioRef = useRef(null);

  const startRecording = async () => {
    setIsRecording(true);
    setIsRecorded(false);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioContextRef.current = new (window.AudioContext ||
        window.webkitAudioContext)();
      analyserRef.current = audioContextRef.current.createAnalyser();
      const source = audioContextRef.current.createMediaStreamSource(stream);
      source.connect(analyserRef.current);

      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];
      mediaRecorderRef.current.start();

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = async () => {
        cancelAnimationFrame(animationIdRef.current);
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });

        const wavBlob = await convertToWav(audioBlob);
        const wavUrl = URL.createObjectURL(wavBlob);
        setAudioUrl(wavUrl);
        setIsRecording(false);
        setIsRecorded(true);

        const audioData = {
          blob: wavBlob,
          url: wavUrl,
          type: wavBlob.type,
          size: wavBlob.size,
        };

        console.log("Записанный аудиофайл:", audioData);

        audioContextRef.current.close();
      };

      visualize();
    } catch {
      setIsRecording(false);
    }
  };

  const handleSpeakClick = () => {
    setIsSpeakClicked(true);
    setTimeout(() => setIsSpeakClicked(false), 200);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
  };

  const reRecord = () => {
    setAudioUrl(null);
    setIsRecorded(false);
    startRecording();
  };

  const convertToWav = async (audioBlob) => {
    const arrayBuffer = await audioBlob.arrayBuffer();
    const audioContext = new AudioContext();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    const encodedWav = await wavEncoder.encode({
      sampleRate: audioBuffer.sampleRate,
      channelData: [audioBuffer.getChannelData(0)],
    });

    return new Blob([encodedWav], { type: "audio/wav" });
  };

  const visualize = () => {
    const canvas = canvasRef.current;
    const canvasCtx = canvas.getContext("2d");
    analyserRef.current.fftSize = 256;
    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      animationIdRef.current = requestAnimationFrame(draw);

      analyserRef.current.getByteFrequencyData(dataArray);

      canvasCtx.fillStyle = "#ffffff";
      canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

      const barCount = 16;
      const barWidth = 8;
      const spacing = 5;
      const centerY = canvas.height / 2;

      const step = Math.floor(bufferLength / barCount);
      dataArray.slice(0, barCount * step).forEach((_, i) => {
        const barData = dataArray.slice(i * step, (i + 1) * step);
        const barHeight = barData.reduce((acc, val) => acc + val, 0) / step / 2;

        const x = i * (barWidth + spacing);
        canvasCtx.fillStyle = "#4a00e0";
        canvasCtx.beginPath();
        canvasCtx.roundRect(
          x,
          centerY - barHeight,
          barWidth,
          barHeight * 2,
          barWidth / 2
        );
        canvasCtx.fill();
      });
    };

    draw();
  };

  const startVisualizationForPlayback = () => {
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    analyserRef.current = analyser;

    const source = audioContext.createMediaElementSource(audioRef.current);
    source.connect(analyser);
    analyser.connect(audioContext.destination);

    visualize();
  };

  return (
    <ContentWrapper>
      <Duration time={120} />
      <div style={styles.container}>
        <StyledSpeak>
          <h1 style={styles.h1}>Record yourself saying the statement below:</h1>
          <div
            style={{
              ...styles.speakContainer,
              transform: isSpeakClicked ? "scale(1.2)" : "scale(1)",
            }}
            onClick={handleSpeakClick}
          >
            <img src={speakIcon} alt="Speak Icon" />
            <StyledP>"My uncle is at work”.</StyledP>
          </div>
        </StyledSpeak>

        {!isRecording && !isRecorded && (
          <div style={styles.state}>
            <hr style={styles.separator} />
            <div style={styles.footer}>
              <StyledButton2 variant={"contained"} onClick={startRecording}>
                RECORD NOW
              </StyledButton2>
            </div>
          </div>
        )}

        {isRecording && (
          <div>
            <hr style={styles.separator} />

            <StyledDiv>
              <img src={recording} alt="" />
              <canvas
                ref={canvasRef}
                width={300}
                height={100}
                backgroundColor={"#ffffff"}
                style={styles.canvas}
              />
              <StyledButton variant={"contained"} onClick={stopRecording}>
                STOP RECORDING
              </StyledButton>
            </StyledDiv>
          </div>
        )}

        {isRecorded && audioUrl && (
          <div>
            <hr style={styles.separator} />

            <StyledDiv2>
              <StyledAudio
                ref={audioRef}
                controls
                src={audioUrl}
                onPlay={startVisualizationForPlayback}
                onPause={() => cancelAnimationFrame(animationIdRef.current)}
                onEnded={() => cancelAnimationFrame(animationIdRef.current)}
              />
              <canvas
                ref={canvasRef}
                width={300}
                height={100}
                style={styles.canvas}
                backgroundColor={"#ffffff"}
              />
              <StyledButton variant={"contained"} onClick={reRecord}>
                RE-RECORD
              </StyledButton>
            </StyledDiv2>
          </div>
        )}
      </div>
    </ContentWrapper>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: 0,
    backgroundColor: "#ffffff",
  },
  h1: {
    color: "#4C4859",
  },
  state: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  footer: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  separator: {
    marginTop: "20px",
    marginBottom: "20px",
    width: "52rem",
    border: "1px solid #ccc",
  },
  speakContainer: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    marginBottom: "6rem",
    marginLeft: "6rem",
  },
  canvas: {
    marginTop: "20px",
    backgroundColor: "#ffffff",
  },
};
const StyledDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#ffffff",
  ">img": {
    width: "136px",
    height: "20px",
    marginTop: "7%",
    marginRight: "20%",
  },
});
const StyledDiv2 = styled("div")({
  display: "flex",
});
const StyledButton = styled(Button)({
  marginTop: "6%",
  width: "20rem",
  height: "3rem",
  fontFamily: "inherit",
});
const StyledButton2 = styled(Button)({
  marginTop: "6%",
  marginLeft: "50%",
  width: "12rem",
  height: "3rem",
  fontFamily: "inherit",
});
const StyledSpeak = styled("div")({
  display: "flex",
  flexDirection: "column",
});
const StyledP = styled("p")({
  marginLeft: "3%",
  fontFamily: "inherit",
});
const StyledAudio = styled("audio")({
  marginTop: "3rem",
});
