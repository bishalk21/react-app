const ShimmerUI = () => {
  let shimmerCard = 20;
  return (
    <div className="shimmer-container">
      {Array.from({ length: shimmerCard }, (_, i) => (
        <div className="shimmer-card" key={i}>
          <div className="card-content-img"></div>
          <div className="card-content-sec"></div>
          <div className="card-content-half"></div>
          <div className="card-content"></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerUI;
