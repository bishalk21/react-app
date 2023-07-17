import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constant";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchResMenu(resId); // Pass the resId to the fetchResMenu function
  }, [resId]); // Add resId as a dependency to re-fetch menu when it changes

  const fetchResMenu = async (resId) => {
    try {
      const result = await fetch(MENU_URL + resId);
      const res = await result.json();
      setResMenu(res.data);
    } catch (error) {
      console.error("Error fetching restaurant menu:", error);
      setResMenu(null); // Set resMenu to null in case of error
    }
  };

  return resMenu;
};

export default useRestaurantMenu;
