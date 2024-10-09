import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled, Typography } from "@mui/material";

export const UI_Selector = ({ rex, columns }) => {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <StyledBox>
      <FormControl fullWidth>
        <Typography gutterBottom>{rex}</Typography>
        <Select
          sx={{ pl: "43%" }}
          value={value}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          {columns.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </StyledBox>
  );
};

const StyledBox = styled(Box)(() => ({
  width: "51.25rem",
  margin: "20px",
}));
