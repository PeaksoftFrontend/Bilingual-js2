import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select as MuiSelect, styled } from "@mui/material";

export const Select = ({ options = [], onChange, value }) => {
  return (
    <Box margin={3} width={"51.25rem"}>
      <FormControl fullWidth>
        <StyledMuiSelect onChange={onChange} value={value}>
          {options.map((item) => (
            <StyledMenuItem key={item.id} value={item.value}>
              {item.label}
            </StyledMenuItem>
          ))}
        </StyledMuiSelect>
      </FormControl>
    </Box>
  );
};

const StyledMenuItem = styled(MenuItem)({
  "&:hover": {
    backgroundColor: "#3A10E529",
  },
});
const StyledMuiSelect = styled(MuiSelect)({
  textAlign: "center",
});
