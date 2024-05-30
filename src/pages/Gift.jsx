import { useEffect, useState } from "react";
import Gift from "../entities/Gift";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import MP from "../payment/MP";
import { useParams } from "react-router-dom";
import Payment from "../entities/Payment";

export function GiftPage() {
  const { id } = useParams();
  const [gift, setGift] = useState(null);
  const [form, setForm] = useState({ name: "", message: "" });
  const giftEntity = new Gift();
  const paymentEntity = new Payment();

  const handleChange = (e) => {
    setForm((old) => ({
      ...old,
      [e.target.name]: e.target.value,
    }));
  };

  const redirect = (link) => {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = link;
    a.target = "_blank";
    a.click();
  };

  const redirectToPayment = async (gift) => {
    const payment = await new MP().generatePayment(gift);
    const data = { ...payment, ...form };
    await paymentEntity.create(data);
    redirect(payment.init_point);
  };

  useEffect(() => {
    const getGift = async () => {
      const data = await giftEntity.get(id);
      setGift(data);
    };

    getGift();
  }, []);

  return (
    <>
      <Container
        sx={{
          mt: 5,
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Paper sx={{ p: 3, width: "100%", maxWidth: "600px" }}>
          <Typography variant="h4" mb={3}>
            Informações do Presente
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            {gift && <img src={gift.image} height={200} width={200} />}
          </Box>
          <Box mt={3}>
            {gift && (
              <>
                <Typography>Presente: {gift.title}</Typography>
                <Typography>Preço: R$ {gift.price},00</Typography>
              </>
            )}
          </Box>
          <Typography variant="h4" mt={5}>
            Seus Dados
          </Typography>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              redirectToPayment(gift);
            }}
          >
            <Box mt={2}>
              <TextField
                sx={{ mb: 1 }}
                id="nameField"
                label="Nome Completo"
                name="name"
                variant="outlined"
                required
                fullWidth
                onChange={handleChange}
              />
              <TextField
                id="messageField"
                label="Mensagem (Opcional)"
                variant="outlined"
                name="message"
                fullWidth
                multiline
                onChange={handleChange}
              />
            </Box>
            <Box>
              <Button
                variant="contained"
                fullWidth
                sx={{ backgroundColor: "#4D5E89", mt: 1 }}
                type="submit"
              >
                Seguir para compra
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </>
  );
}
