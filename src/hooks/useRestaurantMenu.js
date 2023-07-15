import React, { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constant";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    const result = await fetch(MENU_URL + resId);
    const res = await result.json();
    setResMenu(res.data);
  };

  return resMenu;
};

export default useRestaurantMenu;
