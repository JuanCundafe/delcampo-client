import { PayPalButton } from "react-paypal-button-v2";

export default function PaypalBtn() {
  return (
    <PayPalButton
      amount="0.01"
      onSuccess={(details, data) => {
        alert("Transaction completed by " + details.payer.name.given_name);

        console.log("estoy aqui:", detail);
      }}
    />
  );
}
