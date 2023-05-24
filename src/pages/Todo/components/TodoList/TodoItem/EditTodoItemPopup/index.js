import { AddEditTodoForm } from '../../../AddEditTodoForm'
import s from './styles.module.scss'

export const EditTodoItemPopup = ({ activeEditTodo }) => {
  return (
    <div className={ s.popup }>
      <AddEditTodoForm isEdit activeEditTodo={ activeEditTodo } />
    </div>
  )
}