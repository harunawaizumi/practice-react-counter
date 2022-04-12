import { createStore } from 'redux';

function counters(state = [], action) {
    switch (action.type) {
        case 'INCREMENT':
            return state.count + 1;
        case 'DECREMENT':
            return state.count - 1;
        default:
            return state.count;
    }
}
const store = createStore(counters, 0);

store.dispatch({
    type: 'INCREMENT'
})

store.dispatch({
    type: 'INCREMENT'
})
console.log(store.getState())