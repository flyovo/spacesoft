import { Button } from 'antd'
import styled from 'styled-components'

export const StyledSection = styled.div`
  height: 100%;
`

export const Title = styled.div`
  font-size: 42px;
  font-weight: 500;
  color: #36424d;
  margin-bottom: 24px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`

export const StyledHr = styled.hr`
  margin: 14px 0;
  border: 0.5px solid #adbecc;
`

export const AntdButton = styled(Button)`
  border: solid 1px #2f3942;
  background-color: #36424d;
  font-size: 13px;
  font-weight: 300;
  line-height: 1.38;
  text-align: center;
  color: #fff;

  :not(:disabled):hover {
    border: solid 1px #2f3942;
    background-color: #36424d;
    color: #fff;
    font-weight: 400;
  }
`
