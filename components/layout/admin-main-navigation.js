import Link from 'next/link'
import classes from './main-navigation.module.css'
import Logo from './logo'
function AdminMainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/admin-profile">Admin</Link>
          </li>
          <li>
            <Link href="/messages">Messages</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default AdminMainNavigation
