import axios from "axios";
import { Anime, Daum, SearchParams } from "./types";

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
export const getAnimeById = async (id: number): Promise<Daum> => {
  return await api
    .get(`anime/${id}`)
    .then((data) => {
      return data.data.data;
    })
    .catch((error) => {
      return null;
    });
};
export const getAnimeSearch = async (params: SearchParams): Promise<Daum[]> => {
  const searchParams = new URLSearchParams(params);

  return await api
    .get(`anime?${searchParams}`)
    .then((data) => {
      return data.data.data;
    })
    .catch((error) => {
      return null;
    });
};
