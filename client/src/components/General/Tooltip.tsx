import styled from '@emotion/styled'
import { ReactNode, forwardRef } from 'react'
import { colors } from '../../style/style.constants'

interface TooltipProps {
  label: string
  children: ReactNode
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(({ label, children }, ref) => {
  const Wrapper = styled.div({
    position: 'relative',
    display: 'inline-block',
    '&:hover': {
      span: {
        visibility: 'visible',
        opacity: 1,
      },
    },
  })

  const TooltipText = styled.span({
    visibility: 'hidden',
    opacity: 0,
    backgroundColor: colors.primary[500],
    color: colors.black,
    textAlign: 'center',
    padding: '5px 10px',
    fontSize: 12,
    fontWeight: 600,
    borderRadius: 5,
    textTransform: 'uppercase',
    position: 'absolute',
    zIndex: 1,
    top: '50%',
    left: '100%',
    transform: 'translateY(-50%)',
    transition: 'all 0.3s ease-in-out 0.3s',
  })

  return (
    <Wrapper ref={ref}>
      {children}
      <TooltipText>{label}</TooltipText>
    </Wrapper>
  )
})

export default Tooltip
