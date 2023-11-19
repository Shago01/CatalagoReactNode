import { useEffect, useState } from "react";
import SearchInput from "../Dashboard/SearchInput";

function ShearchSection({ datos, setElement }) {
  console.log("esto son datos: ", datos);
  const [searchText, setSearchText] = useState("");
  const [marca, setMarca] = useState("");
  let listaMarcas;

  if (datos) {
    listaMarcas = Array.from(new Set(datos.map((producto) => producto.marca)));
  }

  useEffect(() => {
    if (datos) {
      const filteredData = filterData(datos, searchText, marca);
      setElement(filteredData);
    }
  }, [datos, searchText, marca]);

  const comboBox = listaMarcas ? (
    <select className="searchSelect" onChange={(e) => setMarca(e.target.value)}>
      <option placeholder="input" value={""}></option>
      {listaMarcas.map((e, i) => {
        return (
          <option key={`${i}O`} value={e}>
            {e}
          </option>
        );
      })}
    </select>
  ) : null;

  return (
    <div className="menuTable">
      {comboBox}
      <SearchInput
        value={searchText}
        onChange={(newText) => setSearchText(newText)}
      />
    </div>
  );
}

function filterData(data, text, marca) {
  const searchText = text.toLowerCase();
  const searchMarText = marca.toLowerCase();

  const filteredData = data.filter((item) => {
    const itemText = item.name.toLowerCase();
    const itemMaText = item?.marca.toLowerCase();
    return itemText.includes(searchText) && itemMaText.includes(searchMarText);
  });

  return filteredData;
}

export default ShearchSection;
