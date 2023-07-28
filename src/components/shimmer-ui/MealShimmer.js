import React from "react";

const MealShimmer = () => {
  let shimmerCard = 10;
  return (
    <div className="shimmer-container" data-testid="shimmer">
      {Array.from({ length: shimmerCard }, (_, i) => (
        <div
          className="bg-gray-50 p-5 w-10/12 text-lg max-[476px]:text-sm my-2 mx-auto rounded-md text-black shadow-lg text-center"
          key={i}
        ></div>
      ))}
    </div>
  );
};

export default MealShimmer;
