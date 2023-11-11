import { HANDLERS } from "../../utils/utils";
import Boton from "./Boton";
import { useEffect, useState } from "react";

function TableOffer({ data }) {
  const [products, setProducts] = useState(data);
  let cont = 1;

  useEffect(() => {
    setProducts(data);
  }, [data]);

  const handleDelete = (productId) => {
    HANDLERS.offer.del(productId);
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  const rows = products.map((product) => {
    return (
      <tr key={product.id} className="t-row">
        <td className="t-colum"> {cont++} </td>
        <td className="t-colum"> {product.name} </td>
        <td className="t-colum"> {product.marca} </td>
        <td className="t-colum"> {product.categoria} </td>
        <td className="t-colum"> 💲 {product.precio} </td>
        <td className="t-colum"> {product.offer} % </td>
        <td className="t-colum t-col-btn">
          <Boton
            handleClick={() => {
              handleDelete(product.id);
            }}
            className={"t-btn t-btn-del"}
          >
            ✖
          </Boton>
        </td>
      </tr>
    );
  });

  return (
    <div className="t-container">
      <table className="table">
        <thead className="t-row-head">
          <tr>
            <th className="t-colum t-colum-head"> N°</th>
            <th className="t-colum t-colum-head"> Nombre </th>
            <th className="t-colum t-colum-head"> Marca </th>
            <th className="t-colum t-colum-head"> Categoria </th>
            <th className="t-colum t-colum-head"> Precio </th>
            <th className="t-colum t-colum-head"> Oferta </th>
            <th className="t-colum t-colum-head"> Acciones </th>
          </tr>
        </thead>
        <tbody className="t-row t-row-body">{rows}</tbody>
      </table>
    </div>
  );
}

export default TableOffer;
