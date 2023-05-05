import styled, { createGlobalStyle } from 'styled-components'

export const ProfileBox = styled.div`
  display: flex;
  height: 8.3rem;
  gap: 1.6rem;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`

export const Name = styled.span`
  color: ${({ theme }) => theme.colorTokens.text.primary};
`

export const Image = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 10rem;
  background-color: ${({ theme }) => theme.colorTokens.icon.secondary};
`

export const AntdDropdownListStyle = createGlobalStyle`
  ul.ant-dropdown-menu {
    padding: 8px !important;
  }
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 9.8rem;
  height: 4rem;
  border-radius: 8px;
`
