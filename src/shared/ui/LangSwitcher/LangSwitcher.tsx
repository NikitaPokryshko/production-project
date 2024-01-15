import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classnames/classnames'
import { Button, ButtonTheme } from 'shared/ui/Button'

import cls from './LangSwitcher.module.scss'

interface ILangSwitcherProps {
  className?: string
}

const LangSwitcher: React.FC<ILangSwitcherProps> = (props) => {
  const { t, i18n } = useTranslation()

  const toggle = () => {
    // TODO: Create constants enum for languages
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={classNames(cls.LangSwitcher, {}, [props.className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggle}
    >
      {t('language')}
    </Button>
  )
}

export { LangSwitcher };