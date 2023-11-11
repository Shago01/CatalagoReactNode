import { addOffer } from "../../utils/utils";
import Boton from "./Boton";
import { useState } from "react";
import "../../css/form.css";

function ModalOffer({ className, setActive, id, name }) {
  const [offer, setOffer] = useState(0);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (offer == 0 || offer > 100)
      newErrors.offer = "la offerta no debe superar el 100% del Valor";

    console.log(errors);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      addOffer(id, offer);
    }
  };

  return (
    <div className={`modal ${className}`}>
      <div className="container-form">
        <div className="container-btn">
          <div onClick={() => setActive(false)} className="btn btn-close t-btn">
            X
          </div>
        </div>
        <label
          style={{
            fontSize: "1.3em",
            fontWeight: "600",
            color: "#000",
            textAlign: "center",
          }}
        >
          Crear oferta | <span style={{ color: "blue" }}>{name}</span>
        </label>

        <form className="form" action="#">
          <div className="formgrup form-grup-offer">
            <label htmlFor="offer" className="form-label">
              Oferta:
            </label>
            <div className="form-grup-input">
              <input
                id="offer"
                className="form-input"
                type="number"
                onChange={(e) => {
                  setOffer(e.target.value);
                  setErrors({ ...errors, offer: null });
                }}
                required
              />
              {errors?.offer && (
                <>
                  <i
                    className="form-estado fa-solid fa-circle-xmark"
                    style={{ color: "red" }}
                  ></i>
                  <p className="form-input-error">{errors.offer}</p>
                </>
              )}
            </div>
          </div>
          <div className="formgrup-btn-enviar">
            <Boton
              className={"btn-offer "}
              handleClick={(e) => {
                handleSubmit(e);
              }}
            >
              Crear Oferta
            </Boton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalOffer;
