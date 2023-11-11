import Boton from "./Boton";
import "../../css/barraLateral.css";
import { traerOfferts, traerProducts } from "../../utils/utils";

function BarraLateral({ setContenido, setLogin, setKey }) {
  const handleSalir = () => setLogin(false);

  const handleClickProduct = async () => {
    const products = await traerProducts();
    setKey("products");
    setContenido(products);
  };

  const handleClickOffer = async () => {
    const offer = await traerOfferts();
    setKey("offer");
    setContenido(offer);
  };

  return (
    <>
      <aside className="barraLateral">
        <div className="bl-head">
          <i className="fa-solid fa-user"></i>
          <h2> Panel De Control</h2>
        </div>
        <div className="bl-body">
          <div className="bl-item">
            <i className="  fa-solid fa-desktop"></i>
            <Boton className="bl-btn" handleClick={handleClickProduct}>
              Productos
            </Boton>
          </div>
          <div className="bl-item">
            <i className="  fa-solid fa-address-card"></i>
            <Boton className="bl-btn">Usuarios</Boton>
          </div>
          <div className="bl-item">
            <i className="  fa-solid fa-cart-shopping"></i>
            <Boton className="bl-btn" handleClick={handleClickOffer}>
              Ofertas
            </Boton>
          </div>
        </div>
        <div className="bl-item">
          <i className="  fa-solid fa-right-to-bracket"></i>
          <Boton className="bl-btn" handleClick={handleSalir}>
            Salir
          </Boton>
        </div>
      </aside>
    </>
  );
}

export default BarraLateral;
