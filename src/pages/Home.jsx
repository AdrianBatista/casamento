import { Box, Container, Typography } from "@mui/material";
import DateCounter from "../components/DateCounter";
import Pictures from "../components/Pictures";

export function HomePage() {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: 'url("/cover2.jpg")',
          height: "100vh",
          width: "100vw",
          backgroundSize: "cover",
          backgroundPosition: { xs: "center", md: "bottom right" },
          backgroundAttachment: "fixed",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "4rem", md: "6rem" },
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
              fontSize: { xs: "3rem", md: "4rem" },
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
            zIndex: "2",
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
            zIndex: "1",
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
            zIndex: "1",
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
            zIndex: "2",
          }}
        />
        <Box
          sx={{
            width: "100%",
            height: "max-content",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            paddingBlock: 5,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
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
                zIndex: "3",
              }}
            >
              Contagem Regressiva
            </Typography>
          </Box>
          <DateCounter />
        </Box>
      </Box>
      <Box
        sx={{
          background: "#F3F5FC",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pb: 15,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            fontWeight: 300,
            fontSize: { xs: "4rem", md: "6rem" },
            color: "#4D5E89",
            mt: 20,
            mb: 10,
            width: { xs: "250px", md: "auto" },
          }}
        >
          Nossa História
        </Typography>
        <Pictures />
      </Box>
    </Box>
  );
}
