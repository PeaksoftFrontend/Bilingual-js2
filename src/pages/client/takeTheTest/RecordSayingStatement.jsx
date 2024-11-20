import { useState, useRef } from "react";
import * as wavEncoder from "wav-encoder";
import speakIcon from "../../../assets/images/img-speak 1.png";
import recording from "../../../assets/images/recording.png";
import { styled } from "@mui/material";
import { ContentWrapper } from "../../../components/UI/content_wrapper/ContentWrapper";
import { Duration } from "../../../components/UI/duration/Duration";
import { Button } from "../../../components/UI/button/Button";

export const RecordSayingStatement = ({ onNext }) => {
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
      <Duration time={120} onComplete={onNext} />
      <div style={styles.container}>
        <StyledSpeak>
          <h1 style={styles.h1}>Record yourself saying the statement below:</h1>
          <div
            style={{
              ...styles.speakContainer,
              transform: isSpeakClicked ? "scale(1)" : "scale(1)",
              marginTop: "2rem",
              fontWeight: "800",
              color: "#4C4859",
            }}
            onClick={handleSpeakClick}
          >
            <img src={speakIcon} alt="Speak Icon" />
            <StyledP>"My uncle is at work”.</StyledP>
          </div>
        </StyledSpeak>
        <hr style={styles.separator} />

        <div style={styles.footer}>
          {!isRecording && !isRecorded && (
            <Button variant={"contained"} onClick={startRecording}>
              RECORD NOW
            </Button>
          )}
        </div>

        {isRecording && (
          <StyledDiv>
            <img src={recording} alt="" />
            <canvas
              ref={canvasRef}
              width={125}
              height={46}
              backgroundColor={"#ffffff"}
              style={styles.canvas}
            />
            <StyledButton variant={"contained"} onClick={stopRecording}>
              STOP RECORDING
            </StyledButton>
          </StyledDiv>
        )}

        {isRecorded && audioUrl && (
          <StyledDiv2>
            <audio
              ref={audioRef}
              controls
              src={audioUrl}
              onPlay={startVisualizationForPlayback}
              onPause={() => cancelAnimationFrame(animationIdRef.current)}
              onEnded={() => cancelAnimationFrame(animationIdRef.current)}
            />
            <canvas
              ref={canvasRef}
              width={125}
              height={46}
              style={styles.canvas}
              backgroundColor={"#ffffff"}
            />
            <Button variant={"contained"} onClick={onNext}>
              next
            </Button>
          </StyledDiv2>
        )}
      </div>
    </ContentWrapper>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  h1: {
    color: "#4C4859",
    marginTop: "50px",
  },

  footer: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "end",
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
    justifyContent: "center",
    cursor: "pointer",
    marginBottom: "6rem",
  },
  canvas: {
    backgroundColor: "#ffffff",
  },
};
const StyledDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "197px",
  ">img": {
    width: "136px",
    height: "20px",
  },
});
const StyledDiv2 = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "133px",
});
const StyledButton = styled(Button)({
  width: "11rem",
});

const StyledSpeak = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});
const StyledP = styled("p")({
  marginLeft: "3%",
  fontFamily: "inherit",
});
