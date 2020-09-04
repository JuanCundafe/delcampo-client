import { PayPalButton } from "react-paypal-button-v2";
import { useRouter } from "next/router";

export default function PaypalBtn() {
  const router = useRouter();

  return (
    <PayPalButton
      amount="0.01"
      onSuccess={(details, data) => {
        router.push("/home");
        // alert("Transaction completed by " + details.payer.name.given_name);

        console.log("estoy aqui:", detail);
      }}
    />
  );
}
