import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { styled } from "@mui/material";
import { Button } from "../../../components/UI/button/Button";
import { Input } from "../../../components/UI/input/Input";

export const UploadImage = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const imageUrl = URL.createObjectURL(file);
    setUploadedImage(imageUrl);
    setFileName(file.name);
    setIsDragging(false);
  }, []);

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

  return (
    <>
      <ContainerUploadImage>
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
          <StyledInput type="text" placeholder={"write text"} id={"answer"} />
        </InputLabel>

        <WrapperButtons>
          <StyledButton variant="outlined">Go Back</StyledButton>
          <Button variant="success">Save</Button>
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
