import { useEffect } from "react";
import { Container, Paper, Typography } from "@mui/material";
import Payment from "../entities/Payment";
import { useSearchParams } from "react-router-dom";
import Gift from "../entities/Gift";

export function SuccessPaymentPage() {
  const paymentEntity = new Payment();
  const giftEntity = new Gift();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const getPayment = async () => {
      const id = searchParams.get("preference_id");
      const paymentData = await paymentEntity.get(id);
      if (!paymentData.status) {
        await paymentEntity.edit(id, {
          status: "approved",
        });
        const itemData = await giftEntity.get(paymentData.item_id);
        let buyers = itemData.buyers;
        await giftEntity.edit(paymentData.item_id, { buyers: buyers + 1 });
      }
    };

    getPayment();
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
            Recebemos seu presente!
          </Typography>
          <Typography variant="h5">
            Muito obrigado por esse presente tão especial! Estamos anciosos para
            receber você em nosso casamento no dia 16/11/2024!
          </Typography>
        </Paper>
      </Container>
    </>
  );
}
