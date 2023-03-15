import { ComponentProps } from 'react'

import { styled } from '@levva-ui/styles'

export const Button = styled('button', {
  backgroundColor: '$primary500',
  borderRadius: '$md',

  variants: {
    size: {
      small: {
        fontSize: '$14',
        fontWeight: '$bold',
        padding: '$4 $8',
      },
      big: {
        fontSize: '$14',
        fontWeight: '$bold',
        padding: '$8 $16',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
