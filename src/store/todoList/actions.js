import * as ACTIONS from './actionTypes'

export const addTodo = (text, id) => ({
    type: ACTIONS.ADD_TODO,
    payload: {
        new: {
            text: text,
            id: id,
        }
    }
});

export const removeTodo = (id) => ({
    type: ACTIONS.REMOVE_TODO,
    payload: id,
});

export const addPin = (id) => ({
    type: ACTIONS.ADD_PIN,
    payload: id,
})

export const removePin = (id) => ({
    type: ACTIONS.REMOVE_PIN,
    payload: id
})