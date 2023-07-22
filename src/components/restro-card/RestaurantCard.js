import { CDN_URL } from "../../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  return (
    <div className="restaurant-card w-80 h-96 rounded-md relative hover:cursor-pointer hover:bg-transparent hover:text-[lightgray] hover:border-none menu-card">
      <div class="h-40">
        <img
          className="w-full h-full object-cover rounded-md"
          src={CDN_URL + cloudinaryImageId}
          alt="image"
        />
      </div>
      <div class="p-3">
        <div class="pb-4 border-b border-solid border-black hover:border-[lightgray]">
          <div class="meal-title-content">
            <h2 class="text-base font-semibold mb-4">{name}</h2>
          </div>
          <div className="flex justify-between">
            <div class="text-base font-medium">
              <span className="font-extrabold mb-4  ">
                $ {costForTwo / 100}
              </span>{" "}
              For 2
            </div>
            <h5 className="p-2 text-red-700">
              <i class="fa-solid fa-clock"></i> {deliveryTime} minutes
            </h5>
          </div>
          <div class="flex gap-4 font-normal text-green-700">
            <div class="meal-star">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <div class="meal-review-text">
              <span>{avgRating} reviews</span>
            </div>
          </div>
        </div>
        <div class="pt-3 capitalize font-medium overflow-hidden overflow-y-scroll">
          <span className="cusines">{cuisines.join(", ")}</span>
        </div>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="p-2 m-2">
        <label className="text-white z-10 p-2 m-2 absolute rounded bg-green-700">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
