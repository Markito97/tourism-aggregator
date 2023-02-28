import * as css from './Button.sass';

const Button: React.FC<{
  text: React.ReactNode;
  onClick: VoidFunction;
}> = ({ text, onClick }) => {
  return (
    <>
      <div className={css.aboba}>React App 2 text</div>
      <button type="button" onClick={onClick}>
        {text || 'React App 2 Button'}
      </button>
    </>
  );
};

export default Button;
