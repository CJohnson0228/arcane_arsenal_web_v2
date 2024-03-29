import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { LuBell, LuMenu, LuMessagesSquare } from 'react-icons/lu'
import { useAppSelector } from '../redux/hooks'
import { colors } from '../style/style.constants'
import Select from './General/Select'

const TopBar = () => {
  const [initials, setInitials] = useState<string>('')
  const firstName = useAppSelector((state) => state.user.firstName)
  const lastName = useAppSelector((state) => state.user.lastName)

  useEffect(() => {
    if (firstName && lastName) {
      const firstLetter = firstName.charAt(0).toString().toUpperCase()
      const lastLetter = lastName.charAt(0).toString().toUpperCase()
      setInitials(firstLetter + lastLetter)
    }
  }, [firstName, lastName])

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
    borderBottom: '1px solid',
    borderColor: colors.alphas.white[100],
    padding: 5,
  })

  const MainContent = styled.div({
    maxWidth: 1128,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 768px)': {
      maxWidth: '100%',
    },
  })

  const MenuButton = styled.div({
    display: 'none',
    padding: 10,
    borderRadius: '50%',
    '&:hover': {
      backgroundColor: colors.alphas.white[100],
    },
    '@media (max-width: 768px)': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })

  const Logo = styled.div({
    color: colors.primary[500],
    fontFamily: 'Cinzel Decorative',
    fontSize: 22,
    padding: 10,
    marginRight: 20,
    '@media (max-width: 768px)': {
      fontSize: 18,
    },
  })

  const SearchContainer = styled.div({
    flexGrow: 1,
    margin: '0 20',
  })

  const Search = styled.div({
    backgroundColor: colors.greys.dark,
    padding: '5px 20px',
    borderRadius: 20,
    width: 350,
    '@media (max-width: 768px)': {
      display: 'none',
    },
  })

  const Ruleset = styled.div({
    margin: '0 10px',
    '@media (max-width: 768px)': {
      display: 'none',
    },
  })
  const Notifications = styled.div({
    margin: '0 10px',
    padding: '0 10px',
    display: 'flex',
    borderLeft: '1px solid ' + colors.greys.dark,
    borderRight: '1px solid ' + colors.greys.dark,
  })

  const NotificationButton = styled.div({
    padding: 10,
    borderRadius: 5,
    '&:hover': {
      backgroundColor: colors.alphas.white[100],
    },
  })

  const AccountSection = styled.div({
    margin: '0 20px',
  })

  const SubContainer = styled.div({
    display: 'flex',
    justifyContent: 'center',
    padding: 5,
    color: colors.greys.light,
    backgroundColor: colors.greys.dark,
    borderBottom: '1px solid',
    borderColor: colors.greys.dark,
    boxShadow: '0px 3px 3px 3px ' + colors.alphas.black[400],
  })

  const SubContent = styled.div({
    maxWidth: 1128,
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly',
  })

  const SubContentButton = styled.div({
    cursor: 'pointer',
    '&:hover': {
      color: colors.alphas.white[800],
    },
  })

  return (
    <Container>
      <MainContainer>
        <MainContent>
          <MenuButton>
            <LuMenu />
          </MenuButton>
          <Logo>Arcane Arsenal</Logo>
          <SearchContainer>
            <Search>Search Everything...</Search>
          </SearchContainer>
          <Ruleset>
            <Select
              options={[
                'Dungeons & Dragons 5e',
                'Pathfinder 6e',
                'The One Ring',
                'Starfinder',
                'Shadowrun',
              ]}
            />
          </Ruleset>
          <Notifications>
            <NotificationButton>
              <LuBell />
            </NotificationButton>
            <NotificationButton>
              <LuMessagesSquare />
            </NotificationButton>
          </Notifications>
          <AccountSection>{initials}</AccountSection>
        </MainContent>
      </MainContainer>
      <SubContainer>
        <SubContent>
          <SubContentButton>My Characters</SubContentButton>
          <SubContentButton>Community Characters</SubContentButton>
          <SubContentButton>Tools</SubContentButton>
        </SubContent>
      </SubContainer>
    </Container>
  )
}

export default TopBar
