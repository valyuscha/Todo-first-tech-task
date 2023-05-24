import { useDispatch } from 'react-redux'
import { Button } from 'components/UI'
import { clearTodoList } from 'store/actions/todoListActions'
import { hideClearTodoListConfirmationPopup } from 'store/actions/popupsActions'
import s from './styles.module.scss'

export const ConfirmClearTodoListPopup = () => {
  const dispatch = useDispatch()

  const confirmClearTodoList = () => {
    dispatch(clearTodoList())
    dispatch(hideClearTodoListConfirmationPopup())
  }

  return (
    <div className={ s.popup }>
      <p className={ s.message }>Are you sure you want to clear TODOs list? You won't be able to restore it.</p>
      <div className={ s.confirmBtns }>
        <Button btnRole="primary" onClick={ () => dispatch(hideClearTodoListConfirmationPopup()) }>Cancel</Button>
        <Button btnRole="danger" onClick={ confirmClearTodoList }>Clear TODOs list</Button>
      </div>
    </div>
  )
}