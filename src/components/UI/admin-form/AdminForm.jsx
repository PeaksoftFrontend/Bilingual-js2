import { styled } from "@mui/material";
import { ContentWrapper } from "../content_wrapper/ContentWrapper";
import { Select } from "../input/Select";
import { selectOptions } from "../../../utils/constants/selectWords";
import { Input } from "../input/Input";
import { AdminHeader } from "../../../pages/admin/adminHeader/AdminHeader";
import { useState } from "react";

export const AdminForm = ({ children, onSelectChange, onTimeChange }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [duration, setDuration] = useState("15:00");

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    onSelectChange(value);
  };

  const handleDurationChange = (event) => {
    const value = event.target.value;
    setDuration(value);
    onTimeChange(value);
  };

  return (
    <StyledAdminContainer>
      <AdminHeader />
      <ContentWrapper>
        <TitleBlock>
          <div>
            <p>Title</p>
            <StyledInput placeholder="Select real English words" />
          </div>
          <div>
            <TextBlock>
              <p>Duration</p>
              <p>(in minutes)</p>
            </TextBlock>
            <SingleInput
              type="text"
              value={duration}
              onChange={handleDurationChange}
              placeholder="MM:SS"
            />
          </div>
        </TitleBlock>
        <TypeStyled>
          <p>Type</p>
          <Select
            options={selectOptions}
            value={selectedValue}
            onChange={handleSelectChange}
          />
        </TypeStyled>
        <div>{children}</div>
      </ContentWrapper>
    </StyledAdminContainer>
  );
};

const StyledAdminContainer = styled("div")(() => ({
  width: "100%",
  height: "110vh",
  backgroundColor: "#D7E1F8",
  display: "flex",
  flexDirection: "column",
  gap: "68px",
}));

const TitleBlock = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "end",
  gap: "24px",

  "& p": {
    fontSize: "16px",
    fontWeight: "500",
    fontFamily: "DIN Next Rounded LT Pro Medium",
    color: "#4B4759",
    width: "83px",
  },

  "& div": {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
}));

const StyledInput = styled(Input)(() => ({
  width: "43.563rem",
}));

const TypeStyled = styled("div")(() => ({
  marginTop: "24px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",

  "& p": {
    fontSize: "16px",
    fontWeight: "500",
    fontFamily: "DIN Next Rounded LT Pro Medium",
    color: "#4B4759",
  },
}));

const TextBlock = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "none",
}));

const SingleInput = styled(Input)(() => ({
  width: "6.1875rem",
  fontSize: "16px",
  fontWeight: "500",
  fontFamily: "DIN Next Rounded LT Pro Medium",
  color: "#4C4859",

  "& .css-1jk99ih-MuiInputBase-input-MuiOutlinedInput-input": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
