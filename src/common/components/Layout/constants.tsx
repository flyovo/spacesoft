import React from 'react'
import {
  HomeOutlined,
  MedicineBoxOutlined,
  BarChartOutlined,
  DiffOutlined,
  PrinterFilled,
  FileFilled,
  CheckSquareOutlined,
  UserSwitchOutlined,
  SettingFilled,
  TeamOutlined
  //   UserOutlined,
  //   LaptopOutlined,
  //   NotificationOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  key: React.Key,
  label: React.ReactNode,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem
}

export const headerMenu: MenuProps['items'] = [
  getItem(1, `기기관리`),
  { key: 2, type: 'divider' },
  getItem(3, `자동 종료 설정`),
  { key: 4, type: 'divider' },
  getItem(5, `사용자 계정 관리`)
]

export const navMenu: MenuProps['items'] = [
  {
    key: 'sub1',
    icon: React.createElement(HomeOutlined),
    label: `HOME`
  },
  {
    key: 'sub2',
    icon: React.createElement(MedicineBoxOutlined),
    label: `수납기`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = j + 1
      return {
        key: subKey,
        label: `option${subKey}`
      }
    })
  },
  {
    key: 'sub3',
    icon: React.createElement(PrinterFilled),
    label: `순번기`,
    children: []
  },
  {
    key: 'sub4',
    icon: React.createElement(FileFilled),
    label: `제증명`,
    children: []
  },
  {
    key: 'sub5',
    icon: React.createElement(CheckSquareOutlined),
    label: `도착확인`,
    children: []
  },
  {
    key: 'sub6',
    icon: React.createElement(UserSwitchOutlined),
    label: `신체계측`,
    children: []
  },
  {
    key: 'sub7',
    icon: React.createElement(SettingFilled),
    label: `기기관리`,
    children: []
  },
  {
    key: 'sub8',
    icon: React.createElement(TeamOutlined),
    label: `회원관리`,
    children: []
  }
]

// export const item2: MenuProps['items'] = [
//   UserOutlined,
//   LaptopOutlined,
//   NotificationOutlined
// ].map((icon, index) => {
//   const key = String(index + 1)

//   return {
//     key: `sub${key}`,
//     icon: React.createElement(icon),
//     label: `subnav ${key}`,

//     children: new Array(4).fill(null).map((_, j) => {
//       const subKey = index * 4 + j + 1
//       return {
//         key: subKey,
//         label: `option${subKey}`
//       }
//     })
//   }
// })
