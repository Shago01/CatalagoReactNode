import Boton from "../Dashboard/Boton";

function LandingHeader({ onPageChange }) {
  return (
    <header className="header">
      <div className="header-logo">
        <span className="header-logo-name"> PCMarck </span>
      </div>

      <div className="header-nav">
        <div className="header-nav-item">
          <Boton
            className={"header-nav-btn"}
            handleClick={() => onPageChange("offer")}
          >
            Ofertas
          </Boton>
        </div>

        <div className="header-nav-item">
          <Boton
            className={"header-nav-btn"}
            handleClick={() => onPageChange("Computadores")}
          >
            Computadores
          </Boton>
        </div>

        <div className="header-nav-item">
          <Boton
            className={"header-nav-btn"}
            handleClick={() => onPageChange("Telefonos")}
          >
            Telefonos
          </Boton>
        </div>

        <div className="header-nav-item">
          <Boton
            className={"header-nav-btn"}
            handleClick={() => onPageChange("Televisores")}
          >
            Televisores
          </Boton>
        </div>

        <div className="header-nav-item">
          <Boton
            className={"header-nav-btn"}
            handleClick={() => onPageChange("Consolas")}
          >
            Consolas
          </Boton>
        </div>
      </div>

      <div className="header-btn">
        <div className="btn-login">
          <a target="__blanck" href="./login.html">
            Ingresar
          </a>
        </div>
      </div>
    </header>
  );
}

export default LandingHeader;
