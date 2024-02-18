

const Button = ({children, type, onSubmit}) => {
    
  return (
    <button onSubmit={onSubmit} className={type}>
      {children}
    </button>
  )
}

export default Button
