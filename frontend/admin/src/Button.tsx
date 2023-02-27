const Button: React.FC<{
  text: React.ReactNode
  onClick: VoidFunction
}> = ({ text, onClick }) => {
  return (
    <>
      <div>React App 2 text</div>
      <button onClick={onClick}>{text || 'React App 2 Button'}</button>
    </>
  )
}

export default Button
