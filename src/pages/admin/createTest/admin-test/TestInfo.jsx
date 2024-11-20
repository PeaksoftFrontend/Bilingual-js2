import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ContentWrapper } from "../../../../components/UI/content_wrapper/ContentWrapper";
import { Button } from "../../../../components/UI/button/Button";
import { Icons } from "../../../../assets/icons";
import { AdminTable } from "../../../../components/UI/admin-table/AdminTable";
import { TEST, testData } from "../../../../utils/constants/AdminTable";
import { styled } from "@mui/system";
import { TestNotFound } from "../../../404/TestNotFound";

export const TestInfo = ({ duration = "15" }) => {
  const navigate = useNavigate();
  const { tests } = useSelector((state) => state.test);
  const { testInfoId } = useParams();

  const test = tests?.find((item) => item.id === Number(testInfoId));

  return (
    <ContentWrapper>
      {test ? (
        <StyledContainerText>
          <StyledText>
            <span>Title:</span> {test?.title}
          </StyledText>
          <StyledText>
            <span>Short Description:</span> {test?.description}
          </StyledText>
          <StyledText>
            <span>Duration:</span> {duration}
          </StyledText>
        </StyledContainerText>
      ) : (
        <TestNotFound />
      )}
      <ButtonContainer>
        <Button onClick={() => navigate("/admin/test-page/create-test")}>
          <Icons.Plus />
          ADD MORE QUESTIONS
        </Button>
      </ButtonContainer>

      <StyledAdminTable>
        <AdminTable columns={TEST} data={testData} />
      </StyledAdminTable>
    </ContentWrapper>
  );
};

const StyledText = styled("div")(() => ({
  "& span": {
    color: "#3752B4",
    fontWeight: "700",
  },
  color: "#4C4859",
  fontWeight: "700",
}));

const StyledContainerText = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
}));

const ButtonContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "end",
  marginTop: "44px",
  borderBottom: "1px solid #C4C4C4",
  paddingBottom: "22px",

  "& button": {
    width: "213px",
  },
}));

const StyledAdminTable = styled("div")(() => ({
  // padding: "10px",
}));
