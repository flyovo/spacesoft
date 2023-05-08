import { Input, Table } from 'antd'
import { AntdButton, ButtonWrapper } from '../../style'
import { Column, ColumnByType } from './constants'
import { ControlBox, Header, SettingWrapper } from './styles'
import { columnType } from './types'

interface Props {
  title: string
  columnType: columnType
}

export function IndividualSetting({ title, columnType }: Props) {
  return (
    <SettingWrapper>
      <Header>{title}</Header>
      <Table columns={ColumnByType(columnType)} dataSource={[]} />
      <ControlBox>
        <Input style={{ marginBottom: '8px' }} />
        <ButtonWrapper>
          <AntdButton style={{ height: '40px', flex: '1 0 28%' }}>
            추가
          </AntdButton>
          <AntdButton style={{ height: '40px', flex: '1 0 28%' }}>
            수정
          </AntdButton>
          <AntdButton style={{ height: '40px', flex: '1 0 28%' }}>
            삭제
          </AntdButton>
        </ButtonWrapper>
      </ControlBox>
    </SettingWrapper>
  )
}
