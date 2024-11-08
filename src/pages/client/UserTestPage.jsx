import { AdminTable } from "../../components/UI/admin-table/AdminTable";
import { ContentWrapper } from "../../components/UI/content_wrapper/ContentWrapper";
import { RESULT, resultData } from "../../utils/constants/AdminTable";

export const UserTestPage = () => {
  return (
    <div>
      <ContentWrapper>
        <AdminTable columns={RESULT} data={resultData} />
      </ContentWrapper>
    </div>
  );
};
