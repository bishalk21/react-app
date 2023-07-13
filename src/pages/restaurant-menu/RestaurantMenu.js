import React, { useEffect, useState } from "react";
import ShimmerUI from "../../components/shimmer-ui/ShimmerUI";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../../utils/constant";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  //   const params = useParams();
  const { resId } = useParams();

  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    const result = await fetch(MENU_URL + resId);
    const res = await result.json();
    setResMenu(res.data);
  };

  if (resMenu === null) return <ShimmerUI />;

  const { name, cuisines, costForTwoMessage } =
    resMenu?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="restro-menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwoMessage}</p>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" "}
            {item.card.info.price || item.card.info.defaultPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
