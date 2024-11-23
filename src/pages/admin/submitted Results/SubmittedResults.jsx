import { useNavigate } from "react-router-dom";
import { AdminTable } from "../../../components/UI/admin-table/AdminTable";
import { ContentWrapper } from "../../../components/UI/content_wrapper/ContentWrapper";
import { USERINFO, userInfoData } from "../../../utils/constants/AdminTable";

export const SubmittedResults = () => {
  const navigate = useNavigate();

  const navigateHandler = (userData) => {
    navigate(`/admin/submitted-results/result-info/${userData.id}`, {
      state: userData,
    });
  };
  return (
    <ContentWrapper>
      <AdminTable
        columns={USERINFO}
        data={userInfoData}
        onNavigate={navigateHandler}
      />
    </ContentWrapper>
  );
};
