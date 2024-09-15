import { useState, useCallback } from "react";
import { Snackbar, Alert, AlertTitle } from "@mui/material";
import { Button } from "./Button";

export const SnackBar = ({
  variant,
  message,
  severity,
  autoHideDuration = 3000,
  buttonText = "snackBar",
}) => {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback((event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  }, []);

  return (
    <div>
      <Button variant={variant} onClick={handleClick}>
        {buttonText}
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={autoHideDuration}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          <AlertTitle>{severity}</AlertTitle>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};
