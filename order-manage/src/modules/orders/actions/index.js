import { ORDER_ACTIONS } from "./consts";

export function addOrder(order) {
    return {
        type: ORDER_ACTIONS.ADD_ORDER,
        payload: order,
    }
}

export function editOrder(order) {
    return {
        type: ORDER_ACTIONS.EDIT_ORDER,
        payload: order,
    }
}