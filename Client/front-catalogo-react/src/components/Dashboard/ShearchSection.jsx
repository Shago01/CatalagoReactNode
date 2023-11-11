import { useState, useEffect } from "react";
import Boton from "./Boton";
import SearchInput from "./SearchInput";

function ShearchSection({ datos, setActive, keyData, setObj, setElement }) {
  const [searchText, setSearchText] = useState("");
  const [categoria, setCategoria] = useState("");

  const listCategorias = datos[0]?.categoria
    ? Array.from(new Set(datos.map((producto) => producto.categoria)))
    : null;

  useEffect(() => {
    const filteredData = filterData(datos, searchText, categoria);
    setElement(filteredData);
  }, [datos, searchText, categoria]);

  const comboBox = listCategorias ? (
    <select
      className="searchSelect"
      onChange={(e) => setCategoria(e.target.value)}
    >
      <option placeholder="input" value={""}></option>
      {listCategorias.map((e, i) => {
        return (
          <option key={`${i}O`} value={e}>
            {e}
          </option>
        );
      })}
    </select>
  ) : null;

  const btn =
    keyData === "offer" ? null : (
      <Boton
        handleClick={() => {
          setActive(true);
          setObj({});
        }}
        className={"t-btn t-btn-add"}
      >
        Agregar
      </Boton>
    );

  return (
    <div className="menuTable">
      {btn}
      {comboBox}
      <SearchInput
        value={searchText}
        onChange={(newText) => setSearchText(newText)}
      />
    </div>
  );
}

function filterData(data, text, categoria) {
  const searchText = text.toLowerCase();
  const searchCatText = categoria.toLowerCase();

  const filteredData = data.filter((item) => {
    const itemText = item.name.toLowerCase();
    const itemCaText = item?.categoria.toLowerCase();
    return itemText.includes(searchText) && itemCaText.includes(searchCatText);
  });

  return filteredData;
}

export default ShearchSection;
