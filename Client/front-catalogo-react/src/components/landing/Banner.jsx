function Banner({ dataBanner }) {
  return (
    <div className="banner">
      <div className="banner-bg">
        <div className="banner-circle banner-scale-5 "></div>
        <div className="banner-circle banner-scale-4"></div>
        <div className="banner-circle banner-scale-2"></div>
      </div>
      <div className="banner-conten">
        <div className="banner-text">
          <div className="banner-title">{dataBanner.titulo}</div>
          <div className="banner-subTitle">
            <i>{dataBanner.subTitulo}</i>
          </div>
        </div>
        <div className="banner-conten-img">
          <img
            className={`banner-img ${dataBanner?.className}`}
            src={dataBanner.img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
