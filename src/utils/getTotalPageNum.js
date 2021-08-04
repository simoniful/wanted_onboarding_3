export const getTotalPageNum = (totalUserData, DataPerPage) => {
  return Math.ceil(totalUserData / DataPerPage);
};
