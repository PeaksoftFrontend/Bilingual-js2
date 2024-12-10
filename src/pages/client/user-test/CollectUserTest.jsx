import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { WordSelector } from "../takeTheTest/WordSelector";
import { UserSelectRealWords } from "../takeTheTest/UserSelectRealWords";
import { DescribeImage } from "../takeTheTest/DescribeImage";
import { Words } from "../takeTheTest/Words";
import { Highlight } from "../takeTheTest/Highlight";
import { CompletePractice } from "../takeTheTest/CompletePractice";
import { RecordSayingStatement } from "../takeTheTest/RecordSayingStatement";

export const CollectUserTest = () => {
  const { state } = useLocation();
  console.log("state: ", state);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const questions = state?.questions || []; // Массив вопросов

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setSelectedComponent(<CompletePractice />);
    }
  };

  useEffect(() => {
    if (currentIndex >= questions.length) {
      return;
    }

    const question = questions[currentIndex];
    switch (question.questionType) {
      case "SELECT_REAL_ENGLISH_WORD":
        setSelectedComponent(
          <UserSelectRealWords data={question} onNext={handleNext} />
        );
        break;
      case "DESCRIBE_IMAGE":
        setSelectedComponent(
          <DescribeImage data={question} onNext={handleNext} />
        );
        break;
      case "HIGHLIGHT":
        setSelectedComponent(<Highlight data={question} onNext={handleNext} />);
        break;
      case "WORD_SELECTOR":
        setSelectedComponent(
          <WordSelector data={question} onNext={handleNext} />
        );
        break;
      case "RECORD_SAYING_STATEMENT":
        setSelectedComponent(
          <RecordSayingStatement data={question} onNext={handleNext} />
        );
        break;
      case "WORDS":
        setSelectedComponent(<Words data={question} onNext={handleNext} />);
        break;
      default:
        setSelectedComponent(
          <p>Unknown question type: {question.questionType}</p>
        );
    }
  }, [currentIndex, questions]);

  return <div>{selectedComponent}</div>;
};
