import axios from "axios";
import { Anime } from "./types";

export const api = axios.create({
  baseURL: `https://api.jikan.moe/v4/`,
});

export const getSeasonNow = async (): Promise<Anime> => {
  return await api
    .get("seasons/now?filter=tv&limit=10")
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      return null;
    });
};
