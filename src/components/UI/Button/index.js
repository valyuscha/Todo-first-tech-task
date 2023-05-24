import s from './styles.module.scss'

export const Button = ({ children, btnRole, type, onClick }) => {
  const btnClassName = `${ btnRole === 'primary' && s.primary } ${ btnRole === 'danger' && s.danger }`

  return (
    <button className={ btnClassName } type={ type || 'button' } onClick={ onClick }>
      { children }
    </button>
  )
}