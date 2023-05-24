import {
  SHOW_CLEAR_TODO_LIST_CONFIRMATION_POPUP,
  HIDE_CLEAR_TODO_LIST_CONFIRMATION_POPUP,
  SHOW_EDIT_TODO_POPUP,
  HIDE_EDIT_TODO_POPUP
} from '../actionTypes'

const initialState = {
  clearTodoListConfirmationPopupVisible: false,
  editTodoPopupVisible: false
}

export const popupsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CLEAR_TODO_LIST_CONFIRMATION_POPUP:
      return { ...state, clearTodoListConfirmationPopupVisible: true }
    case HIDE_CLEAR_TODO_LIST_CONFIRMATION_POPUP:
      return { ...state, clearTodoListConfirmationPopupVisible: false }
    case SHOW_EDIT_TODO_POPUP:
      return { ...state, editTodoPopupVisible: true }
    case HIDE_EDIT_TODO_POPUP:
      return { ...state, editTodoPopupVisible: false }
    default:
      return state
  }
}