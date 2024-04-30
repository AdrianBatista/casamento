import { Container } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const picturesData = [
  {
    url: "/pictures/Frame 34.png",
    description: "",
  },
  {
    url: "/pictures/Frame 37.png",
    description: "",
  },
  {
    url: "/pictures/Frame 16.png",
    description: "",
  },
  {
    url: "/pictures/Frame 18.png",
    description: "",
  },
  {
    url: "/pictures/Frame 25.png",
    description: "",
  },
  {
    url: "/pictures/Frame 24.png",
    description: "",
  },
  {
    url: "/pictures/Frame 15.png",
    description: "",
  },
  {
    url: "/pictures/Frame 27.png",
    description: "",
  },
  {
    url: "/pictures/Frame 14.png",
    description: "",
  },
  {
    url: "/pictures/Frame 26.png",
    description: "",
  },
  {
    url: "/pictures/Frame 28.png",
    description: "",
  },
  {
    url: "/pictures/Frame 29.png",
    description: "",
  },
  {
    url: "/pictures/Frame 30.png",
    description: "",
  },
  {
    url: "/pictures/Frame 36.png",
    description: "",
  },
  {
    url: "/pictures/Frame 33.png",
    description: "",
  },
  {
    url: "/pictures/Frame 32.png",
    description: "",
  },
  {
    url: "/pictures/Frame 35.png",
    description: "",
  },
  {
    url: "/pictures/Frame 10.png",
    description: "",
  },
  {
    url: "/pictures/Frame 13.png",
    description: "",
  },
  {
    url: "/pictures/Frame 31.png",
    description: "",
  },
  {
    url: "/pictures/Frame 17.png",
    description: "",
  },
  {
    url: "/pictures/Frame 19.png",
    description: "",
  },
  {
    url: "/pictures/Frame 21.png",
    description: "",
  },
  {
    url: "/pictures/Frame 20.png",
    description: "",
  },
  {
    url: "/pictures/Frame 12.png",
    description: "",
  },
  {
    url: "/pictures/Frame 22.png",
    description: "",
  },
  {
    url: "/pictures/Frame 8.png",
    description: "",
  },
  {
    url: "/pictures/Frame 9.png",
    description: "",
  },
];

export default function Pictures() {
  return (
    <Container>
      <Grid2 container spacing={2}>
        {picturesData.map((picture, index) => (
          <Grid2 xs={12} sm={6} md={3} key={index}>
            <img src={picture.url} width="100%" />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
}
