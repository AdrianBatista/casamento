import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Countdown from "react-countdown";

const renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        width: { xs: 120, md: "auto" },
      }}
    >
      <Grid xs={12} md={3}>
        <Box
          sx={{
            background: "#4D5E89",
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
            {days}
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 300,
              fontSize: "1rem",
              color: "white",
            }}
          >
            DIAS
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={3}>
        <Box
          sx={{
            background: "#4D5E89",
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
            {hours}
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 300,
              fontSize: "1rem",
              color: "white",
            }}
          >
            HORAS
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={3}>
        <Box
          sx={{
            background: "#4D5E89",
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
            {minutes}
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 300,
              fontSize: "1rem",
              color: "white",
            }}
          >
            MINUTOS
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={3}>
        <Box
          sx={{
            background: "#4D5E89",
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
            {seconds}
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 300,
              fontSize: "1rem",
              color: "white",
            }}
          >
            SEGUNDOS
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default function DateCounter() {
  return (
    <Countdown date={new Date("2024-11-16T16:30:00")} renderer={renderer} />
  );
}
