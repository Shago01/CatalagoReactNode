const DATAPRODUCT = require("../Database/DATAPRODUCT.json");
const DATAPRODUCTOFFER = require("../Database/DATAOFERTA.json");
const { generarID, saveDB } = require("../utils/utils");

const getAllProducts = () => {
  try {
    if (!DATAPRODUCT.products) throw Error("No hay datos en la DB");
    return DATAPRODUCT;
  } catch (error) {
    throw error;
  }
};

const getOneProduct = (id) => {
  try {
    if (!/^[0-9A-Za-z]+$/.test(id)) throw Error("id incorrecto");

    const product = DATAPRODUCT.products.find((e) => e.id == id);

    if (!product) throw Error("El producto no existe");

    return product;
  } catch (error) {
    throw error;
  }
};

const postNewProduct = (data) => {
  try {
    const productNew = { ...data, id: generarID() };
    const isProducNew = DATAPRODUCT.products.find(
      (product) => product.name.toLowerCase() === productNew.name.toLowerCase()
    );

    if (isProducNew) throw Error("El producto ya exite");
    DATAPRODUCT.products.push(productNew);
    saveDB(DATAPRODUCT, "DATAPRODUCT");

    const status = {
      message: "El producto se ha agregado satisfactoriamente.",
      productNew,
    };

    return status;
  } catch (error) {
    throw error;
  }
};

const putUdateProduct = (id, product) => {
  try {
    const postionProduct = DATAPRODUCT.products.findIndex((e) => id == e.id);
    const nameProduct = DATAPRODUCT.products.findIndex(
      (e) => e.name == product.name
    );

    if (!(postionProduct > -1)) throw Error("El producto no exite");
    if (nameProduct > -1) throw Error("El nombre de Producto ya Existe");

    const [productprevious] = DATAPRODUCT.products.splice(postionProduct, 1);
    const productnext = { ...productprevious, ...product };

    DATAPRODUCT.products.push(productnext);

    /**
     *
     * implementar la función saveDB
     *
     */

    const status = {
      message: "El producto se ha actualizado satisfactoriamente.",
      productprevious,
      productnext,
    };
    return status;
  } catch (error) {
    throw error;
  }
};

const deleteProduct = (id) => {
  try {
    const DB = DATAPRODUCT;
    const postionProduct = DB.products.findIndex((e) => id == e.id);
    if (!(postionProduct > -1)) throw Error("El producto no exite");

    const [productDelete] = DB.products.splice(postionProduct, 1);
    deleteProductOffer(id);
    /**
     *
     * implementar la función saveDB
     *
     */

    const status = {
      message: "El producto ha sido eliminado satisfactoriamente.",
      productDelete,
    };
    return status;
  } catch (error) {
    throw error;
  }
};

const addProductOffer = (id, offer) => {
  try {
    const DB = DATAPRODUCT;
    const DBOFFER = DATAPRODUCTOFFER;

    const isProductExists = DB.products.findIndex(
      (product) => id == product.id
    );
    const isProductOffer = DBOFFER.produts.findIndex(
      (product) => product.id == id
    );

    console.log("verificar si ya existe una oferta", isProductOffer);

    if (!(isProductExists > -1)) throw Error("el producto no existe");
    if (isProductOffer > -1) throw Error("el producto ya tiene una oferta");

    DBOFFER.produts.push({ id, offer });
    saveDB(DBOFFER, "DATAOFERTA");

    const status = {
      message: "Se ha añadido una oferta satisfactoriamente.",
    };

    return status;
  } catch (error) {
    throw error;
  }
};

const allProductOffer = () => {
  try {
    const DB = DATAPRODUCT;
    const DBOFFER = DATAPRODUCTOFFER;

    if (!(DBOFFER.produts.length > 0))
      throw Error("no hay productos en offerta");

    const Offers = DBOFFER.produts.map((product) => {
      const objP = DB.products.find((productDB) => productDB.id == product.id);
      const offerProduct = { ...objP, offer: product.offer };
      return offerProduct;
    });

    return Offers;
  } catch (error) {
    throw error;
  }
};

const deleteProductOffer = (id) => {
  try {
    const DBOFFER = DATAPRODUCTOFFER;

    const positionOffer = DBOFFER.produts.findIndex((e) => id == e.id);
    if (!(positionOffer > -1)) throw Error("la oferta no exite");

    const [offerDelete] = DBOFFER.produts.splice(positionOffer, 1);
    saveDB(DBOFFER, "DATAOFERTA");

    const data = {
      message: "la oferta sido eliminado satisfactoriamente.",
      offerDelete,
    };
    return data;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  postNewProduct,
  putUdateProduct,
  deleteProduct,
  addProductOffer,
  allProductOffer,
  deleteProductOffer,
};
