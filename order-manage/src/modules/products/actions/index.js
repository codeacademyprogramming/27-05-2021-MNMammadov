import { productsService } from "../service";
import { PRODUCT_ACTIONS } from "./consts";

export function getProducts(dispatch) {
    dispatch({ type: PRODUCT_ACTIONS.GET_PRODUCTS });
    productsService.getProducts().then((data) => {
        dispatch({
            type: `${PRODUCT_ACTIONS.GET_PRODUCTS}_SUCCESS`,
            payload: data,
        });
    }).catch((err) => {
        dispatch({
            type: `${PRODUCT_ACTIONS.GET_PRODUCTS}_ERROR`,
            error: err,
        })
    })
}