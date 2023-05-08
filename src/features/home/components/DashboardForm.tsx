import { useState } from 'react'

import { useRouter } from 'next/router'

interface Props {
  previousRoute: string
}

export function DashboardForm({ previousRoute }: Props) {
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  return <></>
}
