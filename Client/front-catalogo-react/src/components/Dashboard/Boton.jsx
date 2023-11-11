function Boton({ handleClick, children, className }) {
  return (
    <button className={`btn ${className}`} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Boton;
