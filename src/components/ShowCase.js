import { lighten } from 'polished'
import { styled, th } from '@smooth-ui/core-sc'

const ShowCase = styled.div`
  margin-top: 80px;
  color: ${th('primary', color => lighten(0.03, color))};
  background-color: ${th('gray900')};
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    padding: 0;
    font-weight: 500;
    margin-bottom: 10px;
    font-size: 34px;
    line-height: 1.2;
  }
`

export default ShowCase
