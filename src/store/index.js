import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {counter: 0, showCounter: true};

// const counterSlice = createSlice({
//     name: 'counter',
//     initialState: {
//         counter: 0, showCounter: true
//     }
//     reducers: {
//         increment(state) {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }
// })

const counterReducer = (state = initialState, action) => {
    // you can't use state.counter++ because state should be unmutable
    // always return a new state
    switch (action.type) {
        case "increment":
            return {
                counter: state.counter + 1,
                showCounter: state.showCounter
            }
        case "decrement":
            return {
                counter: state.counter - 1,
                showCounter: state.showCounter
            }
        case "toggle":
            return {
                showCounter: !state.showCounter,
                counter: state.counter
            }
        default: // Throw some error about unhandled action type.
            return state;
    }
}

const store = createStore(counterReducer);

export default store;