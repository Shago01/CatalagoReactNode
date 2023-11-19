import Banner from "./Banner";
import Carousel from "./Carosel";
import Card from "./card";
import ShearchSection from "./shearchSetion";
import { useEffect, useState } from "react";

function Page({ data, dataBanner }) {
  const [dataCarosel, setDataCarosel] = useState([]);
  const [productos, setProductFitred] = useState([]);

  useEffect(() => {
    const newDataCarosel = [...data]
      .sort(() => Math.random() - 0.5)
      .slice(0, 7);
    setDataCarosel(newDataCarosel);
  }, [data]);

  return (
    <>
      <Banner dataBanner={dataBanner} />

      <div className="sectionCarousel">
        <Carousel
          data={dataCarosel}
          cont={dataCarosel.length}
          ClassName={"card-new"}
        />
      </div>

      <div className="sectionShearch">
        <ShearchSection datos={data} setElement={setProductFitred} />
      </div>

      <div className="sectionCards">
        {productos.map((e, i) => {
          return <Card key={`${i}CP`} data={e} />;
        })}
      </div>
    </>
  );
}

export default Page;
