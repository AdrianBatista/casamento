import { Box, Button, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export function PresentsPage() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Container sx={{ display: "flex", gap: 5, flexDirection: "column" }}>
        <Button
          sx={{
            width: "100%",
            background: "#F3F5FC",
            display: "flex",
            padding: 3,
          }}
          href="HTTPS://LISTAS.CASASBAHIA.COM.BR/GIOVANNAEADRIAN"
          target="_blank"
        >
          <Grid2 container spacing={3}>
            <Grid2
              xs={12}
              md={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src="/casasbahia.png" width={250} />
            </Grid2>
            <Grid2
              xs={12}
              md={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 700,
                  fontSize: "3rem",
                }}
              >
                Casas Bahia
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  textAlign: "left",
                }}
              >
                Lista de presentes disponível no site da Casas Bahia.
              </Typography>
            </Grid2>
          </Grid2>
        </Button>
        <Button
          sx={{
            width: "100%",
            background: "#F3F5FC",
            display: "flex",
            padding: 3,
          }}
          href="/gifts"
        >
          <Grid2 container spacing={3}>
            <Grid2
              xs={12}
              md={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src="/pix.png" width={250} />
            </Grid2>
            <Grid2
              xs={12}
              md={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 700,
                  fontSize: "3rem",
                }}
              >
                Lista Criativa
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  textAlign: "left",
                }}
              >
                Lista de presentes online para pagamento em PIX.
              </Typography>
            </Grid2>
          </Grid2>
        </Button>
      </Container>
    </Box>
  );
}
