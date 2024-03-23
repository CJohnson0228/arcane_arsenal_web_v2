import styled from '@emotion/styled'
import { colors } from './style/style.constants'

const MainApp = styled.div({
  backgroundColor: colors.background,
  backgroundImage: 'url("/images/background.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  width: '100vw',
  color: colors.text.light,
})

const App = () => {
  return (
    <MainApp className='App'>
      <div>Arcane Arsenal</div>
    </MainApp>
  )
}

export default App
