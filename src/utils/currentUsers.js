export const currentUsers = (data, indexOfFirst, indexOfLast) => {
  let currentUsers = 0;
  currentUsers = data.slice(indexOfFirst, indexOfLast);

  return currentUsers;
};
