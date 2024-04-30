import { Box, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { DateCalendar } from "@mui/x-date-pickers";
import dayjs from "dayjs";

export function PlacePage() {
  return (
    <>
      <Container>
        <Box my={10}>
          <Grid2 container>
            <Grid2
              xs={12}
              md={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingBlock: 5,
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "4rem", md: "6rem" },
                  color: "#4D5E89",
                  fontFamily: '"Parisienne", cursive',
                  textAlign: "center",
                }}
              >
                Marque na agenda!
              </Typography>
            </Grid2>
            <Grid2
              xs={12}
              md={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <DateCalendar
                defaultValue={dayjs("2024-11-16")}
                minDate={dayjs("2024-11-01")}
                maxDate={dayjs("2024-11-30")}
                views={["day"]}
                readOnly
                showDaysOutsideCurrentMonth
                slotProps={{
                  nextIconButton: { sx: { display: "none" } },
                  previousIconButton: { sx: { display: "none" } },
                }}
              />
            </Grid2>
          </Grid2>
        </Box>
        <Box sx={{ background: "#F3F5FC", padding: 5 }}>
          <Grid2 container spacing={3}>
            <Grid2
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                color: "#4D5E89",
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 400,
                  fontSize: "3rem",
                }}
              >
                Cerimônia
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 700,
                  fontSize: "2rem",
                }}
              >
                Paróquia São José - 16h30
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 700,
                  fontSize: "1.5rem",
                }}
              >
                R. Rui Barbosa, 1607 - Vila Santa Helena, Pres. Prudente - SP
              </Typography>
            </Grid2>
            <Grid2
              xs={12}
              md={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src="/igreja.png" style={{ height: 250 }} />
            </Grid2>
          </Grid2>
          <Box sx={{ paddingTop: 5 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.158030792505!2d-51.39807549015715!3d-22.11994961065643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9493f4481e013b17%3A0x138db49526ea182b!2sR.%20Rui%20Barbosa%2C%201607%20-%20Vila%20Santa%20Helena%2C%20Pres.%20Prudente%20-%20SP%2C%2019015-001!5e0!3m2!1sen!2sbr!4v1714494240724!5m2!1sen!2sbr"
              height="450"
              style={{ width: "100%" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Box>
        <Box sx={{ background: "#F3F5FC", padding: 5, marginTop: 5 }}>
          <Grid2 container spacing={3}>
            <Grid2
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                color: "#4D5E89",
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 400,
                  fontSize: "3rem",
                }}
              >
                Recepção
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 700,
                  fontSize: "2rem",
                }}
              >
                Espaço Toledo - 18h
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 700,
                  fontSize: "1.5rem",
                }}
              >
                Uep6-S.1, Presidente Prudente - SP
              </Typography>
            </Grid2>
            <Grid2
              xs={12}
              md={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src="/festa.png" style={{ height: 250 }} />
            </Grid2>
          </Grid2>
          <Box sx={{ paddingTop: 5 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.3406066570487!2d-51.380557525074366!3d-22.11298560998378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9493f53a602a6bd5%3A0xdc032281fa4315c8!2sEspa%C3%A7o%20Toledo%20-%20Sal%C3%A3o%20de%20Festas%20e%20Eventos!5e0!3m2!1sen!2sbr!4v1714494599774!5m2!1sen!2sbr"
              height="450"
              style={{ width: "100%" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Box>
      </Container>
    </>
  );
}
