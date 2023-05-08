import { Button, Modal, Row } from 'antd'
import { IndividualSetting } from './Contents'
import { ModalGlobalStyle } from './styles'

interface ModalProps {
  isModalOpen: boolean
  handleOk: () => void
  handleCancel: () => void
}

export function GroupManagementModal({
  isModalOpen,
  handleOk,
  handleCancel
}: ModalProps) {
  return (
    <>
      <ModalGlobalStyle />
      <Modal
        title="그룹 관리"
        centered
        width={'80%'}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        bodyStyle={{ backgroundColor: '#e8edf0' }}
        footer={[
          <Button
            key="back"
            onClick={handleOk}
            style={{
              width: '100%',
              height: '50px',
              backgroundColor: '#4ca7db',
              color: '#f7fbfc',
              fontSize: '16px',
              borderColor: 'transparent',
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0
            }}>
            완료
          </Button>
        ]}>
        <Row style={{ gap: '10px', marginBottom: '15px' }}>
          <IndividualSetting title={'1'} columnType={'institutional'} />
          <IndividualSetting title={'2'} columnType={'department'} />
          <IndividualSetting title={'3'} columnType={'model'} />
        </Row>
        <Row style={{ gap: '10px' }}>
          <IndividualSetting title={'4'} columnType={'institutional'} />
          <IndividualSetting title={'5'} columnType={'department'} />
          <IndividualSetting title={'6'} columnType={'model'} />
        </Row>
      </Modal>
    </>
  )
}
