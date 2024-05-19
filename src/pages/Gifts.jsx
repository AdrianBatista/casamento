import { useEffect, useState } from "react";
import Gift from "../entities/Gift";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import MP from "../payment/MP";

export function GiftsPage() {
  const [gifts, setGifts] = useState([]);
  const giftEntity = new Gift();

  const redirectToPayment = async (gift) => {
    const paymentLink = await new MP().generatePaymentLink(gift);
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = paymentLink;
    a.target = "_blank";
    a.click();
  };

  useEffect(() => {
    const getGifts = async () => {
      const data = await giftEntity.all();
      setGifts(data);
    };

    getGifts();
  }, []);

  return (
    <>
      <Container
        sx={{
          mt: 5,
        }}
      >
        <Grid2 container spacing={2}>
          {gifts.map((gift, index) => (
            <Grid2 xs={12} sm={6} md={3} key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia sx={{ height: 140 }} image={gift.image} />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {gift.title}
                  </Typography>
                  <Typography gutterBottom variant="h5" mt={3} component="div">
                    R$ {gift.price},00
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ backgroundColor: "#4D5E89" }}
                    onClick={() => redirectToPayment(gift)}
                  >
                    Comprar
                  </Button>
                </CardActions>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </>
  );
}
