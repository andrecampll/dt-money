import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    white: {
      '700': '#FFFFFF',
    },
    gray: {
      '100': '#E1E1E6',
      '300': '#C4C4CC',
      '400': '#8D8D99',
      '500': '#7C7C8A',
      '600': '#323238',
      '700': '#29292E',
      '800': '#202024',
      '900': '#121214',
    },
    primary: {
      '300': '#7159c1',
      '500': '#6049AE',
      '700': '#4E3994',
    },
    success: {
      '300': '#00B37E',
      '500': '#00875F',
      '700': '#015F43',
    },
    danger: {
      '300': '#F75A68',
      '500': '#AB222E',
      '700': '#7A1921',
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.800',
        color: 'white.700',
      },
    },
  },
})
