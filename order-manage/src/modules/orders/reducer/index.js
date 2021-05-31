import { ORDER_ACTIONS } from "../actions/consts";

export function orderReducer(state = [], action) {
    switch (action.type) {
        case ORDER_ACTIONS.ADD_ORDER:
            return [...state, action.payload];
        case ORDER_ACTIONS.EDIT_ORDER:
            return state.map((e) => {
                if (e.id === action.payload.id) {
                    return action.payload;
                } else {
                    return e;
                }
            });
        default:
            return state;
    }
}