import { SHOW_PRODUCTS, DELETE_PRODUCT } from "./types";

import axios from "axios";

export const showProducts = () => async dispatch => {

    const response =await axios.get('http://localhost:4000/productos');

    dispatch({
        type: SHOW_PRODUCTS,
        payload: response.data
    })
}

export const deleteProduct = id  => async dispatch => {

    await axios.delete(`http://localhost:4000/productos/${id}`)
    dispatch({
        type: DELETE_PRODUCT,
        payload: id
    })
}