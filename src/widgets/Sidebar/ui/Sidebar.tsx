import { useState } from 'react'

import { classNames } from 'shared/lib/classnames/classnames'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher'

import cls from './Sidebar.module.scss'

interface ISidebarProps {
  className?: string
}

const Sidebar: React.FC<ISidebarProps> = (props) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div className={
      classNames(
        cls.Sidebar,
        {
          [cls.collapsed]: collapsed
        },
        [props.className]
      )
    }>
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  )
}

export { Sidebar };