import { Box, Typography } from "@mui/material";

export function Footer() {
  return (
    <Box sx={{ width: "100vw", background: "#FFFFFF" }}>
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          m: 1,
          textAlign: "center",
          width: "100%",
          fontFamily: '"Cormorant Garamond", serif',
          fontWeight: 700,
          fontSize: "1.5rem",
          color: "#4D5E89",
        }}
      >
        G & A
      </Typography>
    </Box>
  );
}
