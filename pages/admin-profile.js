import { useState } from 'react'
import classes from '../components/admin/contact-form.module.css'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from "next/router";

function AdminProfile() {
  const router = useRouter()
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const session = useSession()
  const isAuthenticated = session.status === 'authenticated'
  if (typeof window !== 'undefined' && isAuthenticated) {
    router.push('/admin-profile');
    return null;
  }


  async function logOutHandler(event) {
    event.preventDefault()
    try {
      setIsLoggingOut(true)
      const result = await signOut()
    } catch (error) {
      console.error('Error during logout:', error)
    } finally {
      setIsLoggingOut(false)
    }
  }

  return (
    <section className={classes.contact}>
      <h1>Welcome To Admin Page</h1>
      <form className={classes.form} onSubmit={logOutHandler}>
        <div className={classes.actions}>
          <button type="submit" disabled={isLoggingOut}>
            {isLoggingOut ? 'Logging Out...' : 'Log Out'}
          </button>
        </div>
      </form>
    </section>
  )
}

export default AdminProfile
