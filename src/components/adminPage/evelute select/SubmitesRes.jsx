import { styled } from "@mui/material";
import { USERINFO, userInfoData } from "../../../utils/constants/AdminTable";
import { AdminTable } from "../../UI/admin-table/AdminTable";
import { ContentWrapper } from "../../UI/content_wrapper/ContentWrapper";

export const SubmitesRes = () => {
  return (
    <StyledWrapper>
      <ContentWrapper>
        <AdminTable columns={USERINFO} data={userInfoData} />
      </ContentWrapper>
    </StyledWrapper>
  );
};
const StyledWrapper = styled("div")({
  padding: "40px",
});
