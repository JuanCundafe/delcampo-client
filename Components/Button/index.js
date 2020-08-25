export default function Button({ type, btnStyle, children }) {
  return (
    <div>
      <button type={type} className={btnStyle}>
        {children}
      </button>
    </div>
  );
}
