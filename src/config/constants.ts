import {active_mode, modes} from "./modes";

export const BASE_URL = {
    [modes.DEV]: "http://localhost:8000",
    [modes.PROD]: "https://api.uzbrainai.uz",
    [modes.PROD_PROXY]: "http://api.uzbrainai.uz"
}
export const API_URL = `${BASE_URL[active_mode]}/api`
export const ACCESS_TOKEN = "ACCESS_TOKEN"

