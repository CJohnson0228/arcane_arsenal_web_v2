import styled from '@emotion/styled'
import { colors } from '../style/style.constants'

interface CharacterCardProps {
  characterName: string
  playerName: string
}

const CardBase = styled.div({
  backgroundColor: colors.greys.dark,
  padding: 10,
  width: 300,
  margin: 5,
})

const CharacterCard = (props: CharacterCardProps) => {
  const { characterName, playerName } = props

  return (
    <CardBase>
      <div>{characterName}</div>
      <div>{playerName}</div>
    </CardBase>
  )
}

export default CharacterCard
