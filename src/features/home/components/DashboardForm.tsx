import { useState } from 'react'

import { Button, Checkbox, Form, Input, Row } from 'antd'
import { useRouter } from 'next/router'

// import { getSecurityActions } from '../../../common/store/securityStore'

interface Props {
  previousRoute: string
}

export function DashboardForm({ previousRoute }: Props) {
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  return <></>
}
