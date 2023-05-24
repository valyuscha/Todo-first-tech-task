import { useSelector, useDispatch } from 'react-redux'
import { mutateTodoList } from 'store/actions/todoListActions'
import { showEditTodoPopup } from 'store/actions/popupsActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons'

import s from './TodoItem.module.scss'

export const TodoItem = ({ id, title, description, closed, setActiveEditTodo }) => {
  const dispatch = useDispatch()
  const { todoList } = useSelector(({ todoList }) => todoList)

  const onCloseTodo = () => {
    const todoIndex = todoList.findIndex(todo => todo.id === id)
    todoList[todoIndex].closed = !todoList[todoIndex].closed

    if (todoList[todoIndex].closed) {
      const updatedItem = todoList.splice(todoIndex, 1)[0]
      todoList.push(updatedItem)
    }

    const updatedTodoList = [
      ...todoList.filter(item => !item.closed),
      ...todoList.filter(item => item.closed)
    ]

    dispatch(mutateTodoList(updatedTodoList))
  }

  const onRemoveTodo = () => {
    const updatedTodoList = todoList.filter(todo => todo.id !== id)
    dispatch(mutateTodoList(updatedTodoList))
  }

  const onEditTodo = () => {
    const todoIndex = todoList.findIndex(todo => todo.id === id)
    setActiveEditTodo(todoList[todoIndex])
    dispatch(showEditTodoPopup())
  }

  return (
    <div className={ `${ s.todoItem } ${ closed && s.closedTodo }` }>
      <div>
        <h3 className={ `${ s.todoTitle } ${ closed && s.crossedOut }` }>{ title }</h3>
        { description && <p className={ `${ s.todoDescription } ${ closed && s.crossedOut }` }>{ description }</p> }
      </div>
      <div className={ s.actionBtns }>
        <input
          type="checkbox"
          className={ s.doneTodoCheckbox }
          checked={ closed }
          onChange={ onCloseTodo } />
        <FontAwesomeIcon
          icon={ faPencil }
          className={ `${ s.editTodoBtn } ${ closed && s.notAllowed }` }
          onClick={ !closed ? onEditTodo : null } />
        <FontAwesomeIcon icon={ faTrash } className={ s.deleteTodoIcon } onClick={ onRemoveTodo } />
      </div>
    </div>
  )
}