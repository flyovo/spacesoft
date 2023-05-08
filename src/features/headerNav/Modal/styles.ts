import styled, { createGlobalStyle } from 'styled-components'

export const ModalGlobalStyle = createGlobalStyle`
.ant-modal{
    .ant-modal-content {
        padding: 0;

        .ant-modal-close {
            width: 28px;
            height: 28px;
            top: 25px;
            right: 25px;
            .ant-modal-close-x {
                font-size: 28px;
            }
        }

        .ant-modal-header {
            padding: 20px 25px;
            margin-bottom: 0;

            .ant-modal-title {
                font-family: SpoqaHanSansNeo;
                font-size: 30px;
                line-height: 1.2;
                color: #2d3038;
            }
        }

        .ant-modal-body {
            padding: 15px;
        }

        .ant-modal-footer {
            margin-top: 0;

        }
    }
}
`
