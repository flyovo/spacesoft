import { useRouter } from 'next/router'
import { useEffect } from 'react'
import LayoutTemplate from '../common/components/Layout'
import { useAccessToken } from '../common/store/securityStore'
import { DashboardForm } from '../features/home/components'

export default function Login({ previousRoute }: { previousRoute: any }) {
  const accessToken = useAccessToken()
  const router = useRouter()

  useEffect(() => {
    if (!accessToken) {
      return
    }

    router.replace(previousRoute)
  }, [accessToken])

  return (
    <LayoutTemplate>
      <DashboardForm previousRoute={''} />
    </LayoutTemplate>
  )
}
