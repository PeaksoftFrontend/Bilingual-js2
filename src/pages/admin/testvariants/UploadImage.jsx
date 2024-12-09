import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { styled } from "@mui/material";
import { Button } from "../../../components/UI/button/Button";
import { Input } from "../../../components/UI/input/Input";
import { useDispatch, useSelector } from "react-redux";
import {
  questionsPostRequest,
  s3AudioDeleteRequest,
  s3AudioPostRequest,
} from "../../../store/adminQuestion/adminQuestionThunk";
import { Loading } from "../../../components/UI/loading/Loading";
import { useNavigate, useParams } from "react-router-dom";

export const UploadImage = ({
  title,
  duration,
  selectedValue,
  onReset,
  setDuration,
  setTitle,
}) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { audioLink, isLoading } = useSelector((state) => state.questions);
  const { testInfoId } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const imageUrl = URL.createObjectURL(file);
      if (audioLink) {
        dispatch(s3AudioDeleteRequest(audioLink));
      }
      setUploadedImage(imageUrl);
      setFileName(file.name);
      dispatch(s3AudioPostRequest(file));

      setIsDragging(false);
    },
    [dispatch, audioLink]
  );

  const onDragEnter = () => {
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
    onDragEnter,
    onDragLeave,
  });

  const inputChangeHandle = (e) => {
    setInputValue(e.target.value);
  };

  const postImageOptionHandler = () => {
    const [minutes, seconds] = duration.split(":").map(Number);
    const totalDurationInSeconds = minutes * 60 + (seconds || 0);

    const data = {
      title,
      duration: totalDurationInSeconds,
      correctAnswer: inputValue,
      fileUrl: audioLink,
    };
    dispatch(
      questionsPostRequest({ data, selectedValue, testInfoId, navigate })
    );
    setTitle("");
    setDuration("15:00");
    onReset();
  };

  return (
    <>
      <ContainerUploadImage>
        {isLoading && <Loading />}
        <div {...getRootProps()} style={{ cursor: "pointer" }}>
          <input {...getInputProps()} />
          {uploadedImage ? (
            <ImagePreview src={uploadedImage} alt="Uploaded" />
          ) : (
            <UploadImageWrapper isDragging={isDragging}>
              <p>Upload image</p>
            </UploadImageWrapper>
          )}
        </div>

        <p>{fileName ? fileName : "No file uploaded"}</p>
      </ContainerUploadImage>

      <WrapperInputAndButtons>
        <InputLabel htmlFor="answer">
          Correct answer
          <StyledInput
            type="text"
            placeholder={"write text"}
            id={"answer"}
            onChange={inputChangeHandle}
            value={inputValue}
          />
        </InputLabel>

        <WrapperButtons>
          <StyledButton variant="outlined">Go Back</StyledButton>
          <Button
            variant="sucsses"
            onClick={postImageOptionHandler}
            disabled={!inputValue || !uploadedImage}
          >
            Save
          </Button>
        </WrapperButtons>
      </WrapperInputAndButtons>
    </>
  );
};

const StyledButton = styled(Button)(() => ({
  textWrap: "nowrap",
}));

const WrapperInputAndButtons = styled("section")({
  display: "flex",
  flexDirection: "column",
  gap: "32px",
});

const WrapperButtons = styled("section")({
  display: "flex",
  justifyContent: "end",
  gap: "16px",
});

const UploadImageWrapper = styled("section")(({ isDragging }) => ({
  position: "relative",
  width: "181px",
  height: "178px",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#3A10E5",
  fontWeight: "900",
  cursor: "pointer",
  overflow: "hidden",
  border: isDragging ? "2px dashed #2121219c" : "2px solid #D4D0D0",
  transition: "transform 0.3s ease, background 0.3s ease",
  background: isDragging ? "#4646463a" : "transparent",
  "&:hover": {
    transform: "scale(1.03)",
    border: "2px solid #3A10E5",
  },
}));

const ContainerUploadImage = styled("section")({
  display: "flex",
  alignItems: "center",
  gap: "40px",
  marginTop: "24px",
});

const InputLabel = styled("label")({
  color: "#4c4859",
  fontWeight: "600",
  marginTop: "24px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

const ImagePreview = styled("img")({
  width: "181px",
  height: "178px",
  objectFit: "contain",
  borderRadius: "8px",
});
const StyledInput = styled(Input)({
  "& .MuiOutlinedInput-root": {
    padding: "0",
  },
});
