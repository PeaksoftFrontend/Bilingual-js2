// import { styled } from "@mui/material";
// import { Icons } from "../../../assets/icons";
// import { ContentWrapper } from "../../../components/UI/content_wrapper/ContentWrapper";
// import { Duration } from "../../../components/UI/duration/Duration";
// // import { UserTestWords } from "../../../utils/constants/selectWords";
// import { useEffect, useState } from "react";
// import { Button } from "../../../components/UI/button/Button";

// export const UserSelectRealWords = ({
//   onNext,
//   duration,
//   questionId,
//   optionList = [],
// }) => {
//   console.log("questionId: ", questionId);
//   const [words, setWords] = useState(optionList);
//   const [isAnySelected, setIsAnySelected] = useState(false);

//   useEffect(() => {
//     setIsAnySelected(words.some((word) => word.isTrue));
//   }, [words]);

//   const handleCheckClick = (id) => {
//     setWords((prevWords) =>
//       prevWords.map((word) =>
//         word.id === id ? { ...word, isTrue: !word.isTrue } : word
//       )
//     );
//   };
//   return (
//     <ContentWrapper>
//       <MainContent>
//         <Duration time={duration} onComplete={onNext} />

//         <WrapperWords>
//           <h1>Select the real English words in this list</h1>
//           <ContainerWords>
//             {words.map((word) => (
//               <section key={word.id}>
//                 <StyledWordContainer isTrue={word.isTrue}>
//                   <ContainerWord>
//                     <Icons.VolumeUp />
//                     <h4>{word.title}</h4>
//                   </ContainerWord>

//                   <ContainerCheck
//                     isTrue={word.isTrue}
//                     onClick={() => handleCheckClick(word.id)}
//                   >
//                     {word.isTrue ? <Icons.HoverCheck /> : <Icons.Check />}
//                   </ContainerCheck>
//                 </StyledWordContainer>
//               </section>
//             ))}
//           </ContainerWords>
//         </WrapperWords>
//         <StyledButton disabled={!isAnySelected} onClick={onNext}>
//           next
//         </StyledButton>
//       </MainContent>
//     </ContentWrapper>
//   );
// };

// const StyledWordContainer = styled("div")(({ isTrue }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "space-between",
//   width: "192px",
//   height: "43px",
//   border: isTrue ? "1.53px solid #3A10E5" : "1.53px solid #D4D0D0",
//   borderRadius: "8px",
// }));

// const ContainerWords = styled("section")({
//   display: "flex",
//   flexWrap: "wrap",
//   marginTop: "50px",
//   gap: "20px",
//   justifyContent: "space-between",
//   h4: {
//     color: "#4C4859",
//     fontWeight: "500",
//   },
// });
// const WrapperWords = styled("div")({
//   h1: {
//     textAlign: "center",
//     marginTop: "50px",
//   },
//   paddingBottom: "60px",
//   borderBottom: "3px solid #D4D0D0",
// });
// const ContainerWord = styled("div")({
//   display: "flex",
//   gap: "16px",
//   padding: "13px",
//   borderRadius: "8px",
// });

// const ContainerCheck = styled("div")(({ isTrue }) => ({
//   padding: "10px",
//   display: "flex",
//   borderLeft: isTrue ? "1.53px solid #3A10E5" : "1.53px solid #D4D0D0",
//   justifyContent: "center",
//   alignItems: "center",
//   backgroundColor: isTrue ? "#3A10E5" : "transparent",
//   cursor: "pointer",
//   borderTopRightRadius: "7px",
//   borderBottomRightRadius: "7px",
// }));

// const MainContent = styled("div")({
//   width: "100%",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "end",
// });

// const StyledButton = styled(Button)({
//   marginTop: "32px",
//   "&:disabled": {
//     backgroundColor: "#C4C4C4",
//     color: "#ffffff",
//     cursor: "not-allowed",
//     border: "none",
//   },
// });

