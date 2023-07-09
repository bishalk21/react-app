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
    <div className="restaurant-card">
      <img
        className="restaurant-img"
        src={CDN_URL + cloudinaryImageId}
        alt="image"
      />
      <h3>{name}</h3>
      <span className="cusines">{cuisines.join(", ")}</span>

      <h3>RS {costForTwo / 100} For Two</h3>
      <h5>{deliveryTime} minutes</h5>
      <span className="ratings">
        <i class="fa-solid fa-star"></i> {avgRating}
      </span>
    </div>
  );
};

export default RestaurantCard;
