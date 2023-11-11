import "../../css/SectionMain.css";
import TableResults from "./tableResult";

const SectionMain = ({ keyData, data }) => {
  const keyuse = keyData;
  const dataUse = data;

  const contenido =
    keyuse == "default" ? (
      <div className="container">
        <h1 className="ctm-title">Bienvenido</h1>
        <p className="ctm-text">
          Optimiza la gestión de tu catálogo en línea con nuestro dashboard
          especializado. Actualiza información, crea nuevos productos y ofertas,
          y mantén tu sitio web siempre fresco y atractivo. Simplificamos la
          administración para que puedas enfocarte en cautivar a tus clientes.
        </p>
      </div>
    ) : (
      <TableResults datos={dataUse} keyData={keyuse} />
    );

  return (
    <div className="setionMain">
      <header className="ctm-head">
        <div className="ctm-head-log">
          <img src="" alt="" />
          <h2 className="ctm-head-title">DashBoard Admin</h2>
        </div>
      </header>
      {contenido}
    </div>
  );
};

export default SectionMain;
