// import { useEffect } from "react";
import { ContentWrapper } from "../../components/UI/content_wrapper/ContentWrapper";
import { EnglishWordsSelect } from "./AudioRecordingInterface";
import { EvaluteBest } from "./EvaluteBest";
import { EvaluteMain } from "./EvaluteMain";
import { EvaluteRespond } from "./EvaluteRespond";
import { EveluatedDescrib } from "./EveluatedDescrib";
import { HighlightSelect } from "./HighlightSelect";
import { ListenSelect } from "./ListenSelect";
import { RecordSelect } from "./RecordSelect";
import { TypeYouHear } from "./TypeYouHear";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getQuestionsResultsById } from "../../store/result/resultThunk";
// import { EvaluteMain } from "./EvaluteMain";

export const CollectUserAnswer = () => {
  const { testInfoId, testId, questionId } = useParams();
  const { resultQuestion } = useSelector((state) => state.result);
  const dispatch = useDispatch();

  console.log("resultQuestion: ", resultQuestion);
  console.log("questionId: ", questionId);
  console.log("testId: ", testId);
  console.log("testInfoId: ", testInfoId);
  useEffect(() => {
    dispatch(getQuestionsResultsById({ questionId, userId: testInfoId }));
  }, [dispatch]);

  const renderComponentByQuestionType = () => {
    switch (resultQuestion?.questionType) {
      case "SELECT_REAL_ENGLISH_WORD":
        return <EnglishWordsSelect />;
      case "LISTEN_AND_SELECT_ENGLISH_WORDS":
        return <ListenSelect />;
      case "TYPE_WHAT_YOU_HEAR":
        return <TypeYouHear />;
      case "DESCRIBE_IMAGE":
        return <EveluatedDescrib />;
      case "RECORD_SAYING_STATEMENT":
        return <RecordSelect />;
      case "RESPOND_AT_LEAST_N_WORDS":
        return <EvaluteRespond />;
      case "HIGHLIGHT_THE_ANSWER":
        return <HighlightSelect />;
      case "SELECT_THE_MAIN_IDEA":
        return <EvaluteMain />;
      case "SELECT_THE_BEST_TITLE":
        return <EvaluteBest />;
      default:
        return <h1>No results</h1>;
    }
  };

  return (
    <div>
      <ContentWrapper>{renderComponentByQuestionType()}</ContentWrapper>
    </div>
  );
};
