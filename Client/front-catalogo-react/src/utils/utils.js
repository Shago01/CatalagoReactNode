import ModalOffer from "../components/Dashboard/ModalOffer";
import TableOffer from "../components/Dashboard/TableOffer";
import TableProducs from "../components/Dashboard/TableProducs";

async function addProduct(product) {
  if (
    !product.name ||
    !product.description ||
    !product.categoria ||
    !product.precio ||
    !product.marca ||
    !product.resolucion ||
    !product.peso
  ) {
    alert("se debe llenar todos los campos ");
  } else {
    try {
      const response = await fetch(`http://localhost:5500/products/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      if (!response.ok) {
        const dataError = await response.json();
        alert(dataError.error);
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
    return false;
  }
}

async function delOffer(id) {
  try {
    const promise = await fetch(`http://localhost:5500/offer/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (promise.ok) {
      const data = await promise.json();
      alert(data.message);
    } else {
      const data = await promise.json();
      alert(data.error);
    }
  } catch (error) {
    console.log(error);
  }
}

async function editProduct(id, product) {
  if (!product) {
    return false;
  } else if (
    !product.name ||
    !product.description ||
    !product.categoria ||
    !product.precio ||
    !product.marca ||
    !product.resolucion ||
    !product.peso
  ) {
    alert("se debe llenar todos los campos ");
  } else {
    try {
      const response = await fetch(`http://localhost:5500/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (!(response.status == 301)) {
        const dataError = await response.json();
        alert(dataError.error);
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

async function delProduct(id) {
  try {
    const promise = await fetch(`http://localhost:5500/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (promise.ok) {
      const data = await promise.json();
      alert(data.message);
    } else {
      const data = await promise.json();
      alert(data.error);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function addOffer(id, offer) {
  if (offer == 0) {
    alert("la oferta no puede ser : 0");
  } else {
    try {
      const response = await fetch(`http://localhost:5500/offer/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ offer }),
      });

      if (!response.ok) {
        const dataError = await response.json();
        alert(dataError.error);
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export async function traerOfferts() {
  try {
    const promise = await fetch("http://localhost:5500/offer");
    let offer = await promise.json();
    return offer.data;
  } catch (error) {
    console.log(error);
  }
}

export const traerProducts = async () => {
  try {
    const promise = await fetch("http://localhost:5500/products");
    if (!promise.ok) throw new Error("ha sucedido un error Duratne la llamada");
    const dataProduts = await promise.json();
    return dataProduts.data.products;
  } catch (error) {
    console.log(error);
  }
};

export const HANDLERS = {
  products: {
    add: addProduct,
    edit: editProduct,
    del: delProduct,
    offer: ModalOffer,
  },
  offer: {
    del: delOffer,
  },
};

export const TABLES = {
  products: TableProducs,
  offer: TableOffer,
};
