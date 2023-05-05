import { Form } from 'antd'
import styled, { createGlobalStyle } from 'styled-components'

export const StyledAntdForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 1.6rem;
  }
`

export const GlobalStyle = createGlobalStyle`
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #4ca7db !important;
    border-color: #4ca7db !important;
    border-radius: 2px;
  }
  .ant-checkbox-checked:after {
    border: 2px solid #4ca7db !important;
  }
`
