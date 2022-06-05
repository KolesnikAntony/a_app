import { instance } from './instance';

export const API = {
  getData: async () => {
    const res = await instance.get(``);
    return res.data;
  },
};
