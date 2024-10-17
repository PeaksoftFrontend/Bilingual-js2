import { styled } from "@mui/material";
import { AdminHeader } from "../adminHeader/AdminHeader";
import { SubmitesRes } from "./SubmitesRes";
import { EvaluatingResultsSelect } from "./EvaluatingResultsSelect";
import { EvaluteSelect } from "./EvaluteSelect";
import { ListenWordsSelect } from "./ListenWordsSelect";
import { TypeSlecet } from "./TypeSlecet";
import { DescribeSelect } from "./DescribeSelect";
import { RecordSelect } from "./RecordSelect";
import { RespondSelect } from "./RespondSelect";
import { HighlightSelect } from "./HighlightSelect";
import { MainIdeaSelect } from "./MainIdeaSelect";

export const SelectAll = () => {
  return (
    <StyledAllContainer>
      <AdminHeader />
      <SubmitesRes />
      <EvaluatingResultsSelect />
      <EvaluteSelect />
      <ListenWordsSelect />
      <TypeSlecet />
      <DescribeSelect />
      <RecordSelect />
      <RespondSelect />
      <HighlightSelect />
      <MainIdeaSelect />
      <MainIdeaSelect />
    </StyledAllContainer>
  );
};
const StyledAllContainer = styled("div")({
  width: "100%",
  height: "1180vh",
  backgroundColor: "#D7E1F8",
});
