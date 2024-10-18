import { Modal, Box, Typography, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto", // Allow auto width
  maxWidth: "650px",
  height: "800px", // Max width for wider forms like the sign-up page
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
  overflowY: "auto", // Add scroll if the content overflows
};

export const ReusableModal = ({
  open,
  handleClose,
  title,
  content,
  confirmText = "Confirm",
  onConfirm,
  ...props
}) => {
  return (
    <Modal
      {...props}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={{ ...style, ...props.sx }}>
        {/* Modal Title */}
        {title && (
          <Typography id="modal-title" variant="h6" component="h2">
            {title}
          </Typography>
        )}

        {/* Modal Content */}
        <Box id="modal-description" sx={{ mt: 2 }}>
          {content}
        </Box>

        {/* Modal Footer with Action Buttons */}
        <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
          <Button variant="outlined" onClick={handleClose} sx={{ mr: 2 }}>
            Cancel
          </Button>
          <Button variant="contained" onClick={onConfirm}>
            {confirmText}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
