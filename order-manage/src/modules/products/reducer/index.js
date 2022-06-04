import { ASYNC_STATUS } from "../../../redux/consts";
import { PRODUCT_ACTIONS } from "../actions/consts";

const initialState = {
    data: [],
    error: null,
    status: ASYNC_STATUS.IDLE
};

export function productReducer(state = initialState, action) {
    switch (action.type) {
        case PRODUCT_ACTIONS.GET_PRODUCTS:
            return {
                ...state,
                status: ASYNC_STATUS.LOADING,
                data: [],
                error: null,
            };
        case `${PRODUCT_ACTIONS.GET_PRODUCTS}_SUCCESS`:
            return {
                ...state,
                status: ASYNC_STATUS.SUCCESS,
                data: action.payload,
                error: null,
            };
        case `${PRODUCT_ACTIONS.GET_PRODUCTS}_ERROR`:
            return {
                ...state,
                status: ASYNC_STATUS.ERROR,
                data: [],
                error: action.error
            };
        default:
            break;
    }
    return state;
}