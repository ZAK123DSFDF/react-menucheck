export const getAllMenus = async () => {
  const response = await fetch(
    `https://fullstack-food-order.onrender.com/menu/all`,
    {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "failed to get menus");
  }
  const bookData = await response.json();
  return bookData;
};
