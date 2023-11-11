import { useState, useEffect } from "react";
import Boton from "./Boton";
import { HANDLERS } from "../../utils/utils";
import "../../css/form.css";

function ModalProduct({ className, setActive, data }) {
  const [product, setProduct] = useState({ ...data });
  const [errors, setErrors] = useState({});
  const [isErros, setIsErros] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!product || !product.name || product.name.trim() === "") {
      newErrors.name = "El nombre es obligatorio";
    } else if (product.name.length > 50) {
      newErrors.name = "El nombre no debe ser mayor a 50 caracteres";
    }

    if (
      !product ||
      !product.categoria ||
      !/^[A-Za-z]+$/.test(product.categoria)
    ) {
      newErrors.categoria =
        "La categoría es obligatoria y solo puede tener letras sin espacios";
    }

    if (!product || !product.precio || product.precio <= 0) {
      newErrors.precio = "El precio es obligatorio y no puede ser 0";
    }

    if (!product || !product.marca || !/^[A-Za-z]+$/.test(product.marca)) {
      newErrors.marca =
        'La "Marca" es obligatoria y solo puede tener letras sin espacios';
    }

    if (
      !product ||
      !product.resolucion ||
      !/^[A-Za-z0-9\s]+$/.test(product.resolucion)
    ) {
      newErrors.resolucion =
        'La "Resolución" es obligatoria y no puede tener caracteres especiales';
    }

    if (!product || !product.peso || !/^[A-Za-z0-9\s]+$/.test(product.peso)) {
      newErrors.peso =
        'El "Peso" es obligatorio y no puede tener caracteres especiales';
    }

    if (
      !product ||
      !product.description ||
      !/^[A-Za-z0-9\s]+$/.test(product.description)
    ) {
      newErrors.description =
        'La "Descripción" es obligatoria y no puede tener caracteres especiales';
    }

    if (!product || !product.img || product.img.trim() === "") {
      newErrors.img = "La Url de imagen es obligatoria";
    } else if (
      !product?.img.includes(".jpg") ||
      !product?.img.includes(".png")
    ) {
      newErrors.img = "La imagen debe tener la extensión jpg o png";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("errors", errors);
    if (validateForm()) {
      HANDLERS.products.add(product);
    } else {
      setIsErros(true);
    }
  };

  const btn = product?.id ? (
    <Boton
      className={"btn-offer "}
      handleClick={() => {
        HANDLERS.products.edit(product.id, product);
      }}
    >
      Editar
    </Boton>
  ) : (
    <Boton
      className={"btn-offer "}
      handleClick={(e) => {
        handleSubmit(e);
      }}
    >
      Crear
    </Boton>
  );

  useEffect(() => {
    setErrors({});
    setIsErros(false);
    setProduct({ ...data });
  }, [data]);

  return (
    <div className={`modal ${className}`}>
      <div className="container-form">
        <div className="container-btn">
          <div onClick={() => setActive(false)} className="btn btn-close t-btn">
            X
          </div>
        </div>
        <form className="form" action="#">
          <div className="formgrup">
            <label htmlFor="name" className="form-label">
              Nombre
            </label>
            <div className="form-grup-input">
              <input
                id="name"
                value={product?.name || ""}
                required
                onChange={(e) => {
                  setProduct({ ...product, name: e.target.value });
                  setErrors({ ...errors, name: null });
                  setIsErros(false);
                }}
                className="form-input"
                type="text"
                placeholder="Nombre..."
              />

              {errors?.name && (
                <>
                  <i
                    className="form-estado fa-solid fa-circle-xmark"
                    style={{ color: "red" }}
                  ></i>
                  <p className="form-input-error">{errors.name}</p>
                </>
              )}
            </div>
          </div>

          <div className="formgrup">
            <label htmlFor="categoria" className="form-label">
              Categoria
            </label>
            <div className="form-grup-input">
              <input
                id="categoria"
                value={product?.categoria || ""}
                onChange={(e) => {
                  setProduct({ ...product, categoria: e.target.value });
                  setErrors({ ...errors, categoria: null });
                  setIsErros(false);
                }}
                required
                className="form-input"
                type="text"
                placeholder="Categoria..."
              />
              {errors?.categoria && (
                <>
                  <i
                    className="form-estado fa-solid fa-circle-xmark"
                    style={{ color: "red" }}
                  ></i>
                  <p className="form-input-error">{errors.categoria}</p>
                </>
              )}
            </div>
          </div>

          <div className="formgrup">
            <label htmlFor="precio" className="form-label">
              precio
            </label>
            <div className="form-grup-input">
              <input
                value={product?.precio || ""}
                onChange={(e) => {
                  setProduct({ ...product, precio: Number(e.target.value) });
                  setErrors({ ...errors, precio: null });
                  setIsErros(false);
                }}
                id="precio"
                required
                className="form-input"
                type="number"
                placeholder="10..."
              />
              {errors?.precio && (
                <>
                  <i
                    className="form-estado fa-solid fa-circle-xmark"
                    style={{ color: "red" }}
                  ></i>
                  <p className="form-input-error">{errors.precio}</p>
                </>
              )}
            </div>
          </div>

          <div className="formgrup">
            <label htmlFor="marca" className="form-label">
              Marca
            </label>
            <div className="form-grup-input">
              <input
                value={product?.marca || ""}
                onChange={(e) => {
                  setProduct({ ...product, marca: e.target.value });
                  setErrors({ ...errors, marca: null });
                  setIsErros(false);
                }}
                id="marca"
                required
                className="form-input"
                type="text"
                placeholder="Marca..."
              />
              {errors?.marca && (
                <>
                  <i
                    className="form-estado fa-solid fa-circle-xmark"
                    style={{ color: "red" }}
                  ></i>
                  <p className="form-input-error">{errors.marca}</p>
                </>
              )}
            </div>
          </div>

          <div className="formgrup">
            <label htmlFor="resolucion" className="form-label">
              Resolución
            </label>
            <div className="form-grup-input">
              <input
                value={product?.resolucion || ""}
                onChange={(e) => {
                  setProduct({ ...product, resolucion: e.target.value });
                  setErrors({ ...errors, resolucion: null });
                  setIsErros(false);
                }}
                id="resolucion"
                required
                className="form-input"
                type="text"
                placeholder="Resolución..."
              />
              {errors?.resolucion && (
                <>
                  <i
                    className="form-estado fa-solid fa-circle-xmark"
                    style={{ color: "red" }}
                  ></i>
                  <p className="form-input-error">{errors.resolucion}</p>
                </>
              )}
            </div>
          </div>

          <div className="formgrup">
            <label htmlFor="peso" className="form-label">
              Peso
            </label>
            <div className="form-grup-input">
              <input
                id="peso"
                value={product?.peso || ""}
                onChange={(e) => {
                  setProduct({ ...product, peso: e.target.value });
                  setErrors({ ...errors, peso: null });
                  setIsErros(false);
                }}
                required
                className="form-input"
                type="text"
                placeholder="Peso..."
              />
              {errors?.peso && (
                <>
                  <i
                    className="form-estado fa-solid fa-circle-xmark"
                    style={{ color: "red" }}
                  ></i>
                  <p className="form-input-error">{errors.peso}</p>
                </>
              )}
            </div>
          </div>

          <div className="formgrup">
            <label htmlFor="img" className="form-label">
              Url de Img
            </label>
            <div className="form-grup-input">
              <input
                id="img"
                value={product?.img || ""}
                onChange={(e) => {
                  setProduct({ ...product, img: e.target.value });
                  setErrors({ ...errors, img: null });
                  setIsErros(false);
                }}
                required
                className="form-input"
                type="text"
                placeholder="https://localt.imagen1.jpg?png..."
              />
              {errors?.img && (
                <>
                  <i
                    className="form-estado fa-solid fa-circle-xmark"
                    style={{ color: "red" }}
                  ></i>
                  <p className="form-input-error">{errors.img}</p>
                </>
              )}
            </div>
          </div>

          <div className="formgrup  form-grup-description">
            <label htmlFor="descripción" className="form-label">
              Descripción
            </label>
            <div className="form-grup-input">
              <textarea
                id="descripción"
                value={product?.description || ""}
                onChange={(e) => {
                  setProduct({ ...product, description: e.target.value });
                }}
                required
                className="form-input form-input-textArea"
                cols="30"
                rows="5"
                style={{ resize: "none" }}
              ></textarea>
              {errors?.description && (
                <>
                  <i
                    className="form-estado fa-solid fa-circle-xmark"
                    style={{ color: "red" }}
                  ></i>
                  <p className="form-input-error">{errors.description}</p>
                </>
              )}
            </div>
          </div>

          {isErros && (
            <div className="form-message">
              <p className="">
                <i
                  className="fa-solid fa-triangle-exclamation"
                  style={{ color: "red" }}
                ></i>
                <b> Error: </b> Rellene todos los datos
              </p>
            </div>
          )}

          <div className="formgrup formgrup-btn-enviar">{btn}</div>
        </form>
      </div>
    </div>
  );
}

export default ModalProduct;
