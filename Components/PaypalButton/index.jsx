import { PayPalButton } from "react-paypal-button-v2";

export default function PaypalBtn() {
  return (
    <PayPalButton
      amount="0.01"
      // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
      onSuccess={(details, data) => {
        alert("Transaction completed by " + details.payer.name.given_name);

        console.log("estoy aqui:", detail);

        // OPTIONAL: Call your server to save the transaction
      }}
    />
  );
}
