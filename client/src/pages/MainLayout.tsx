import styled from '@emotion/styled'
import { Outlet } from 'react-router-dom'
import TopBar from '../components/TopBar'
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

const MainWindow = styled.div({
  margin: '90px auto 0',
  maxWidth: 1128,
})

const MainLayout = () => {
  return (
    <Container className='content'>
      <TopBar />
      <MainWindow>
        <Outlet />
      </MainWindow>
    </Container>
  )
}

export default MainLayout
