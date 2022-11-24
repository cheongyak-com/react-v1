import axios from "axios";
import { GetFilterRequestType, GetFilterResponseType } from "./types";

export async function apiGetFilter(info?: GetFilterRequestType) {
  const response = await axios.get<GetFilterResponseType>(
    `/db/filter.json`
  );

  return response.data.filter;
}
