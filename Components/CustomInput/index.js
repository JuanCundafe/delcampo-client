function CustomInput({ type, placeholder, label, name }) {
  return (
    <div>
      <div className="input-container">
        <label>{label}</label>
        <input type={type || "text"} name={name} placeholder={placeholder} />
      </div>
    </div>
  );
}

export default CustomInput;
