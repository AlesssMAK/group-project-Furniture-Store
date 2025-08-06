import axios from "axios";
import { BASE_URL, ENDPOINTS } from "./constants";

axios.defaults.baseURL = BASE_URL;

export const fetchFurniture = async () => {
    const {data} = await axios(`${ENDPOINTS.FORNITURES}?page=1&limit=8`);
    return data;
}
