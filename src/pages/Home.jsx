import { Box, Container, Typography } from "@mui/material";

export function HomePage() {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: 'url("/public/cover.png")',
          height: "100vh",
          width: "100vw",
          backgroundSize: "cover",
          backgroundPosition: "bottom right",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Typography
            variant="h2"
            sx={{
              fontSize: "6rem",
              color: "white",
              fontFamily: '"Parisienne", cursive',
            }}
          >
            Giovanna
            <br /> & Adrian
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 700,
              fontSize: "4rem",
              color: "white",
            }}
          >
            16/11/2024
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
