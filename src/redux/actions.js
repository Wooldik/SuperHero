import { HIDE_LOADER, REQUEST_HEROS, SHOW_LOADER, FETCH_HEROS } from "./types";
import { createAction } from "redux-actions";

export const showLoaderAction = createAction(SHOW_LOADER);
export const hideLoaderAction = createAction(HIDE_LOADER);
export const requestHerosAction = createAction(REQUEST_HEROS);
export const fetchHerosAction = createAction(FETCH_HEROS);


