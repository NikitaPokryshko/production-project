import { Suspense } from "react"
import { useRoutes } from "react-router-dom"

import { routeConfig } from "shared/config/routeConfig/routeConfig"

const AppRouter = () => {
  const routesElements = useRoutes(Object.values(routeConfig))

  return (
    <div>
      <div className="page-wrapper">
        <Suspense fallback={<div>Loading...</div>}>
          {routesElements}
        </Suspense>
      </div>
    </div>
  )
}

export default AppRouter