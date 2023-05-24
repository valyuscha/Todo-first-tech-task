import {
  MUTATE_TODO_LIST,
  CLEAR_TODO_LIST
} from '../actionTypes'

export const mutateTodoList = (mutatedList) => {
  return {
    type: MUTATE_TODO_LIST,
    payload: mutatedList
  }
}

export const clearTodoList = () => {
  return {
    type: CLEAR_TODO_LIST
  }
}