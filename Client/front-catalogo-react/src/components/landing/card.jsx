function Card({ data }) {
  const miData = data;

  return (
    <div className="card">
      {data?.offer && <div className="card-offer"> {data.offer}% </div>}
      <div className="card-container-img">
        <img src={miData?.img} alt={miData?.name} className="card-img" />
      </div>

      {data?.offer ? (
        <p className="card--precio">
          <s className="card-precio-falso">${miData?.precio}</s>{" "}
          <span className="card-new-precio">
            ${Math.floor(miData?.precio - miData.precio * (data.offer / 100))}
          </span>
        </p>
      ) : (
        <p className="card--precio">${miData?.precio}</p>
      )}
      <h2 className="card-title">{miData?.name}</h2>
      <div className="card-caracteristica">
        <div className="card-caracteristica-item">
          <i className="fa-solid fa-image"></i>
          <span> {miData.resolucion} </span>
        </div>
        <div className="card-caracteristica-item">
          <i className="fa-solid fa-weight-hanging"></i>
          <span> {miData.peso} </span>
        </div>
      </div>
      <div className="card-menssage">
        <p className="card-description">{miData?.description}</p>
      </div>
    </div>
  );
}

export default Card;
