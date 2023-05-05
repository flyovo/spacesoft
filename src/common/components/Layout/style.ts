import styled from 'styled-components'

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(/images/background.png);
`

export const MainContainer = styled.div`
  .ant-layout-header {
    .ant-menu {
      height: 26px;
      .ant-menu-item {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 4px 9px;
        border-radius: 13px;
        order: 0 !important;
      }
      .ant-menu-item-divider {
        height: 50%;
        margin: auto 10px;
        border-inline-start: 1px solid #fff;
      }
    }

    .ant-menu-light
      .ant-menu-item:hover:not(.ant-menu-item-selected):not(
        .ant-menu-submenu-selected
      ),
    .ant-menu-light.ant-menu-horizontal > .ant-menu-item-selected,
    .ant-menu-light.ant-menu-horizontal > .ant-menu-item:hover::after {
      color: #004c8d;
      background-color: #f0f4fc;
    }

    .ant-menu-light.ant-menu-horizontal > .ant-menu-item::after,
    .ant-menu-light.ant-menu-horizontal > .ant-menu-item:hover::after,
    .ant-menu-light.ant-menu-horizontal > .ant-menu-item-selected::after {
      border-bottom: 0;
      border-bottom-width: 0;
    }
  }
  .ant-menu-item-selected {
    color: #2d3038;
    background-color: transparent;
  }
`

export const MenuWrapper = styled.div`
  display: flex;
  flex: auto 1;
  justify-content: space-between;
  align-items: center;
  padding: 17px 28px;
`

export const LoginMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  font-size: 15px;
`

export const AccountInfo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 14px;

  color: #e6edf2;
  img {
    content: url(/images/account.png);
  }
`
