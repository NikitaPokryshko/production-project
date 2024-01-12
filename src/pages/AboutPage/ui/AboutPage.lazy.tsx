import { lazy } from 'react'

// Production
// export const AboutPageLazy = lazy(() => import('./AboutPage'))

// Development: Force delay for testing
export const AboutPageLazy = lazy(() => new Promise(resolve => {
  // @ts-ignore
  setTimeout(() => resolve(import('./AboutPage')), 1500)
}))