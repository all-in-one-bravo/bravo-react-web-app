import React from 'react'
import './button.css'
import styled from 'styled-components'
import MuiButton from '@mui/material/Button'

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

export const StyledButton = styled(MuiButton)`
  background-color: #0047ab;
  font-style: normal;
  font-family: 'Barlow';
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.25);
  color: #ffffff;

  &:hover {
    background-color: #000080;
  }
`

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary'
  return (
    <StyledButton
      onClick={props.onClick}
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' '
      )}
    >
      {label}
    </StyledButton>
  )
}
