import React from 'react'
import type { ReactNode } from 'react'
import { useRouter } from 'next/router'
import LoginLayout from './LoginLayout'
import MainLayout from './MainLayout'

interface Props {
  children: ReactNode
}

export default function LayoutTemplate({ children }: Props) {
  const { pathname } = useRouter()

  if (pathname === '/login') {
    return <LoginLayout>{children}</LoginLayout>
  }

  const isDynamicRoute = pathname.includes('[') || pathname.includes(']')

  const [, menu, pageTitle] = pathname.split('/')
  console.log(pathname.split('/'))
  console.log('pathname :::', menu, pageTitle)
  console.log('isDynamicRoute :::', isDynamicRoute)
  console.log('children :::', children)

  return (
    <MainLayout
      nav={pageTitle}
      pageTitle={[
        {
          path: 'index',
          title: pageTitle
        }
      ]}>
      {children}
    </MainLayout>
  )
}
