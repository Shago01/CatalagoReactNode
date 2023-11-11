import { useState } from "react";
import BarraLateral from "./BarraLateral";
import SectionMain from "./SectionMain";

function Dashboard({ setLogin }) {
  const [contenidoMain, setContenidoMain] = useState([]);
  const [keydata, setKeydata] = useState("default");
  return (
    <div className="dashBoard">
      <BarraLateral
        setContenido={setContenidoMain}
        setLogin={setLogin}
        setKey={setKeydata}
      />
      <SectionMain keyData={keydata} data={contenidoMain} />
    </div>
  );
}

export default Dashboard;
