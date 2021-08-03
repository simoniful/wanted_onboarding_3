export const getTotalPage = (totalUserData, userDataPerPage) => {
  return Math.ceil(totalUserData / userDataPerPage);
};
