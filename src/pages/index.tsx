import { useEffect } from 'react'

import { useRouter } from 'next/router'

// import { useAccessToken } from '../common/store/securityStore'

export function Index() {
  const router = useRouter()

  // const accessToken = useAccessToken()

  useEffect(() => {
    // if (!accessToken) {
    router.replace('/login')
    //   return
    // }

    // router.replace('/accounts')
  }, [])

  // return <></>
}

export default Index
