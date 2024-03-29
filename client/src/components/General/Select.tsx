import styled from '@emotion/styled'
import { ComponentProps } from 'react'
import { colors } from '../../style/style.constants'

const SelectBase = styled.div({
  minWidth: 250,
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    right: '10px',
    pointerEvents: 'none',
    borderLeft: '4px solid transparent',
    borderRight: '4px solid transparent',
    borderTop: '4px solid ' + colors.greys.medium,
    top: '40%',
  },
})

const SelectMain = styled.select({
  appearance: 'none',
  width: '100%',
  fontSize: 12,
  padding: '5px 12px 5px 5px',
  backgroundColor: colors.black,
  border: '1px solid ' + colors.greys.medium,
  borderRadius: 5,
  color: colors.text.light,
  cursor: 'pointer',
})

interface SelectProps extends ComponentProps<'input'> {
  options: string[]
}

const Select = (props: SelectProps) => {
  const { options } = props
  return (
    <SelectBase>
      <SelectMain>
        {options.map((option: string) => {
          return (
            <option
              value={option}
              key={option}>
              {option}
            </option>
          )
        })}
      </SelectMain>
    </SelectBase>
  )
}

export default Select
