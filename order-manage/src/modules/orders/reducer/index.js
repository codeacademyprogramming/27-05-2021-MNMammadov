import { ORDER_ACTIONS } from "../actions/consts";
import { v4 as uuidv4 } from 'uuid';

const initialState = [
    {
        id: uuidv4(),
        tableNo: 1,
        coffeeType: "Americano",
        numbOfCoffee: 2,
        specialNote: "Tund olsun",
        status: "CREATED"
    },
    {
        id: uuidv4(),
        tableNo: 2,
        coffeeType: "Mocha",
        numbOfCoffee: 5,
        specialNote: "Meslehetli olsun",
        status: "IN_PROGRESS"
    },
    {
        id: uuidv4(),
        tableNo: 5,
        coffeeType: "Lungo",
        numbOfCoffee: 5,
        specialNote: "Meslehetli olsun",
        status: "DONE"
    },
]

export function orderReducer(state = initialState, action) {
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