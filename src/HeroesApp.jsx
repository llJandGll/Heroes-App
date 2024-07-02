import { AuthProvider } from "./auth/context/AuthProvider"
import { AppRoutes } from "./router/AppRoutes"

export const HeroesApp = () => {
  return (

    <AuthProvider>
      
      <AppRoutes />

    </AuthProvider>

  )
}
