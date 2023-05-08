import { useState } from 'react'

import { useRouter } from 'next/router'
import { headerMenu } from '../../common/components/Layout/constants'
import {
  AntdButton,
  ButtonWrapper,
  StyledHr,
  StyledSection,
  Title
} from './style'
import { Table } from 'antd'
import { deviceColumn, deviceDataSource } from './constants'
import { GroupManagementModal } from './Modal'

interface Props {
  previousRoute: string
}

export function DeviceManagement({ previousRoute }: Props) {
  const [loading, setLoading] = useState(false)
  const [deviceModalVisible, setDeviceModalVisible] = useState(false)

  const router = useRouter()

  const path = router.pathname.split('/')
  console.log(path, path.length - 1)
  const title = headerMenu?.find(
    (menu) => path[path.length - 1] === menu?.key
  ).label

  const handleClickGroupManegement = () => {
    setDeviceModalVisible(true)
  }

  return (
    <>
      <StyledSection>
        <Title>{title}</Title>
        <ButtonWrapper>
          <AntdButton
            style={{ height: '34px' }}
            onClick={handleClickGroupManegement}>
            그룹 관리
          </AntdButton>
          <AntdButton style={{ height: '34px' }}>신규 기기 추가</AntdButton>
        </ButtonWrapper>
        <StyledHr />
        <Table
          style={{ height: 'calc(100% - 141px)', overflow: 'scroll' }}
          columns={deviceColumn}
          dataSource={deviceDataSource}
          showHeader={true}
          pagination={false}
          scroll={{ x: '100%', y: 'calc(100% - 141px - 100px)' }}
        />
      </StyledSection>
      <GroupManagementModal
        isModalOpen={deviceModalVisible}
        handleOk={() => setDeviceModalVisible(false)}
        handleCancel={() => setDeviceModalVisible(false)}
      />
    </>
  )
}
