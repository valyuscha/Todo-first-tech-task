import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'components/UI'
import { mutateTodoList } from 'store/actions/todoListActions'
import { hideEditTodoPopup } from 'store/actions/popupsActions'

import s from './styles.module.scss'

export const AddEditTodoForm = ({ isEdit, activeEditTodo }) => {
  const dispatch = useDispatch()
  const { todoList } = useSelector(({ todoList }) => todoList)
  const initialFormState = {
    title: {
      value: activeEditTodo?.title || '',
      isValid: false,
      isTouched: false
    },
    description: {
      value: activeEditTodo?.description || '',
      isValid: true,
      isTouched: false
    }
  }
  const [ form, setForm ] = useState(initialFormState)

  useEffect(() => {
    setForm({
      title: {
        ...form.title,
        value: activeEditTodo?.title || ''
      },
      description: {
        ...form.description,
        value: activeEditTodo?.description || ''
      }
    })
  }, [ activeEditTodo?.title, activeEditTodo?.description ])

  const onFormItemChange = (e) => {
    const input = e.target
    setForm({
      ...form,
      [input.name]: {
        ...form[input.name],
        value: input.value,
        isValid: true
      }
    })
  }

  const onAddTodo = async (e) => {
    e.preventDefault()
    if (!!form.title.value.trim()) {
      const newTodo = {
        id: Math.random(),
        title: form.title.value,
        description: !!form.description.value.trim() && form.description.value,
        closed: false
      }

      dispatch(mutateTodoList([ newTodo, ...todoList ]))
      setForm(initialFormState)
    } else {
      setForm({
        ...form,
        title: {
          ...form.title,
          isTouched: true,
          isValid: !!form.title.value.trim()
        }
      })
    }
  }

  const onEditTodo = (e) => {
    e.preventDefault()

    if (!!form.title.value.trim()) {
      const todoIndex = todoList.findIndex(todo => todo.id === activeEditTodo.id)
      todoList[todoIndex].title = form.title.value
      todoList[todoIndex].description = form.description.value

      dispatch(mutateTodoList(todoList))
      dispatch(hideEditTodoPopup())
    } else {
      setForm({
        ...form,
        title: {
          ...form.title,
          isTouched: true,
          isValid: !!form.title.value.trim()
        }
      })
    }
  }

  return (
    <form className={ s.addEditTodoForm } onSubmit={ !isEdit ? onAddTodo : onEditTodo }>
      <div className={ s.formItem }>
        <label className={ s.required }>TODO title</label>
        <input
          type="text"
          name="title"
          className={ `${ s.formItemInput } ${ !form.title.isValid && form.title.isTouched && s.invalidInput }` }
          value={ form.title.value }
          placeholder="Enter TODO title"
          onChange={ onFormItemChange } />
        <p
          className={ `${ s.errorMessage } ${ !form.title.isValid && form.title.isTouched ? s.show : s.hidden }` }>Field
          is required!</p>
      </div>
      <div className={ s.formItem }>
        <label>TODO description</label>
        <textarea
          name="description"
          className={ s.formItemInput }
          value={ form.description.value }
          rows={ 5 }
          placeholder="Enter TODO placeholder"
          onChange={ onFormItemChange } />
      </div>
      <Button type="submit" btnRole="primary">
        { !isEdit ? 'Create TODO' : 'Edit TODO' }
      </Button>
    </form>
  )
}