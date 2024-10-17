import { styled } from "@mui/material";
import { ContentWrapper } from "../content_wrapper/ContentWrapper";
import { Select } from "../input/Select";
import { selectOptions } from "../../../utils/constants/selectWords";
import { Input } from "../input/Input";
import { AdminHeader } from "../../adminPage/adminHeader/AdminHeader";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import dayjs from "dayjs";

export const AdminForm = () => {
  const [selectedTime, setSelectedTime] = useState(dayjs());

  const handleTimeChange = (newValue) => {
    setSelectedTime(newValue);
  };

  return (
    <StyledAdminConteiner>
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

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StyledTimePicker
                value={selectedTime}
                onChange={handleTimeChange}
                ampm={false}
                views={["minutes", "seconds"]}
                format="mm:ss"
                renderInput={(params) => <StyledTimePickerInput {...params} />}
              />
            </LocalizationProvider>
          </div>
        </TitleBlock>
        <TypeStyled>
          <p>Type</p>
          <StyledSelect options={selectOptions} />
        </TypeStyled>
      </ContentWrapper>
    </StyledAdminConteiner>
  );
};

const StyledTimePicker = styled(TimePicker)(() => ({
  width: "99px",
  "& .MuiInputBase-root": {
    height: "52px",
    fontSize: "14px",
    borderRadius: "8px",
  },
  "& .MuiInputAdornment-root": {
    display: "none",
  },
}));

const StyledAdminConteiner = styled("div")(() => ({
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

const StyledTimePickerInput = styled(Input)(() => ({
  width: "100%",
}));

const StyledSelect = styled(Select)(() => ({
  "& .MuiSelect-select": {
    height: "48px",
  },
}));
