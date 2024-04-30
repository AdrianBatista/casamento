import { Box, Typography } from "@mui/material";

export default function DateCard({ label, value }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          background: "#4D5E89",
          padding: 3,
          inlineSize: "max-content",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: 120, md: 180 },
            height: { xs: 120, md: 180 },
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 900,
              fontSize: "4rem",
              lineHeight: "4rem",
              color: "white",
            }}
          >
            {value}
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 300,
              fontSize: "1rem",
              color: "white",
            }}
          >
            {label}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
