import { SHOW_PRODUCTS } from "./types";

import axios from "axios";

export const showProducts = () => async dispatch => {

    const response =await axios.get('http://localhost:4000/productos');

    dispatch({
        type: SHOW_PRODUCTS,
        payload: response.data
    })
}