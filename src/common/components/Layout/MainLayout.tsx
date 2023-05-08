import React, { useEffect, useState } from 'react'
import type { ReactNode } from 'react'

import { Breadcrumb, Button, Layout, Menu } from 'antd'
import { Logo } from '../Logo'
import { headerMenu, navMenu } from './constants'
import { AccountInfo, LoginMenu, MainContainer, MenuWrapper } from './style'
import { PoweroffOutlined, UserOutlined } from '@ant-design/icons'
import router from 'next/router'

interface BreadcrumbProp {
  path: string
  title: string
}
interface Props {
  children: ReactNode
  nav: string
  // breadcrumbs: BreadcrumbProp[]
  pageTitle: BreadcrumbProp[]
}

const HEADER_HEIGHT = '80px'
const NAV_WIDTH = '248px'

export default function MainLayout({ children, nav, pageTitle }: Props) {
  const { Header, Content, Sider } = Layout
  const [navPosition, setNavPosition] = useState(nav)
  const [breadcrumbs, setBreadcrumbs] = useState(pageTitle)

  // useEffect(() => {
  //   if (pageTitle.length === 1) {
  //     setBreadcrumbs(
  //       pageTitle?.map((page) => {
  //         return {
  //           ...page,
  //           title: headerMenu?.find((menu) => menu?.key === page.title).label
  //         }
  //       })
  //     )
  //   }
  // }, [pageTitle])

  const handleClick = (item: any) => {
    console.log(item)
    router.replace(`/${item.key}`)
  }

  return (
    <MainContainer>
      <Layout style={{ width: '100vw', height: '100vh' }}>
        <Header
          style={{
            display: 'flex',
            height: HEADER_HEIGHT,
            padding: 0,
            backgroundColor: '#004c8d'
          }}>
          <Logo width={NAV_WIDTH} height={HEADER_HEIGHT} />
          <MenuWrapper>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={[nav]}
              style={{
                display: 'flex',
                flex: 1,
                alignItems: 'center',
                background: 'transparent',
                color: '#f0f4fc',
                borderBottom: 'unset',
                fontSize: '15px',
                marginLeft: '34px'
              }}
              onClick={handleClick}
              items={headerMenu}
            />
            <LoginMenu>
              <AccountInfo>
                <UserOutlined style={{ fontSize: '20px', color: '#e6edf2' }} />
                {/* <img alt="account" /> */}
                관리자 홍길동
              </AccountInfo>
              <Button
                style={{
                  width: '45px',
                  height: '100%',
                  border: 'none',
                  padding: '0',
                  backgroundColor: 'transparent'
                }}>
                <PoweroffOutlined
                  style={{ fontSize: '26px', color: '#e8edf0' }}
                />
              </Button>
            </LoginMenu>
          </MenuWrapper>
        </Header>
        <Layout>
          <Sider width={NAV_WIDTH}>
            <Menu
              mode="inline"
              defaultSelectedKeys={[nav]}
              defaultOpenKeys={[nav]}
              style={{
                height: '100%',
                background: '#f0f3f5',
                color: '#6c7780',
                fontSize: '14px'
              }}
              items={navMenu}
            />
          </Sider>
          <Layout>
            {/* <Breadcrumb
              style={{ margin: '16px 0' }}
              items={breadcrumbs}
              separator=">"
            /> */}
            <Content
              style={{
                padding: '24px 41px',
                margin: 0,
                minHeight: 280,
                backgroundColor: '#e8edf0'
              }}>
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </MainContainer>
  )
}
