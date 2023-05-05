import styled from 'styled-components'

export const ImgWrapper = styled.a<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  background-color: #f7fbfc;
`
