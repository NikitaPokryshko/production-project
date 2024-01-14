import { classNames } from 'shared/lib/classnames/classnames'

import cls from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear'
}

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
}

const Button: React.FC<IButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    ...restProps
  } = props

  return (
    <button
      className={classNames(cls.Button, {}, [props.className, cls[theme]])}
      {...restProps}
    >
      {children}
    </button>
  )
}

export { Button };