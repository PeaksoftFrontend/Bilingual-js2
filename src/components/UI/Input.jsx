import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, styled, TextField } from "@mui/material";
import { useState } from "react";

export const Input = ({
  label,
  value,
  onChange,
  placeholder,
  disabled,
  type,
  error,
  fullWidth,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePassword = (event) => {
    event.preventDefault();
  };

  return (
    <StyledInput
      label={label}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      type={type === "password" && showPassword ? "text" : type}
      error={error}
      {...props}
      variant="outlined"
      fullWidth
      InputProps={{
        endAdornment:
          type === "password" ? (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handlePassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ) : null,
      }}
    />
  );
};

const StyledInput = styled(TextField)(({ error, disabled }) => ({
  height: "52px",
  borderRadius: "10px",

  "& .MuiInputLabel-root": {
    color: "#808080",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: error ? "#BDBDBD" : "#3A10E5",
  },
  "& .MuiInputLabel-root.MuiFormLabel-filled:active": {
    color: "#3A10E5",
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
      borderWidth: "1px",
    },
  },

  "& .MuiOutlinedInput-input": {
    padding: "14.5px 20px",
  },

  "& .Mui-disabled": {
    backgroundColor: "#F7F7F7",
    color: "#757575",
    borderColor: "#BDBDBD",
    cursor: "not-allowed",
    borderRadius: "10px",
  },

  "& .Mui-error": {
    borderColor: "#F61414",
  },

  "& .MuiInputBase-input::placeholder": {
    color: "#9e9e9e",
  },
}));
