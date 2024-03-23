import styled from '@emotion/styled'
import { colors } from '../../style/style.constants'

const TopBar = () => {
  const Container = styled.div({
    position: 'absolute',
    width: '100vw',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: colors.background,
    borderBottom: '1px solid',
    borderColor: colors.greys.dark,
    boxShadow: '0px 3px 3px 3px ' + colors.alphas.black[400],
  })

  const MainContainer = styled.div({
    display: 'flex',
    justifyContent: 'center',
    padding: 5,
    borderBottom: '1px solid',
    borderColor: colors.alphas.white[100],
  })

  const MainContent = styled.div({
    maxWidth: 1128,
  })

  const SubContainer = styled.div({
    display: 'flex',
    justifyContent: 'center',
    padding: 5,
    borderBottom: '1px solid',
    borderColor: colors.greys.dark,
    boxShadow: '0px 3px 3px 3px ' + colors.alphas.black[400],
  })

  const SubContent = styled.div({
    maxWidth: 1128,
  })

  return (
    <Container>
      <MainContainer>
        <MainContent>Main Topbar</MainContent>
      </MainContainer>
      <SubContainer>
        <SubContent>Sub Topbar</SubContent>
      </SubContainer>
    </Container>
  )
}

export default TopBar
