import { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { words } from "../../utils/helpers/words";
import { Duration } from "../../components/UI/duration/Duration";
import { ContentWrapper } from "../../components/UI/content_wrapper/ContentWrapper";
const WordButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ active }) => ({
  border: "1px solid lightgray",
  borderRadius: "8px",
  height: "41px",
  padding: "1px, 2px",
  textTransform: "none",
  fontSize: "18px",
  fontWeight: "500",
  margin: "2px",
  color: active ? "white" : "#4C4859",
  backgroundColor: active ? "#3A10E5" : "white",
  "&:hover": {
    border: "1.9px solid #3A10E5",
  },
  "&:active": {
    backgroundColor: "#3A10E5",
    color: "white",
  },
}));

const DropArea = styled(Box)({
  border: "1.9px dashed #C4C4C4",
  borderRadius: "8px",
  minHeight: "100px",
  width: "243px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#020202",
  marginLeft: "69%",
  backgroundColor: "#fafafa",
  "&.highlight": {
    borderColor: "#1976d2",
    backgroundColor: "#e3f2fd",
    color: "black",
  },
  "&.active": {
    backgroundColor: "#1976d2",
    color: "black",
  },
});

export const WordSelector = () => {
  const [selectedWords, setSelectedWords] = useState([]);
  const [draggedWord, setDraggedWord] = useState(null);
  const [isOverDropArea, setIsOverDropArea] = useState(false);
  const [activeWords, setActiveWords] = useState([]);

  const handleDragStart = (word) => {
    setDraggedWord(word);
  };

  const handleDragEnd = () => {
    setDraggedWord(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsOverDropArea(true);
  };

  const handleDragLeave = () => {
    setIsOverDropArea(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (draggedWord && !selectedWords.includes(draggedWord)) {
      setSelectedWords([...selectedWords, draggedWord]);
      setActiveWords([...activeWords, draggedWord]);
    }
    setDraggedWord(null);
    setIsOverDropArea(false);
  };

  return (
    <ContentWrapper>
      <Duration time={120} />

      <Typography
        variant="h6"
        gutterBottom
        textAlign={"center"}
        color="#4C4859"
        fontSize={28}
        m={"3rem"}
      >
        Select the real English words in this list
      </Typography>
      <Grid
        width={"813px"}
        container
        spacing={0.9}
        sx={{ marginBottom: "2rem" }}
      >
        {words.map((word, index) => (
          <Grid item xs={"1rem"} key={index}>
            <WordButton
              id={`word-${word}`}
              draggable
              onDragStart={() => handleDragStart(word)}
              onDragEnd={() => handleDragEnd(word)}
              active={activeWords.includes(word)}
              className={draggedWord === word ? "dragging" : ""}
            >
              {word}
            </WordButton>
          </Grid>
        ))}
      </Grid>
      <StyledSelectWord>
        <DropArea
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={isOverDropArea ? "highlight" : ""}
        >
          <Typography>
            {selectedWords.length > 0
              ? selectedWords.join(", ")
              : "Select words and drag here"}
          </Typography>
        </DropArea>
        <StyledDiv></StyledDiv>
        <StyledBtn
          variant={selectedWords.length > 0 ? "contained" : "disabled"}
        >
          Next
        </StyledBtn>
      </StyledSelectWord>
    </ContentWrapper>
  );
};

const StyledSelectWord = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
});

const StyledDiv = styled("div")({
  width: "814px",
  border: "1.53px solid #D4D0D0",
  marginTop: "3rem",
});

const StyledBtn = styled(Button)({
  background: "#3A10E5",
  width: "143px",
  height: "42px",
  borderRadius: "8px",
  marginLeft: "82%",
  marginTop: "3rem",
  fontSize: "14px",
  fontWeight: "600",
  "&.Mui-disabled": {
    cursor: "not-allowed !important",
    backgroundColor: "#C4C4C4",
    color: "#ffffff",
    border: "2px solid #C4C4C4",
  },
});
