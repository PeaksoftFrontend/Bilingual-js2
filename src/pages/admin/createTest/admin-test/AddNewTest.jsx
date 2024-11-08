import { styled } from "@mui/material";
import { ContentWrapper } from "../../../../components/UI/content_wrapper/ContentWrapper";
import { Input } from "../../../../components/UI/input/Input";
import { Button } from "../../../../components/UI/button/Button";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTest,
  updateTest,
} from "../../../../store/slices/adminSlice/adminSlice";
import { useLocation, useNavigate } from "react-router-dom";

export const AddNewTest = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const testEdit = location.state?.test;
  const [testValue, setTestValue] = useState({
    title: testEdit?.title || "",
    description: testEdit?.description || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTestValue({
      ...testValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (testEdit) {
      dispatch(updateTest({ ...testValue, id: testEdit.id }));
    } else {
      dispatch(addTest({ ...testValue, id: Date.now(), isChecked: false }));
    }
    navigate("/admin/test-page");
  };

  useEffect(() => {
    if (testEdit) {
      setTestValue({
        title: testEdit.title,
        description: testEdit.description,
      });
    }
  }, [testEdit]);

  return (
    <ContentWrapper>
      <form onSubmit={handleSubmit}>
        <Container>
          <Block>
            <StyledText>Title</StyledText>
            <StyledInput
              type="text"
              name="title"
              placeholder={"Enter title"}
              value={testValue.title}
              onChange={handleInputChange}
            />
          </Block>
          <Block>
            <StyledText>Short Description</StyledText>
            <StyledInput
              type="text"
              name="description"
              placeholder={"Enter description"}
              value={testValue.description}
              onChange={handleInputChange}
            />
          </Block>
        </Container>
        <BtnBlock>
          <Button
            variant="outlined"
            onClick={() => navigate("/admin/test-page")}
          >
            GO BACK
          </Button>
          <Button
            variant="sucsses"
            type="submit"
            disabled={!testValue.title || !testValue.description}
          >
            {testEdit ? "Update" : "save"}
          </Button>
        </BtnBlock>
      </form>
    </ContentWrapper>
  );
};

const StyledInput = styled(Input)(() => ({
  "& .MuiOutlinedInput-root": {
    paddingLeft: "0px",
  },
}));

const StyledText = styled("p")(() => ({
  fontWeight: "900",
  color: "#4C4859",
}));

const Block = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
}));

const Container = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
}));

const BtnBlock = styled("div")(() => ({
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
  marginTop: "32px",
  gap: "16px",
}));
