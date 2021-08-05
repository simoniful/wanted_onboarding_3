export const filterObject = (obj, targetKey) => {
  const filteredArr = Object.entries(obj).filter(([key]) => key !== targetKey);

  return Object.fromEntries(filteredArr);
};
