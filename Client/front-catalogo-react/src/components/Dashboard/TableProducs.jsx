import { useState, useEffect } from "react";
import Boton from "./Boton";
import { HANDLERS } from "../../utils/utils";
import ModalOffer from "./ModalOffer";

function TableProducs({ data, setActive, setObj }) {
  const [products, setProducts] = useState(data);
  const [isModalActive, setModalActive] = useState(false);
  const [id, setid] = useState("");
  const [name, setName] = useState("");
  let cont = 1;

  useEffect(() => {
    setProducts(data);
  }, [data]);

  const handleDelete = (productId) => {
    HANDLERS.products.del(productId);
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  const clases = isModalActive ? "" : "m-close";

  const rows = products.map((product) => {
    return (
      <tr key={product.id} className="t-row">
        <td className="t-colum"> {cont++} </td>
        <td className="t-colum"> {product.name} </td>
        <td className="t-colum"> {product.marca} </td>
        <td className="t-colum"> {product.categoria} </td>
        <td className="t-colum"> 💲 {product.precio} </td>
        <td className="t-colum t-col-btn">
          <Boton
            handleClick={() => {
              setActive(true);
              setObj(product);
              HANDLERS.products.edit(product.id);
            }}
            className={"t-btn t-btn-edit"}
          >
            ✏
          </Boton>

          <Boton
            handleClick={() => {
              handleDelete(product.id);
            }}
            className={"t-btn t-btn-del"}
          >
            ✖
          </Boton>

          <Boton
            handleClick={() => {
              setModalActive(!isModalActive);
              setid(product.id);
              setName(product.name);
            }}
            className={"t-btn t-btn-offer"}
          >
            📈
          </Boton>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div className="t-container">
        <table className="table">
          <thead className="t-row-head">
            <tr>
              <th className="t-colum t-colum-head"> N°</th>
              <th className="t-colum t-colum-head"> Nombre </th>
              <th className="t-colum t-colum-head"> Marca </th>
              <th className="t-colum t-colum-head"> Categoria </th>
              <th className="t-colum t-colum-head"> Precio </th>
              <th className="t-colum t-colum-head"> Acciones </th>
            </tr>
          </thead>
          <tbody className="t-row t-row-body">{rows}</tbody>
        </table>
      </div>
      <ModalOffer
        setActive={setModalActive}
        id={id}
        className={clases}
        name={name}
      />
    </>
  );
}

export default TableProducs;
