const ControlProduct = require("../Controller/productController");

// es posible que mas adelante todo se deva devolver como un arreglo, para poder renderizar componentes

const getAllProduct = (req, res) => {
  try {
    const data = ControlProduct.getAllProducts();
    res.status(200).json({ status: "ok", data });
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

const getOneProduct = (req, res) => {
  try {
    const id = req.params.id;
    const data = ControlProduct.getOneProduct(id);
    res.status(200).json({ status: "ok", data });
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

const postNewProduct = (req, res) => {
  try {
    const data = ControlProduct.postNewProduct({ ...req.body });
    res.status(301).json({
      status: "ok",
      message: data.message,
      data: data.productNew,
    });
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

const deleteProduct = (req, res) => {
  try {
    const data = ControlProduct.deleteProduct(req.params.id);
    res.status(200).json({
      status: "ok",
      message: data.message,
      data: data.productDelete,
    });
  } catch (error) {
    res.status(404).send({ status: "error", error: error.message });
  }
};

const putUpdateProduct = (req, res) => {
  try {
    const data = ControlProduct.putUdateProduct(req.params.id, {
      ...req.body,
    });
    res.status(301).json({
      status: "ok",
      message: data.message,
      productPrevius: data.productprevious,
      productNext: data.productnext,
    });
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

const postAddNewProductOffer = (req, res) => {
  try {
    const data = ControlProduct.addProductOffer(req.params.id, req.body.offer);

    res.status(200).json({
      status: "ok",
      message: data.message,
    });
  } catch (error) {
    res.status(404).send({ status: "error", error: error.message });
  }
};

const getAllProductsOffer = (req, res) => {
  try {
    const data = ControlProduct.allProductOffer();
    res.status(200).json({ status: "ok", data });
  } catch (error) {
    res.status(404).send({ status: "error", error: error.message });
  }
};

const deleteProdutOffer = (req, res) => {
  try {
    const data = ControlProduct.deleteProductOffer(req.params.id);
    res.status(200).json({
      status: "ok",
      message: data.message,
      data: data.offerDelete,
    });
  } catch (error) {
    res.status(404).send({ status: "error", error: error.message });
  }
};

module.exports = {
  getAllProduct,
  getOneProduct,
  postNewProduct,
  deleteProduct,
  putUpdateProduct,
  postAddNewProductOffer,
  getAllProductsOffer,
  deleteProdutOffer,
};
