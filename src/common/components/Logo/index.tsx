import { ImgWrapper } from './style'
import LogoImage from './assets/image/logo.svg'

interface Props {
  width: string
  height: string
}

export function Logo({ width, height }: Props) {
  return (
    <ImgWrapper href="/" width={width} height={height}>
      <LogoImage />
    </ImgWrapper>
  )
}
