import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@levva-ui/react'

export default {
  title: 'Forms/Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
