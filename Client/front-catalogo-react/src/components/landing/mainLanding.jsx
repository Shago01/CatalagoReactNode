import { useState, useEffect } from "react";
import LandingFooter from "./LandingFooter";
import LandingHeader from "./LandingHeader";
import PageOffer from "./PageOffer";
import { traerProducts } from "../../utils/utils";
import "../../css/main.css";
import "../../css/landing.css";

import Page from "./page";

function MainLanding() {
  const [selectedPage, setSelectedPage] = useState("offer");
  const [dataProduct, setDataproduct] = useState({});

  useEffect(() => {
    (async () => {
      const data = await traerProducts();
      const productByCategoria = {};

      data.forEach((dato) => {
        const categoria = dato.categoria;
        if (!productByCategoria[categoria]) {
          productByCategoria[categoria] = [];
        }
        productByCategoria[categoria].push(dato);
      });
      setDataproduct(productByCategoria);
    })();
  }, []);

  const handlePageChange = (page) => {
    setSelectedPage(page);
  };

  const page = {
    offer: <PageOffer />,
    Computadores: (
      <Page data={dataProduct.Laptops} dataBanner={DataBanner.Computadores} />
    ),

    Telefonos: (
      <Page data={dataProduct.Telefonos} dataBanner={DataBanner.Telefonos} />
    ),
    Televisores: (
      <Page
        data={dataProduct.Televisores}
        dataBanner={DataBanner.Televisores}
      />
    ),
    Consolas: (
      <Page data={dataProduct.Consolas} dataBanner={DataBanner.Consolas} />
    ),
  };

  return (
    <>
      <LandingHeader onPageChange={handlePageChange} />
      {page[selectedPage]}
      <LandingFooter />
    </>
  );
}

export default MainLanding;

const DataBanner = {
  Computadores: {
    titulo: "  !Tu nueva Compañera de trabajo¡",
    subTitulo:
      " Innovación en Cada Clic: Descubre un Universo de Posibilidades con Computadoras Diseñadas para Superar tus Expectativas. Sumérgete en un Mundo de Velocidad, Poder y Eficiencia.",
    img: "https://www.nitro-pc.es/2164-product_default/extremo.jpg",
    className: "img-computer",
  },
  Telefonos: {
    titulo: "¡Tu Móvil Moderno y Conectado!",
    subTitulo:
      " Rompe Barreras Tecnológicas, Vive la Revolución Móvil con Nuestros Smartphones Vanguardistas! Descubre, Conecta,¡Eleva tu Experiencia!",
    img: "https://dlcdnwebimgs.asus.com/gain/49E16FAF-0572-4CA3-A24D-DE160491DB01",
    className: "img-telefono",
  },
  Televisores: {
    titulo: "Tu sala, tu revolución visual.",
    subTitulo:
      " Supera límites, vive la revolución visual con nuestras TVs vanguardistas. Descubre, conecta, ¡eleva tu experiencia!",
    img: "https://images.samsung.com/is/image/samsung/co-uhd-tu8000-un58tu8000kxzl-frontblack-221500926?$650_519_PNG$",
    className: "img-tv",
  },
  Consolas: {
    titulo: " ¡Consolas que inspiran, juegos que emocionan!",
    subTitulo:
      "Explora un universo de entretenimiento con nuestras consolas, donde la innovación tecnológica se fusiona con la magia del juego.",
    img: "./consola.png",
    className: "img-tv",
  },
};
