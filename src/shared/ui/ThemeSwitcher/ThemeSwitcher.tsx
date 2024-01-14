import { useTheme, Theme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classnames/classnames'

import SunIcon from 'shared/assets/icons/sun.svg'
import MoonIcon from 'shared/assets/icons/moon.svg'
import { Button, ButtonTheme } from 'shared/ui/Button'

import cls from './ThemeSwitcher.module.scss'

interface IThemeSwitcherProps {
  className?: string
}

const ThemeSwitcher: React.FC<IThemeSwitcherProps> = (props) => {
  const { toggleTheme, theme } = useTheme()

  return (
    <Button
      className={classNames(cls.ThemeSwitcher, {}, [props.className])}
      onClick={toggleTheme}
      theme={ButtonTheme.CLEAR}
    >
      {theme === Theme.DARK ? <MoonIcon className={cls.moonIcon}/> : <SunIcon className={cls.sunIcon} />}
    </Button>
  )
}

export { ThemeSwitcher };