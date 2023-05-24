import { useSelector, useDispatch } from 'react-redux'
import { Backdrop, Button } from 'components/UI'
import { showClearTodoListConfirmationPopup } from 'store/actions/popupsActions'
import { ConfirmClearTodoListPopup } from '../ConfirmClearTodoListPopup'
import s from './styles.module.scss'

export const Header = () => {
  const dispatch = useDispatch()
  const { clearTodoListConfirmationPopupVisible } = useSelector(({ popups }) => popups)

  return (
    <div className={ s.header }>
      <h1>TODO List</h1>
      <Button btnRole="danger" onClick={ () => dispatch(showClearTodoListConfirmationPopup()) }>
        Clear TODO list
      </Button>
      <Backdrop hidden={ !clearTodoListConfirmationPopupVisible }>
        <ConfirmClearTodoListPopup />
      </Backdrop>
    </div>
  )
}