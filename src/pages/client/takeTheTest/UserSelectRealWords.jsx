import { styled } from "@mui/material";
import { Icons } from "../../../assets/icons";
import { ContentWrapper } from "../../../components/UI/content_wrapper/ContentWrapper";
import { Duration } from "../../../components/UI/duration/Duration";
import { UserTestWords } from "../../../utils/constants/selectWords";
import { useState } from "react";

export const UserSelectRealWords = () => {
  const [words, setWords] = useState(UserTestWords);

  const handleCheckClick = (id) => {
    setWords((prevWords) =>
      prevWords.map((word) =>
        word.id === id ? { ...word, isChecked: !word.isChecked } : word
      )
    );
  };
  return (
    <>
      <ContentWrapper>
        <Duration time={100} />

        <WrapperWords>
          <h1>Select the real English words in this list</h1>
          <ContainerWords>
            {words.map((word) => (
              <section key={word.id}>
                <StyledWordContainer isChecked={word.isChecked}>
                  <ContainerWord>
                    <Icons.VolumeUp />
                    <h4>{word.title}</h4>
                  </ContainerWord>

                  <ContainerCheck
                    isChecked={word.isChecked}
                    onClick={() => handleCheckClick(word.id)}
                  >
                    {word.isChecked ? <Icons.HoverCheck /> : <Icons.Check />}
                  </ContainerCheck>
                </StyledWordContainer>
              </section>
            ))}
          </ContainerWords>
        </WrapperWords>
      </ContentWrapper>
    </>
  );
};

const StyledWordContainer = styled("div")(({ isChecked }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "192px",
  height: "43px",
  border: isChecked ? "1.53px solid #3A10E5" : "1.53px solid #D4D0D0",
  borderRadius: "8px",
}));

const ContainerWords = styled("section")({
  display: "flex",
  flexWrap: "wrap",
  marginTop: "50px",
  gap: "20px",
  justifyContent: "space-between",
  h4: {
    color: "#4C4859",
    fontWeight: "500",
  },
});
const WrapperWords = styled("div")({
  h1: {
    textAlign: "center",
    marginTop: "50px",
  },
});
const ContainerWord = styled("div")({
  display: "flex",
  gap: "16px",
  padding: "13px",
  borderRadius: "8px",
});

const ContainerCheck = styled("div")(({ isChecked }) => ({
  padding: "10px",
  display: "flex",
  borderLeft: isChecked ? "1.53px solid #3A10E5" : "1.53px solid #D4D0D0",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: isChecked ? "#3A10E5" : "transparent",
  cursor: "pointer",
  borderTopRightRadius: "7px",
  borderBottomRightRadius: "7px",
}));
