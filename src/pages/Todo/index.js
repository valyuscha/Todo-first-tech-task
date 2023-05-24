import { Header } from './components/Header'
import { TodoList } from './components/TodoList'
import { AddEditTodoForm } from './components/AddEditTodoForm'

import s from './styles.module.scss'

export const Todo = () => (
  <div className={ s.container }>
    <Header />
    <AddEditTodoForm />
    <TodoList />
  </div>
)