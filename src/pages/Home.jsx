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
          backgroundAttachment: "fixed",
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
      <Box sx={{ width: "100vw", height: "100vh", position: "relative" }}>
        <Box
          component={"img"}
          src={"/public/moldura.png"}
          sx={{
            position: "absolute",
            top: "20px",
            left: "20px",
            width: {
              xs: "15rem",
              md: "25rem",
            },
            zIndex: "10",
          }}
        />
        <Box
          component={"img"}
          src={"/public/mancha.png"}
          sx={{
            position: "absolute",
            bottom: "0",
            left: "0",
            width: {
              xs: "15rem",
              md: "25rem",
            },
          }}
        />
        <Box
          component={"img"}
          src={"/public/mancha.png"}
          sx={{
            position: "absolute",
            top: "0",
            right: "0",
            width: {
              xs: "15rem",
              md: "25rem",
            },
            transform: "rotate(180deg)",
          }}
        />
        <Box
          component={"img"}
          src={"/public/moldura.png"}
          sx={{
            position: "absolute",
            bottom: "20px",
            right: "20px",
            width: {
              xs: "15rem",
              md: "25rem",
            },
            transform: "rotate(180deg)",
          }}
        />
      </Box>
    </Box>
  );
}
