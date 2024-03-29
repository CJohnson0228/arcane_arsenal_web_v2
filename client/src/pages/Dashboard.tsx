import { useEffect } from 'react'
import CharacterCard from '../components/CharacterCard'
import { addUserCharacters } from '../redux/Characters'
import { useAppDispatch, useAppSelector } from '../redux/hooks'

const Dashboard = () => {
  const uid = useAppSelector((state) => state.user._id)
  const characters = useAppSelector((state) => state.characters.userCharacters)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (uid) {
      const fetchData = async () => {
        const response = await fetch(`/api/characters/mycharacters/${uid}`)
        const newData = await response.json()

        if (characters.length === 0) {
          for (let i = 0; i < newData.length; i++) {
            console.log('character added : ' + newData[i]._id)
            dispatch(addUserCharacters(newData[i]))
          }
        } else {
          for (let i = 0; i < newData.length; i++) {
            if (characters.findIndex((k) => k._id === newData[i]._id) === -1) {
              console.log('additional character added : ' + newData[i]._id)
              dispatch(addUserCharacters(newData[i]))
            }
          }
        }
      }
      fetchData()
    }
  }, [uid])

  return (
    <div>
      {characters.map((char) => {
        return (
          <CharacterCard
            characterName={char.characterName}
            playerName={char.playerName}
          />
        )
      })}
    </div>
  )
}

export default Dashboard
