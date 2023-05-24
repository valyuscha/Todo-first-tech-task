import { useState } from 'react'
import { useSelector } from 'react-redux'
import { TodoItem } from './TodoItem'
import { EditTodoItemPopup } from './TodoItem/EditTodoItemPopup'
import { Backdrop } from 'components/UI'

export const TodoList = () => {
  const { editTodoPopupVisible } = useSelector(({ popups }) => popups)
  const { todoList } = useSelector(({ todoList }) => todoList)
  const [ activeEditTodo, setActiveEditTodo ] = useState({})

  return (
    <>
      { todoList.length ? todoList.map(({ id, title, description, closed }) => (
        <TodoItem
          key={ id }
          id={ id }
          title={ title }
          description={ description }
          closed={ closed }
          setActiveEditTodo={ setActiveEditTodo } />
      )) : <p>There are no TODOs</p> }
      <Backdrop hidden={ !editTodoPopupVisible }>
        <EditTodoItemPopup activeEditTodo={ activeEditTodo } />
      </Backdrop>
    </>
  )
}