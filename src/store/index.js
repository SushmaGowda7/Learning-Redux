import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
    if(action.type === 'increment'){
<<<<<<< HEAD
        return { counter: state.counter + 1 }
    }else {
        if(action.type === 'decrement'){
            return { counter: state.counter - 1 }
=======
        return { counter: state.counter + 5 }
    }else {
        if(action.type === 'decrement'){
            return { counter: state.counter - 5 }
>>>>>>> fcd8e7c67f40bfd6fa9d23823f02a6f9bd0829ee
    }
}
    return state;
};

const store = createStore(counterReducer);

export default store;