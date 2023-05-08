import { ColumnType } from 'antd/es/table'
import { Device } from './types'

export const deviceColumn: ColumnType<Device>[] = [
  {
    title: 'idx',
    key: 'idx',
    dataIndex: 'idx',
    align: 'center'
    // render: (value) =>
  },
  {
    title: 'wisdom id',
    key: 'wisdom_id',
    dataIndex: 'wisdom_id',
    align: 'center'
  },
  {
    title: 'wisdom id',
    key: 'wisdom_id',
    dataIndex: 'wisdom_id',
    align: 'center'
  },
  {
    title: 'wisdom id',
    key: 'wisdom_id',
    dataIndex: 'wisdom_id',
    align: 'center'
  },
  {
    title: 'IP',
    key: 'dev_ip',
    dataIndex: 'dev_ip',
    align: 'left'
  },
  {
    title: '기관',
    key: 'pos_1',
    dataIndex: 'pos_1',
    align: 'center'
  },
  {
    title: '층',
    key: 'pos_2',
    dataIndex: 'pos_2',
    align: 'center'
  },
  {
    title: '설명1',
    key: 'pos_3',
    dataIndex: 'pos_3',
    align: 'center'
  },
  {
    title: '설명2',
    key: 'pos_5',
    dataIndex: 'pos_5',
    align: 'center'
  },
  {
    title: '관리부서',
    key: 'pos_4',
    dataIndex: 'pos_4',
    align: 'center'
  },
  {
    title: '기기타입',
    key: 'dev_type',
    dataIndex: 'dev_type',
    align: 'center'
  },
  {
    title: '모델명',
    key: 'dev_model',
    dataIndex: 'dev_model',
    align: 'center'
  },
  {
    title: '운영프로그램',
    key: 'op_prog',
    dataIndex: 'op_prog',
    align: 'center'
  },
  {
    title: '마지막접속',
    key: 'connect_time',
    dataIndex: 'connect_time',
    align: 'center'
  }
]

export const deviceDataSource = Array.from(new Array(100), (arr, index) => ({
  key: index,
  idx: 1,
  dev_ip: '200.1.1.216',
  wisdom_id: 'test1',
  ocs_id: null,
  kiosk_id: null,
  pos_1: 'A동',
  pos_2: '1층',
  pos_3: '외래복합기',
  pos_4: '원무과',
  pos_5: 'M 왼쪽',
  dev_type: 'KIOSK',
  dev_model: 'i80s',
  op_prog: '외래복합기-M/B 서버',
  cms_group_id: null,
  cms_status: '미배포',
  connect_time: '2023-03-13 07:25:59'
}))

export const autoShutdownColumn = []
export const accountColumn = []
