import AdminPageForm from '@/components/admin/admin-form'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

function Admin() {
  const router = useRouter()
  const session = useSession()
  const isAuthenticated = session.status === 'authenticated'
  if (isAuthenticated) {
    router.push('/admin-profile')
  }

  return <AdminPageForm />
}

export default Admin
