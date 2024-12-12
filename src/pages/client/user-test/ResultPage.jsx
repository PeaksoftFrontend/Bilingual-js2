import { styled } from "@mui/material";
import { AdminTable } from "../../../components/UI/admin-table/AdminTable";
import { ContentWrapper } from "../../../components/UI/content_wrapper/ContentWrapper";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserResults } from "../../../store/user__result-table/userTableThunk";

export const ResultPage = () => {
  const dispatch = useDispatch();
  const { user_table } = useSelector((state) => state.user_table);
  useEffect(() => {
    dispatch(getUserResults());
  }, [dispatch]);

  const columns = [
    {
      Header: "#",
      accessor: "id",
    },
    {
      Header: "Date of Submition",
      accessor: "dateOfSubmition",
    },
    {
      Header: "Test Name",
      accessor: "testName",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Score",
      accessor: "score",
    },
    {
      Header: "",
      accessor: "icon",
    },
  ];

  return (
    <StyledAllContainer>
      <ContentWrapper>
        <AdminTable columns={columns} data={user_table} />
      </ContentWrapper>
    </StyledAllContainer>
  );
};
const StyledAllContainer = styled("div")({
  width: "100%",
  height: "100vh",
  backgroundColor: "#D7E1F8",
});
