import {
  MUTATE_TODO_LIST,
  CLEAR_TODO_LIST
} from '../actionTypes'

const initialState = {
  todoList: [
    {
      id: Math.random(),
      title: 'Here can be your first TODO',
      description: 'Here can be description for your TODO',
      closed: false
    },
    {
      id: Math.random(),
      title: 'Here can be your second TODO',
      description: '',
      closed: false
    },
    {
      id: Math.random(),
      title: 'Here can be your third TODO',
      description: 'Here can be description for your TODO',
      closed: false
    }
  ]
}

export const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case MUTATE_TODO_LIST:
      return { ...state, todoList: action.payload }
    case CLEAR_TODO_LIST:
      return { ...state, todoList: [] }
    default:
      return state
  }
}