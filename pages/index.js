import CustomButton from "../Components/CustomButton";
import CustomInput from "../Components/CustomInput";

export default function Home() {
  return (
    <>
      <CustomInput placeholder="Nombre" label="Nombre:" />
      <CustomButton>Aceptar</CustomButton>
    </>
  );
}
