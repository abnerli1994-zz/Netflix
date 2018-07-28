export const addItem = (item) => ({
  type: "ADD_ITEM",
  data: item
});

export const removeItem = (id) => ({
  type: "REMOVE_ITEM",
  id: id
});