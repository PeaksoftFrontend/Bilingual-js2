import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled, Typography } from "@mui/material";

export const Selector = ({ title }) => {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <StyledBox sx={{ m: 3, minWidth: 120 }}>
      <FormControl sx={{ minWidth: 120 }} fullWidth>
        <Typography variant="h5" gutterBottom>
          Select real English words
        </Typography>
        <Select
          value={value}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <StyledMenuItem value="">
            <em>Select real English words</em>
          </StyledMenuItem>

          <StyledMenuItem value={title}>{title}</StyledMenuItem>
          <StyledMenuItem value={10}>Ten</StyledMenuItem>
          <StyledMenuItem value={20}>Twenty</StyledMenuItem>
          <StyledMenuItem value={30}>Thirty</StyledMenuItem>
        </Select>
      </FormControl>
    </StyledBox>
  );
};

const StyledBox = styled(Box)(() => ({
  width: "51.25rem",
}));

const StyledMenuItem = styled(MenuItem)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));
