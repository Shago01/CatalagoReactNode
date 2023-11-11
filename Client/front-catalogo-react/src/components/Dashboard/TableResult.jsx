import { useState } from "react";
import "../../css/tablaResults.css";

import ShearchSection from "./ShearchSection";

import { TABLES } from "../../utils/utils";
import ModalProduct from "./ModalProduct";

const TableResults = ({ datos, keyData }) => {
  const [foundElement, setFonundElement] = useState([]);
  const [obj, setObJ] = useState({});
  const Table = TABLES[keyData];
  const [isModalActive, setActive] = useState(false);

  const clases = isModalActive ? "" : "m-close";

  return (
    <div className="tableResult">
      <ShearchSection
        datos={datos}
        keyData={keyData}
        setActive={setActive}
        setObj={setObJ}
        setElement={setFonundElement}
      />

      {<Table data={foundElement} setActive={setActive} setObj={setObJ} />}

      <ModalProduct setActive={setActive} className={clases} data={obj} />
    </div>
  );
};

export default TableResults;
