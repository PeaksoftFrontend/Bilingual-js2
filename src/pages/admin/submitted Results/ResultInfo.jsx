import { useLocation } from "react-router-dom";
import { ContentWrapper } from "../../../components/UI/content_wrapper/ContentWrapper";
import { AdminTable } from "../../../components/UI/admin-table/AdminTable";
import {
  RESULTDATA,
  userResultData,
} from "../../../utils/constants/AdminTable";

export const ResultInfo = () => {
  const location = useLocation();
  const userData = location.state;

  if (!userData) {
    return <div>Ошибка: данные пользователя отсутствуют</div>;
  }

  return (
    <ContentWrapper>
      <div>
        <div>
          <p>
            <span>User:</span> {userData.userName}
          </p>
          <p>
            <span>Test:</span>
            {userData.testName}
          </p>
          <p>
            <span>Date of submission:</span> {userData.dateOfSubmition}
          </p>
        </div>
        <div>
          <p>
            <span>Статус:</span> {userData.status}
          </p>
          <p>
            <span>Оценка:</span> {userData.score}
          </p>
        </div>
      </div>
      <AdminTable columns={RESULTDATA} data={userResultData} />
    </ContentWrapper>
  );
};
