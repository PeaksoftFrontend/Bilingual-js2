import { useEffect, useState } from "react";
import { WordSelector } from "../takeTheTest/WordSelector";
import { UserSelectRealWords } from "../takeTheTest/UserSelectRealWords";
import { DescribeImage } from "../takeTheTest/DescribeImage";
import { Words } from "../takeTheTest/Words";
import { Highlight } from "../takeTheTest/Highlight";
import { CompletePractice } from "../takeTheTest/CompletePractice";
import { RecordSayingStatement } from "../takeTheTest/RecordSayingStatement";
import { useSelector } from "react-redux";
import { TypeHearTest } from "../takeTheTest/TypeHearTest";
import { MainIdeaTest } from "../takeTheTest/MainIdeaTest";
import { BestTitleTest } from "../takeTheTest/BestTitleTest";

export const CollectUserTest = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const { testQuestions } = useSelector((state) => state.userTest);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const renderComponent = (typeQuestion, duration, onNext, optionList) => {
    switch (typeQuestion) {
      case "SELECT_REAL_ENGLISH_WORD":
        return (
          <WordSelector
            optionList={optionList}
            duration={duration}
            onNext={onNext}
          />
        );
      case "LISTEN_AND_SELECT_ENGLISH_WORDS":
        return <UserSelectRealWords duration={duration} onNext={onNext} />;
      case "TYPE_WHAT_YOU_HEAR":
        return <TypeHearTest duration={duration} onNext={onNext} />;
      case "DESCRIBE_IMAGE":
        return <DescribeImage duration={duration} onNext={onNext} />;
      case "RECORD_SAYING_STATEMENT":
        return <RecordSayingStatement duration={duration} onNext={onNext} />;
      case "RESPOND_AT_LEAST_N_WORDS":
        return <Words duration={duration} onNext={onNext} />;
      case "HIGHLIGHT_THE_ANSWER":
        return <Highlight duration={duration} onNext={onNext} />;
      case "SELECT_THE_MAIN_IDEA":
        return <MainIdeaTest duration={duration} onNext={onNext} />;
      case "SELECT_THE_BEST_TITLE":
        return <BestTitleTest duration={duration} onNext={onNext} />;
      default:
        return <p>No component available for this type of question.</p>;
    }
  };

  const handleNext = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < testQuestions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setSelectedComponent(<CompletePractice />);
    }
  };

  useEffect(() => {
    if (Array.isArray(testQuestions) && testQuestions.length > 0) {
      const currentQuestion = testQuestions[currentQuestionIndex];
      if (currentQuestion) {
        console.log(currentQuestion);

        const { questionType, duration, optionList } = currentQuestion;
        setSelectedComponent(
          renderComponent(questionType, duration, handleNext, optionList)
        );
      }
    }
  }, [currentQuestionIndex, testQuestions]);

  return <div>{selectedComponent}</div>;
};
