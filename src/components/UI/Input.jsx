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
      variant="outlined"
    />
  );
};

const StyledInput = styled(TextField)(({ error, disabled }) => ({
  width: "100%",
  height: "52px",
  borderRadius: "10px",

  "& .MuiInputLabel-root": {
    color: "#808080",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: error ? "#F61414" : "#3A10E5",
  },
  "& .MuiInputLabel-root.MuiFormLabel-filled": {
    color: "#808080",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: disabled ? "#BDBDBD" : error ? "#F61414" : "#c4c4c4",
      borderRadius: "10px",
    },
    "&:hover fieldset": {
      borderColor: disabled ? "#BDBDBD" : error ? "#F61414" : "#3A10E5",
    },
    "&.Mui-focused fieldset": {
      borderColor: error ? "#F61414" : "#3A10E5",
      borderWidth: "2px",
    },
  },

  "& .MuiOutlinedInput-input": {
    padding: "14.5px 14px",
  },

  "& .Mui-disabled": {
    backgroundColor: "#F7F7F7",
    color: "#757575",
    borderColor: "#BDBDBD",
    cursor: "not-allowed",
  },

  "& .Mui-error": {
    borderColor: "#F61414",
  },

  "& .MuiInputBase-input::placeholder": {
    color: "#9e9e9e",
  },
}));
