import CardAddress from "../Components/CardAddress";

export default function Home() {
  return (
    <>
      <CardAddress
        phone="9999999999"
        email="email@gmail.com"
        address="Tlaxiaco, Oaxaca"
        title="Contacto"
        btnSelect={true}
      />
    </>
  );
}
