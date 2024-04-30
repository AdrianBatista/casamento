import Grid from "@mui/material/Unstable_Grid2";
import Countdown from "react-countdown";
import DateCard from "./DateCard";

const renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        width: { xs: "240", md: "auto" },
      }}
    >
      <Grid xs={12} md={3}>
        <DateCard label="DAYS" value={days} />
      </Grid>
      <Grid xs={12} md={3}>
        <DateCard label="HORAS" value={hours} />
      </Grid>
      <Grid xs={12} md={3}>
        <DateCard label="MINUTOS" value={minutes} />
      </Grid>
      <Grid xs={12} md={3}>
        <DateCard label="SEGUNDOS" value={seconds} />
      </Grid>
    </Grid>
  );
};

export default function DateCounter() {
  return (
    <Countdown date={new Date("2024-11-16T16:30:00")} renderer={renderer} />
  );
}
