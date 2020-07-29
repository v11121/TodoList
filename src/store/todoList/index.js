import * as ACTIONS from './actionTypes'

const initialState = {
    todos : [],
    pins : []
}

const todoList = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return {...state, todos: [...state.todos, action.payload.new]}
        case ACTIONS.REMOVE_TODO:
            const newTodos = state.todos.filter(todo => todo.id != action.payload)
            return  {...state, todos : newTodos}
        case ACTIONS.ADD_PIN:
            const pin = state.todos.filter(todo => todo.id == action.payload);
            const noPins = state.todos.filter(todo => todo.id != action.payload);
            return {...state, pins : state.pins.concat(pin), todos: noPins}
        case ACTIONS.REMOVE_PIN:
            const offPin = state.pins.filter(pin => pin.id == action.payload);
            const newPins = state.pins.filter(pin => pin.id != action.payload);
            const sortNnt =  state.todos.concat(offPin).sort((a,b) => {
                const idA = a.id.toUpperCase();
                const idB = b.id.toUpperCase();
                if(idA < idB){
                    return -1
                }
                if(idA > idB){
                    return 1
                }
            })

            return {...state, todos : sortNnt, pins : newPins}
        default :
            return state
    }

};

export default todoList;