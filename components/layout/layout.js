import { Fragment } from 'react'
import MainNavigation from './main-navigation'
import AdminMainNavigation from './admin-main-navigation'
import { useSession } from 'next-auth/react'
function Layout(props) {
  const session = useSession()
  const isAuthenticated = session.status === 'authenticated'
  return (
    <Fragment>
      {isAuthenticated ? <AdminMainNavigation /> : <MainNavigation />}
      <main>{props.children}</main>
    </Fragment>
  )
}

export default Layout
