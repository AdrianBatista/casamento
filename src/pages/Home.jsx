import { Box, Container, Typography } from "@mui/material";
import DateCounter from "../components/DateCounter";

export function HomePage() {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: 'url("/cover.png")',
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
      <Box
        sx={{
          width: "100vw",
          minHeight: "100vh",
          position: "relative",
          paddingBlock: { xs: 10, md: 0 },
        }}
      >
        <Box
          component={"img"}
          src={"/moldura.png"}
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
          src={"/mancha.png"}
          sx={{
            position: "absolute",
            bottom: "0",
            left: "0",
            width: {
              xs: "15rem",
              md: "25rem",
            },
            zIndex: "5",
          }}
        />
        <Box
          component={"img"}
          src={"/mancha.png"}
          sx={{
            position: "absolute",
            top: "0",
            right: "0",
            width: {
              xs: "15rem",
              md: "25rem",
            },
            transform: "rotate(180deg)",
            zIndex: "5",
          }}
        />
        <Box
          component={"img"}
          src={"/moldura.png"}
          sx={{
            position: "absolute",
            bottom: "20px",
            right: "20px",
            width: {
              xs: "15rem",
              md: "25rem",
            },
            transform: "rotate(180deg)",
            zIndex: "10",
          }}
        />
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: { xs: "4rem", md: "6rem" },
              color: "#4D5E89",
              mb: 4,
              width: { xs: "250px", md: "auto" },
            }}
          >
            Contagem Regressiva
          </Typography>
          <DateCounter />
        </Box>
      </Box>
    </Box>
  );
}
