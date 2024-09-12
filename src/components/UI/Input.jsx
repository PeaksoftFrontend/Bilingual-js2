import { styled, TextField } from "@mui/material";

export const Input = ({
  label,
  value,
  onChange,
  placeholder,
  disabled,
  type,
  error,
  ...props
}) => {
  return (
    <StyledInput
      label={label}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      type={type}
      error={error}
      {...props}
      InputLabelProps={{ shrink: true }}
      variant="outlined"
    />
  );
};

const StyledInput = styled(TextField)(({ error }) => ({
  width: "500px",
  height: "52px",
  borderRadius: "10px",

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: error ? "red" : "#c4c4c4",
      borderRadius: "10px",
    },
    "&:hover fieldset": {
      borderColor: error ? "red" : "#3A10E5",
    },
    "&.Mui-focused fieldset": {
      borderColor: error ? "red" : "#3A10E5",
      borderWidth: "2px",
    },
  },

  "& .Mui-disabled": {
    backgroundColor: "#f5f5f5",
    color: "#a1a1a1",
    borderColor: "#e0e0e0",
  },

  "& .Mui-error": {
    borderColor: "red",
  },

  "& .MuiInputBase-input::placeholder": {
    color: "#9e9e9e",
  },
}));
