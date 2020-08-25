function Button({ type, btnStyle, children }) {
  return (
    <div>
      <button type={type} className={btnStyle}>
        {children}
      </button>
      <style jsx>
        {`
          .btn-orange {
            color: #ffffff;
            background-color: #f29e00;
            border-radius: 5px;
            border: none;
            min-width: 104px;
            height: 35.18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4),
              0 6px 20px 0 rgba(0, 0, 0, 0.19);
          }
          .btn-green {
            color: #ffffff;
            background-color: #9cbf01;
            border-radius: 5px;
            border: none;
            min-width: 104px;
            height: 35.18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4),
              0 6px 20px 0 rgba(0, 0, 0, 0.19);
          }
        `}
      </style>
    </div>
  );
}

export default Button;
