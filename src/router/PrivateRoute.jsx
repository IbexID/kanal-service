import { useLocation, Navigate } from "react-router"

export const PrivateRoute = ({ children, isAuth }) => {
  const location = useLocation()

  return isAuth ? (
    <>{children}</>
  ) : (
    <Navigate
      replace={true}
      to="/login"
      state={{ from: `${location.pathname}${location.search}` }}
    />
  )
}