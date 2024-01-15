import { Suspense } from 'react'

import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'

import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

import { classNames } from 'shared/lib/classnames/classnames'

import './styles/index.scss'

const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      {/* TODO: Consider moving this <Suspense> wrapper up or down */}
      <Suspense fallback="Locales are loading...">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App