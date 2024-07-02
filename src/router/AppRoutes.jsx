import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="login/*" element = {
        <PublicRoute>
          <Routes>
            <Route path="/*" element = { <LoginPage />}/>
          </Routes>
        </PublicRoute>
      } />

      <Route path="*" element={
        <PrivateRoute>
          <HeroesRoutes />
        </PrivateRoute>
      }></Route>

    </Routes>
  )
}
