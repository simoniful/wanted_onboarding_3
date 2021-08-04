// data는 배열, indexOfFirst는 list의 첫 번째 index, indexOfLast는 list의 마지막 index

export const currentUsers = (data, indexOfFirst, indexOfLast) => {
  const currentPageUsers = data.slice(indexOfFirst, indexOfLast);

  return currentPageUsers;
};
