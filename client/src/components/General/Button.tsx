import styled from '@emotion/styled'
import { CSSProperties, ReactNode, forwardRef } from 'react'
import { colors } from '../../style/style.constants'

interface ButtonProps {
  label: string
  variant?: 'filled' | 'outlined' | 'text'
  shape?: 'square' | 'semi-round' | 'round'
  color?: 'primary' | 'secondary' | 'warning' | 'success' | 'note' | 'info'
  startIcon?: ReactNode
  endIcon?: ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  style?: CSSProperties
}

const Label = styled.span({})

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      color = 'primary',
      variant = 'text',
      startIcon,
      endIcon,
      onClick,
      style,
      shape = 'square',
    },
    ref
  ) => {
    const ButtonBase = styled.button({
      outline: 'none',
      background: 'none',
      border: 'none',
      color: colors.text.light,
      backgroundColor: 'transparent',
      overflow: 'hidden',
      position: 'relative',
      padding: '8px 14px',
      borderRadius: shape === 'round' ? 14 : shape === 'semi-round' ? 8 : 0,
    })

    const TextButton = styled(ButtonBase)({
      color: colors[color][500],
    })

    const FilledButton = styled(ButtonBase)({
      backgroundColor: colors[color][500],
      color: colors.text.light,
    })

    const OutlinedButton = styled(ButtonBase)({
      border: '1px solid',
      borderColor: colors[color][500],
      color: colors[color][500],
    })

    if (variant === 'text') {
      return (
        <TextButton
          style={style}
          onClick={onClick}
          ref={ref}>
          <Label>
            {startIcon}
            {label}
            {endIcon}
          </Label>
        </TextButton>
      )
    }
    if (variant === 'filled') {
      return (
        <FilledButton
          style={style}
          onClick={onClick}
          ref={ref}>
          <Label>
            {startIcon}
            {label}
            {endIcon}
          </Label>
        </FilledButton>
      )
    }
    if (variant === 'outlined') {
      return (
        <OutlinedButton
          style={style}
          onClick={onClick}
          ref={ref}>
          <Label>
            {startIcon}
            {label}
            {endIcon}
          </Label>
        </OutlinedButton>
      )
    }
  }
)

export default Button
