import s from './styles.module.scss'

export const Backdrop = ({ children, hidden }) => (
  <div className={ `${ s.backdrop } ${ hidden && s.hidden }` }>
    { children }
  </div>
)