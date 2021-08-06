export const currentUsers = (data, indexOfFirst, indexOfLast) => {
  const currentPageUsers = data.slice(indexOfFirst, indexOfLast);

  return currentPageUsers;
};
