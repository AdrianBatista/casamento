export default class MP {
  #token = import.meta.env.VITE_mercadopagoKey;
  constructor() {}

  async generatePayment(gift) {
    const endpoint = "https://api.mercadopago.com/checkout/preferences";
    const paymentData = {
      items: [
        {
          id: gift.id,
          title: gift.title,
          quantity: 1,
          currency_id: "BRL",
          unit_price: gift.price,
        },
      ],
      back_urls: {
        success: import.meta.env.VITE_homeurl + "payment/success",
      },
      auto_return: "approved",
      payment_methods: {
        installments: 3,
        default_installments: 1,
      },
    };
    const response = await fetch(endpoint, {
      method: "POST",
      headers: new Headers({
        Authorization: "Bearer " + this.#token,
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(paymentData),
    });
    const responseData = await response.json();
    return {
      id: responseData.id,
      init_point: responseData.init_point,
      sandbox_init_point: responseData.sandbox_init_point,
      item_id: gift.id,
      price: gift.price,
    };
  }
}
