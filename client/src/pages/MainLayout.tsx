import styled from '@emotion/styled'
import LeftBar from '../components/MainLayout/LeftBar'
import MainWindow from '../components/MainLayout/MainWindow'
import RightBar from '../components/MainLayout/RightBar'
import TopBar from '../components/MainLayout/TopBar'
import { colors } from '../style/style.constants'

const Container = styled.div({
  position: 'relative',
  height: '100vh',
  width: '100vw',
  overflow: 'hidden',
  color: colors.text.light,
  backgroundColor: colors.black,
  backgroundImage: 'url("/images/background.png")',
  backgroundSize: '1440px 1440px',
  backgroundPosition: 'center',
})

const MainLayout = () => {
  return (
    <Container className='content'>
      <TopBar />
      <RightBar />
      <LeftBar />
      <MainWindow />
    </Container>
  )
}

export default MainLayout
