import { styled } from '@levva-ui/styles'
import { colors } from '@levva-ui/tokens'

const Button = styled('button', {
  backgroundColor: '$primary500',
  height: '$10',
  borderRadius: '$md',
  width: '$10',
})

export function App() {
  return (
    <>
      <h1 style={{ color: colors.secondary500 }}>Hello World</h1>
      <Button>Click</Button>
    </>
  )
}
