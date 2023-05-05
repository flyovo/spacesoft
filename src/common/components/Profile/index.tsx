// import { Dropdown } from '@ipf-dev/spindle-design-system';
import { Dropdown, MenuProps } from 'antd'
import { useRouter } from 'next/router'

import { useCurrentUser } from '../../store/currentUserStore'
import { getSecurityActions } from '../../store/securityStore'
import { Name, Image, ProfileBox, Menu, AntdDropdownListStyle } from './style'

export default function Profile() {
  const router = useRouter()

  const currentUser = useCurrentUser()

  const { logout } = getSecurityActions()

  const handleClick = () => {
    logout({
      onSuccess: () => {
        router.push('/')
      },
      onError: () => {
        router.push('/')
      }
    })
  }

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Menu onClick={handleClick}>
          {/* <Icon iconType="logout" /> Logout */}
        </Menu>
      )
    }
  ]

  return (
    <>
      <AntdDropdownListStyle />
      <Dropdown menu={{ items }} placement="bottom">
        <ProfileBox>
          <Name>{currentUser?.userName ?? ''}</Name>
          <Image>{/* <Icon iconType="profile" color="#FFFFFF" /> */}</Image>
        </ProfileBox>
      </Dropdown>
    </>
  )
}
