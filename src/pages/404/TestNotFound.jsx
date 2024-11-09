import Box from "@mui/material/Box";

export const TestNotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "24px",
        color: "grey.600",
        animation: "fadeInOut 2s ease-in-out infinite",
        "@keyframes fadeInOut": {
          "0%": { opacity: 0 },
          "50%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      }}
    >
      No tests available
    </Box>
  );
};