import { styled } from "@mui/material";
import { Icons } from "../../../assets/icons";
import { ContentWrapper } from "../../../components/UI/content_wrapper/ContentWrapper";
import { Duration } from "../../../components/UI/duration/Duration";
import { useEffect, useState } from "react";
import { Button } from "../../../components/UI/button/Button";
import { useDispatch } from "react-redux";
import { ShowSnackbar } from "../../../components/UI/snackbar/SnackBar";
import { userPostQuestion } from "../../../store/user create test/userThunk";

export const UserSelectRealWords = ({
  onNext,
  duration,
  questionId,
  optionList = [],
}) => {
  console.log("questionId: ", questionId);
  const [words, setWords] = useState(optionList);
  const [isAnySelected, setIsAnySelected] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsAnySelected(words.some((word) => word.isTrue));
  }, [words]);

  const handleCheckClick = (id) => {
    setWords((prevWords) =>
      prevWords.map((word) =>
        word.id === id ? { ...word, isTrue: !word.isTrue } : word
      )
    );
  };

  const handlePlayAudio = (audioUrl) => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play().catch((err) => console.error("Audio playback failed:", err));
    }
  };
  const handleUserAnswer = () => {
    const selectedAudiosIds = words
      .filter((word) => word.isTrue)
      .map((word) => word.id);
    const data = [
      {
        statement: "",
        optionsId: selectedAudiosIds,
        questionId: questionId,
        audioUrl: "",
        count: 0,
      },
    ];

    dispatch(userPostQuestion(data))
      .then(() => {
        ShowSnackbar("test uspeshno dobavleno!", "success");
        onNext();
      })
      .catch((error) => {
        console.error("Request failed", error);
        onNext();
      });
  };

  return (
    <ContentWrapper>
      <MainContent>
        <Duration time={duration} onComplete={onNext} />

        <WrapperWords>
          <h1>Select the real English words in this list</h1>
          <ContainerWords>
            {words.map((word) => (
              <section key={word.id}>
                <StyledWordContainer isTrue={word.isTrue}>
                  <ContainerWord>
                    <Icons.VolumeUp
                      onClick={() => handlePlayAudio(word.audio_url)}
                    />
                    <h4>{word.title}</h4>
                  </ContainerWord>

                  <ContainerCheck
                    isTrue={word.isTrue}
                    onClick={() => handleCheckClick(word.id)}
                  >
                    {word.isTrue ? <Icons.HoverCheck /> : <Icons.Check />}
                  </ContainerCheck>
                </StyledWordContainer>
              </section>
            ))}
          </ContainerWords>
        </WrapperWords>
        <StyledButton disabled={!isAnySelected} onClick={handleUserAnswer}>
          next
        </StyledButton>
      </MainContent>
    </ContentWrapper>
  );
};

const StyledWordContainer = styled("div")(({ isTrue }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "192px",
  height: "43px",
  border: isTrue ? "1.53px solid #3A10E5" : "1.53px solid #D4D0D0",
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
  paddingBottom: "60px",
  borderBottom: "3px solid #D4D0D0",
});
const ContainerWord = styled("div")({
  display: "flex",
  gap: "16px",
  padding: "13px",
  borderRadius: "8px",
});

const ContainerCheck = styled("div")(({ isTrue }) => ({
  padding: "10px",
  display: "flex",
  borderLeft: isTrue ? "1.53px solid #3A10E5" : "1.53px solid #D4D0D0",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: isTrue ? "#3A10E5" : "transparent",
  cursor: "pointer",
  borderTopRightRadius: "7px",
  borderBottomRightRadius: "7px",
}));

const MainContent = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "end",
});

const StyledButton = styled(Button)({
  marginTop: "32px",
  "&:disabled": {
    backgroundColor: "#C4C4C4",
    color: "#ffffff",
    cursor: "not-allowed",
    border: "none",
  },
});
