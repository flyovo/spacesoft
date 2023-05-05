import React from 'react'
import type { ReactNode } from 'react'

import { Button, Layout, Menu } from 'antd'
import { Logo } from '../Logo'
import { headerMenu, navMenu } from './constants'
import { AccountInfo, LoginMenu, MainContainer, MenuWrapper } from './style'
import { PoweroffOutlined, UserOutlined } from '@ant-design/icons'

interface Props {
  children: ReactNode
}

const HEADER_HEIGHT = '80px'
const NAV_WIDTH = '248px'

export default function MainLayout({ children }: Props) {
  const { Header, Content, Sider } = Layout

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
              defaultSelectedKeys={['0']}
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
              defaultSelectedKeys={['sub1']}
              defaultOpenKeys={['sub1']}
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
            <Content
              style={{
                padding: '24px 41px',
                margin: 0,
                minHeight: 280
              }}>
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </MainContainer>
  )
}
