import * as constant from "./constant";

const getURL = () => {
  return `${constant.ADDRESS}:${constant.PORT}${constant.PATH}`;
};

export default getURL;