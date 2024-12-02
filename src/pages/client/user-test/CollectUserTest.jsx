import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { WordSelector } from "../takeTheTest/WordSelector";
import { UserSelectRealWords } from "../takeTheTest/UserSelectRealWords";
import { DescribeImage } from "../takeTheTest/DescribeImage";
import { Words } from "../takeTheTest/Words";
import { Highlight } from "../takeTheTest/Highlight";
import { CompletePractice } from "../takeTheTest/CompletePractice";
import { RecordSayingStatement } from "../takeTheTest/RecordSayingStatement";
import { useDispatch, useSelector } from "react-redux";
import { questionsByIdRequest } from "../../../store/user create test/userThunk";
import { Loading } from "../../../components/UI/loading/Loading";
import { TypeHearTest } from "../takeTheTest/TypeHearTest";

export const CollectUserTest = () => {
  const { state } = useLocation();
  console.log(state);

  const dispatch = useDispatch();
  const [questionType, setQuestionType] = useState(state?.id || "s1");
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [questionData, setQuestionData] = useState(null);

  const { testQuestions, isError } = useSelector((store) => store.userTest);
  console.log(testQuestions);

  const handleNext = () => {
    const nextIdMap = {
      s1: "SELECT_REAL_ENGLISH_WORD",
      s2: "LISTEN_AND_SELECT_ENGLISH_WORDS",
      s3: "TYPE_WHAT_YOU_HEAR",
      s4: "DESCRIBE_IMAGE",
      s5: "RECORD_SAYING_STATEMENT",
      s6: "RESPOND_AT_LEAST_N_WORDS",
      s7: "HIGHLIGHT_THE_ANSWER",
      s8: "SELECT_THE_MAIN_IDEA",
      s9: "SELECT_THE_BEST_TITLE",
      s10: null,
    };
    setQuestionType(nextIdMap[questionType] || null);
  };

  useEffect(() => {
    if (questionType) {
      dispatch(questionsByIdRequest(questionType))
        .unwrap()
        .then((data) => setQuestionData(data))
        .catch((error) =>
          console.error("Error fetching question data:", error)
        );
    }
  }, [questionType, dispatch]);

  useEffect(() => {
    if (!questionType) {
      setSelectedComponent(<CompletePractice />);
      return;
    }

    if (!questionData) {
      setSelectedComponent(<Loading />);
      return;
    }

    switch (questionType) {
      case "s1":
        setSelectedComponent(<WordSelector onNext={handleNext} />);
        break;
      case "s2":
        setSelectedComponent(<UserSelectRealWords onNext={handleNext} />);
        break;
      case "s3":
        setSelectedComponent(<TypeHearTest onNext={handleNext} />);
        break;
      case "s4":
        setSelectedComponent(<DescribeImage onNext={handleNext} />);
        break;
      case "s5":
        setSelectedComponent(<RecordSayingStatement onNext={handleNext} />);
        break;
      case "s6":
        setSelectedComponent(<Words onNext={handleNext} />);
        break;
      case "s7":
        setSelectedComponent(<Highlight onNext={handleNext} />);
        break;
      case "s8":
        setSelectedComponent(<Words onNext={handleNext} />);
        break;
      case "s9":
        setSelectedComponent(<Highlight onNext={handleNext} />);
        break;
      default:
        setSelectedComponent(<p>No component available for this test ID.</p>);
    }
  }, [questionType, questionData]);

  if (isError) {
    return <p>Error loading test data.</p>;
  }

  return <div>{selectedComponent}</div>;
};
