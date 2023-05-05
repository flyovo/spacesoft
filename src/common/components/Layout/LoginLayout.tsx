import type { ReactNode } from 'react'

import { LoginContainer } from './style'

interface Props {
  children: ReactNode
}

export default function LoginLayout({ children }: Props) {
  return <LoginContainer>{children}</LoginContainer>
}
