import { useEffect, useState } from "react";
import { traerOfferts } from "../../utils/utils";

import Carousel from "./Carosel";

function PageOffer() {
  const [dataOffer, setDataOffer] = useState([]);
  const [cards, setCards] = useState(null);

  useEffect(() => {
    traerOfferts().then((data) => {
      setDataOffer(data);
    });
  }, []);

  useEffect(() => {
    const cardComponets = <Carousel data={dataOffer} />;
    setCards(cardComponets);
  }, [dataOffer]);

  return (
    <>
      <div className="banner">
        <div className="banner-bg">
          <div className="banner-circle banner-scale-5 "></div>
          <div className="banner-circle banner-scale-4"></div>
          <div className="banner-circle banner-scale-2"></div>
        </div>
        <div className="banner-conten">
          <div className="banner-text">
            <div className="banner-title">
              No te pierdas de nuestras ofertas
            </div>
            <div className="banner-subTitle">
              <i>
                Desata tu Potencial Tecnológico: Aprovecha Nuestras Ofertas
                ¡Conquista el Futuro con Descuentos Exclusivos que no querrás
                Perderte!
              </i>
            </div>
          </div>
          <div className="banner-conten-img">
            <img
              className="banner-img "
              src="https://www.professionalwireless.com.co/wp-content/uploads/2023/07/Nitro-AN515-46-R7D8-2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="sectionCards">{cards}</div>;
    </>
  );
}

export default PageOffer;
