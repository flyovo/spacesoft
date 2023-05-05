import { useState } from 'react'

import { Button, Checkbox, Form, Input, Row } from 'antd'
import { useRouter } from 'next/router'

// import { getSecurityActions } from '../../../common/store/securityStore'
import { Logo } from '../../../common/components/Logo'
import { GlobalStyle } from './style'

type validState = 'valid' | 'error'

interface Props {
  previousRoute: string
}

export function LoginForm({ previousRoute }: Props) {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const [emailErrorMessageKey, setEmailErrorMessageKey] = useState('')
  const [passwordErrorMessageKey, setPasswordErrorMessageKey] = useState('')
  const [emailValidState, setEmailValidState] = useState('valid' as validState)
  const [passwordValidState, setPasswordValidState] = useState(
    'valid' as validState
  )

  const router = useRouter()

  const handleSubmit = () => {}
  const handleEmailBlur = () => {}
  const handlePasswordBlur = () => {}
  const handleChange = () => {}

  return (
    <>
      <GlobalStyle />
      <Form
        form={form}
        name="basic"
        style={{
          width: 360,
          height: 337,
          borderRadius: '3px',
          boxShadow: '0 10px 20px 0 rgba(0, 0, 0, 0.3)'
        }}
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        autoComplete="off">
        <Logo width="100%" height="77px" />
        <Row
          style={{
            height: '210px',
            padding: '50px 35px',
            backgroundColor: '#e8edf0',
            justifyContent: 'flex-end'
          }}>
          <Form.Item
            name="email"
            initialValue=""
            style={{ width: '100%', marginBottom: '15px' }}>
            <Input
              id="email"
              value=""
              onBlur={handleEmailBlur}
              placeholder="ID"
            />
          </Form.Item>

          <Form.Item
            name="password"
            initialValue=""
            style={{ width: '100%', marginBottom: '15px' }}>
            <Input
              id="password"
              value=""
              onBlur={handlePasswordBlur}
              placeholder="PASSWORD"
            />
          </Form.Item>
          <Checkbox onChange={handleChange} style={{ color: '#3d464d' }}>
            아이디 기억하기
          </Checkbox>
        </Row>
        <Form.Item>
          <Button
            style={{
              width: '100%',
              height: '50px',
              color: '#f7fbfc',
              borderRadius: '0 0 3px 3px',
              border: 'transparent',
              backgroundColor: '#4ca7db'
            }}
            loading={loading}>
            로그인
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
