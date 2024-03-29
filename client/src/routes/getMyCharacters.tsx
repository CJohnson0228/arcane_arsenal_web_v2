export const getMyCharacters = async (uid: string) => {
  const response = await fetch('/api/characters/mycharacters', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ uid }),
  })

  const json = await response.json()

  return JSON.stringify(json)
}
