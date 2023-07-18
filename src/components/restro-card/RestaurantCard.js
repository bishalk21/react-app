import { CDN_URL } from "../../utils/constant";
import "./restro-card.css";

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
    <div className="restaurant-card menu-card">
      <div class="meal-image">
        <img
          className="restaurant-img"
          src={CDN_URL + cloudinaryImageId}
          alt="image"
        />
      </div>
      <div class="meal-content">
        <div class="meal-content-top">
          <div class="meal-title-content">
            <h2 class="meal-title">{name}</h2>
          </div>
          <div className="price-delivery">
            <div class="meal-price">
              <span>$ {costForTwo / 100}</span> For 2
            </div>
            <h5 className="delivery-time">
              <i class="fa-solid fa-clock"></i> {deliveryTime} minutes
            </h5>
          </div>
          <div class="meal-review">
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
        <div class="meal-content-bottom">
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
