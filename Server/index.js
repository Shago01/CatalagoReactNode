const app = require("./src/app");

const PORT = process.env.PORT || 5500;

app.listen(PORT, (err) => {
  if (err) console.err(err);
  console.log(" 🚀 corriendo en el puerto ", PORT);
});
