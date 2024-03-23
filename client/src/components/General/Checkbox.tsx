import styled from '@emotion/styled'
import gsap from 'gsap'
import { ReactNode, forwardRef, useRef, useState } from 'react'
import { colors } from '../../style/style.constants'

interface CheckboxProps {
  label?: string | ReactNode
  onClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void
}

const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(({ onClick, label }, ref) => {
  const [thisChecked, setThisChecked] = useState<boolean>(false)
  const InputRef = useRef<HTMLInputElement | null>(null)
  const CheckmarkRef = useRef<HTMLSpanElement | null>(null)

  const toggleChecked = () => {
    onClick
    setThisChecked(!thisChecked)
  }

  const Container = styled.label({
    display: 'flex',
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingLeft: 35,
    fontSize: 14,
    color: colors.greys.light,
    cursor: 'pointer',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
  })

  const Checkbox = styled.input({
    position: 'absolute',
    opacity: 0,
    cursor: 'pointer',
    height: 0,
    width: 0,
  })

  const Checkmark = styled.span({
    position: 'absolute',
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    borderRadius: 6,
    backgroundColor: 'transparent',
    border: '1px solid',
    borderColor: colors.greys.light,
    '&::after': {
      content: '""',
      position: 'absolute',
      display: thisChecked ? 'block' : 'none',
      left: 7,
      top: 2,
      width: 8,
      height: 14,
      borderStyle: 'solid',
      borderColor: colors.primary[500],
      borderWidth: '0 2px 2px 0',
      transform: 'rotate(45deg)',
      WebkitTransform: 'rotate(45deg)',
      msTransform: 'rotate(45deg)',
    },
  })

  const HoverAnimOn = () => {
    gsap.to([CheckmarkRef.current], {
      borderColor: colors.primary[400],
      duration: 0.2,
    })
  }

  const HoverAnimOff = () => {
    gsap.to([CheckmarkRef.current], {
      borderColor: colors.greys.light,
      duration: 0.2,
    })
  }

  return (
    <Container
      onMouseEnter={HoverAnimOn}
      onMouseLeave={HoverAnimOff}
      onClick={toggleChecked}
      ref={ref}>
      {label}
      <Checkbox
        type='checkbox'
        ref={InputRef}
      />
      <Checkmark
        ref={CheckmarkRef}
        className='checkmark'></Checkmark>
    </Container>
  )
})

export default Checkbox
