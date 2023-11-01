const fs = require("fs");
const path = require("path");

const saveDB = (DB, name) => {
  const ruta = path.resolve(__dirname, `../Database/${name}.json`);
  console.log(ruta);

  try {
    fs.writeFileSync(ruta, JSON.stringify(DB, null, 2), {
      encoding: "utf-8",
    });
  } catch (error) {
    console.error("Error al guardar el archivo:", error);
  }
};

const generarID = () => {
  let a = Date.now().toString(30);
  let b = Math.random().toString(30).substring(2);
  s;
  return a + b;
};

const Utils = {
  generarID,
  saveDB,
};

module.exports = Utils;
