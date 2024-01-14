function Button({ bgColor, textColor, handleEvent, children }) {
  return (
    <>
      <button
        style={{ backgroundColor: bgColor, color: textColor }}
        onClick={handleEvent}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
