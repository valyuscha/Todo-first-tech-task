import {
  SHOW_CLEAR_TODO_LIST_CONFIRMATION_POPUP,
  HIDE_CLEAR_TODO_LIST_CONFIRMATION_POPUP,
  SHOW_EDIT_TODO_POPUP,
  HIDE_EDIT_TODO_POPUP
} from '../actionTypes'

export const showClearTodoListConfirmationPopup = () => {
  return {
    type: SHOW_CLEAR_TODO_LIST_CONFIRMATION_POPUP
  }
}

export const hideClearTodoListConfirmationPopup = () => {
  return {
    type: HIDE_CLEAR_TODO_LIST_CONFIRMATION_POPUP
  }
}

export const showEditTodoPopup = () => {
  return {
    type: SHOW_EDIT_TODO_POPUP
  }
}

export const hideEditTodoPopup = () => {
  return {
    type: HIDE_EDIT_TODO_POPUP
  }
}