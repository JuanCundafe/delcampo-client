function CustomInput({ type, placeholder, label, name }) {
  return (
    <div>
      <div className="input-container">
        <label>{label}</label>
        <input type={type || "text"} name={name} placeholder={placeholder} />
      </div>
      <style>
        {`
        .input-container{
          margin:5px;
          color:white;
        }
        label{
          display:block;
          margin-bottom: 5px;
        }
        input{
          padding:8px;
          border-radius:10px;
          border:none;
        }
        `}
      </style>
    </div>
  );
}

export default CustomInput;
