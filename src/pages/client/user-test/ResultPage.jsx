import { styled } from "@mui/material";
import { AdminTable } from "../../../components/UI/admin-table/AdminTable";
import { ContentWrapper } from "../../../components/UI/content_wrapper/ContentWrapper";
import {
  RESULTDATA,
  userResultData,
} from "../../../utils/constants/AdminTable";

export const ResultPage = () => {
  return (
    <StyledAllContainer>
      <ContentWrapper>
        <AdminTable columns={RESULTDATA} data={userResultData} />
      </ContentWrapper>
    </StyledAllContainer>
  );
};
const StyledAllContainer = styled("div")({
  width: "100%",
  height: "100vh",
  backgroundColor: "#D7E1F8",
});
