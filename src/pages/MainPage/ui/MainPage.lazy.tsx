import { lazy } from 'react'

// Production
// export const MainPageLazy = lazy(() => import('./MainPage'))

// Development: Force delay for testing
export const MainPageLazy = lazy(() => new Promise(resolve => {
  // @ts-ignore
  setTimeout(() => resolve(import('./MainPage')), 1500)
}))