const ShimmerUI = () => {
  let shimmerCard = 20;
  return (
    <div className="shimmer-container">
      {Array.from({ length: shimmerCard }, (_, index) => (
        <div className="shimmer-card" key={index}>
          <div className="card-content-img"></div>
          <div className="card-content-half"></div>
          <div className="card-content"></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerUI;
