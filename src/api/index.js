import Axios from 'axios';
import baseURL, { URLs } from './URLS';

const appkey = 'dd_1597654682810';
const request = Axios.create({
  baseURL,
  params: {
    appkey,
  },
});

const likeSearch = (value) => request.get(
  URLs.likeSearch,
  { params: { likeValue: value } },
);
const getSideList = (value) => request.get(
  URLs.getSide,
  { params: { type: value } },
);
const getGoodsList = (value, page, size, sort = 'all') => request.get(
  URLs.getGoodsList,
  {
    params: {
      type: value, page, size, sort,
    },
  },
);
const Search = (value, page, size) => request.get(
  URLs.search,
  { params: { type: value, page, size } },
);
const getGoodsByIds = (value) => request.get(
  URLs.getGoodsByIds,
  { params: { value } },
);
export default {
  likeSearch,
  getSideList,
  getGoodsList,
  Search,
  getGoodsByIds,
};
