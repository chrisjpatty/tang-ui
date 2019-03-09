import React from 'react'
import styled from '@emotion/styled'
import Center from './Center'

const ButtonWrapper = styled('button')(
  {
    width: 60,
    height: 60,
    borderRadius: '100%',
    position: 'fixed',
    right: 30,
    bottom: 30,
    border: 'none',
    padding: 10,
    // paddingLeft: 16,
    paddingBottom: 11,
    outline: 'none',
    transition: 'transform 250ms',
    '& svg': {
      width: '100%'
    }
  },
  ({ theme }) => ({
    background: theme.primary.color,
    color: theme.primary.textOn,
    fill: 'currentColor',
    boxShadow: theme.shadows.high,
    '&:hover': {
      background: theme.primary.light,
      transform: 'scale(1.1)'
    },
    '&:focus': {
      background: theme.primary.light
    },
    [theme.media.sm]: {
      right: 20,
      bottom: 20
    }
  }),
  ({ cssFunction, theme }) =>
    typeof cssFunction === 'function' ? cssFunction(theme) : null
)

export default class FOB extends React.Component {
  render() {
    const { children, cssFunction, ...restProps } = this.props
    return (
      <ButtonWrapper cssFunction={cssFunction} {...restProps}>
        <Center>
          {children}
        </Center>
      </ButtonWrapper>
    )
  }
}
