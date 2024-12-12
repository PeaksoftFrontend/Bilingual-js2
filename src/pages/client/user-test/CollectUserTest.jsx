import { useEffect, useState } from "react";
import { WordSelector } from "../takeTheTest/WordSelector";
import { UserSelectRealWords } from "../takeTheTest/UserSelectRealWords";
import { DescribeImage } from "../takeTheTest/DescribeImage";
import { Words } from "../takeTheTest/Words";
import { Highlight } from "../takeTheTest/Highlight";
import { CompletePractice } from "../takeTheTest/CompletePractice";
import { RecordSayingStatement } from "../takeTheTest/RecordSayingStatement";
import { useDispatch, useSelector } from "react-redux";
import { TypeHearTest } from "../takeTheTest/TypeHearTest";
import { MainIdeaTest } from "../takeTheTest/MainIdeaTest";
import { BestTitleTest } from "../takeTheTest/BestTitleTest";
import { userTestGetByIdRequest } from "../../../store/userTest/userTestThunk";
import { useParams } from "react-router-dom";

export const CollectUserTest = () => {
  const { userTestById, userAnswer } = useSelector((state) => state.userTest);
  console.log("userAnswer: ", userAnswer);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const { testId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userTestGetByIdRequest(testId));
  }, [dispatch]);

  const renderComponent = (typeQuestion, currentQuestion, onNext) => {
    switch (typeQuestion) {
      case "SELECT_REAL_ENGLISH_WORD":
        return (
          <WordSelector onNext={onNext} currentQuestion={currentQuestion} />
        );
      case "LISTEN_AND_SELECT_ENGLISH_WORDS":
        return (
          <UserSelectRealWords
            currentQuestion={currentQuestion}
            onNext={onNext}
          />
        );
      case "TYPE_WHAT_YOU_HEAR":
        return (
          <TypeHearTest currentQuestion={currentQuestion} onNext={onNext} />
        );
      case "DESCRIBE_IMAGE":
        return (
          <DescribeImage currentQuestion={currentQuestion} onNext={onNext} />
        );
      case "RECORD_SAYING_STATEMENT":
        return (
          <RecordSayingStatement
            currentQuestion={currentQuestion}
            onNext={onNext}
          />
        );
      case "RESPOND_AT_LEAST_N_WORDS":
        return <Words currentQuestion={currentQuestion} onNext={onNext} />;
      case "HIGHLIGHT_THE_ANSWER":
        return <Highlight currentQuestion={currentQuestion} onNext={onNext} />;
      case "SELECT_THE_MAIN_IDEA":
        return (
          <MainIdeaTest currentQuestion={currentQuestion} onNext={onNext} />
        );
      case "SELECT_THE_BEST_TITLE":
        return (
          <BestTitleTest currentQuestion={currentQuestion} onNext={onNext} />
        );
      default:
        return <p>No component available for this type of question.</p>;
    }
  };

  const handleNext = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < userTestById.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setSelectedComponent(<CompletePractice />);
    }
  };

  useEffect(() => {
    if (Array.isArray(userTestById) && userTestById.length > 0) {
      const currentQuestion = userTestById[currentQuestionIndex];
      console.log("currentQuestion: ", currentQuestion);
      if (currentQuestion) {
        const { questionType } = currentQuestion;
        setSelectedComponent(
          // renderComponent(questionType, duration, handleNext, id, optionList)
          renderComponent(questionType, currentQuestion, handleNext)
        );
      }
    }
  }, [currentQuestionIndex, userTestById]);

  if (!userTestById || userTestById.length === 0) {
    return <p>Loading questions...</p>;
  }

  return <div>{selectedComponent}</div>;
};
