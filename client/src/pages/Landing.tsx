import styled from '@emotion/styled'
import gsap from 'gsap'
import { useState } from 'react'
import { IoMdCheckmarkCircleOutline, IoMdLogIn } from 'react-icons/io'
import Login from '../components/Landing/Login'
import Register from '../components/Landing/Register'
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

const Content = styled.div({
  maxWidth: 1128,
  margin: '30px auto',
  padding: '10px 40px',
  display: 'flex',
  height: '100%',
  maxHeight: 800,
  overflow: 'auto',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    padding: 10,
    margin: '40px auto',
    maxHeight: 'calc(100vh - 50px)',
  },
})

const TextContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '50%',
  padding: '20px 0',
  marginRight: 10,
  button: {
    marginTop: 20,
    width: 140,
    textAlign: 'center',
  },
  '@media (max-width: 768px)': {
    width: '100%',
    padding: 10,
    margin: '0 0 40px 0',
  },
})

const TextHeading = styled.h1({
  fontSize: 38,
  margin: '0 0 40px',
  span: {
    fontSize: 42,
    color: colors.primary[500],
    fontFamily: 'Cinzel Decorative',
  },
  '@media (max-width: 768px)': {
    fontSize: 32,
    textAlign: 'center',
    margin: '0 0 20px',
    span: {
      fontSize: 36,
    },
  },
})

const TextBlock = styled.p({
  fontSize: 16,
  margin: '0 0 20px',
  color: colors.note[500],
  span: {
    color: colors.primary[400],
  },
  '@media (max-width: 768px)': {
    fontSize: 20,
    margin: '0 0 20px',
  },
})

const TextList = styled.ul({
  fontSize: 14,
  margin: '0 0 20px',
  li: {
    color: colors.primary[300],
    marginLeft: 20,
    marginBottom: 5,
  },
  '@media (max-width: 768px)': {
    ul: {
      fontSize: 18,
      margin: '0 0 20px',
      li: {
        marginLeft: 20,
        marginBottom: 5,
      },
    },
  },
})

const StartedButton = styled.button({
  backgroundColor: colors.greys.dark,
  padding: 12,
  borderRadius: 12,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: colors.primary[600],
    fontWeight: 600,
  },
})

const FormContent = styled.div({
  backgroundColor: colors.paper,
  color: colors.text.light,
  padding: 8,
  marginLeft: 10,
  marginTop: 50,
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 10,
  '@media (max-width: 768px)': {
    width: '100%',
    margin: 0,
  },
})

const FormHeading = styled.div({
  display: 'flex',
})

type SwitchButtonProps = {
  login: boolean
  set: boolean
}

const FormSwitchButton = styled.button<SwitchButtonProps>((props) => ({
  display: 'flex',
  justifyContent: 'center',
  flexGrow: 1,
  fontSize: 18,
  padding: 10,
  margin: 5,
  backgroundColor: colors.greys.dark,
  borderRadius: 10,
  textAlign: 'center',
  border: '1px solid ',
  borderColor: props.login === props.set ? colors.primary[500] : colors.greys.dark,
  color: props.login === props.set ? colors.text.light : colors.text.medium,
  transition: 'all 0.3s ease-in-out',
  svg: {
    marginRight: 10,
  },
  '&:hover': {
    color: colors.primary[500],
  },
}))

const Landing = () => {
  const [login, setLogin] = useState<boolean>(false)

  const handleLoginSwitch = () => {
    if (login) {
      gsap.to('.login-container', {
        autoAlpha: 0,
        rotateY: 90,
        duration: 0.3,
        onComplete: () => setLogin(false),
      })
    }
  }

  const handleRegisterSwitch = () => {
    if (!login) {
      gsap.to('.register-container', {
        autoAlpha: 0,
        rotateY: 90,
        duration: 0.3,
        onComplete: () => setLogin(true),
      })
    }
  }

  return (
    <Container className='content'>
      <Content>
        <TextContent>
          <TextHeading>
            Welcome to the <span>Arcane Arsenal</span>
          </TextHeading>
          <TextBlock>
            The Arcane Arsenal is a table top gamers go to resource for character building across{' '}
            <span>five</span> different TTRPG rulesets. Core rules as well as some expansions of:{' '}
          </TextBlock>

          <TextList>
            <li>Dungeons and Dragons 5e</li>
            <li>Pathfinder 2e</li>
            <li>The One Ring RPG</li>
            <li>Starfinder</li>
            <li>Shadowrun 6e</li>
          </TextList>
          <TextBlock>
            are all incorporated into the character builders that Arcane Arsenal provides. Create an
            account, pick a ruleset, then let the story BEGIN!!!!
          </TextBlock>
          <StartedButton onClick={handleLoginSwitch}>Get Started</StartedButton>
        </TextContent>
        <FormContent>
          <FormHeading>
            <FormSwitchButton
              login={login}
              set={true}
              onClick={handleRegisterSwitch}>
              <IoMdLogIn /> Login
            </FormSwitchButton>
            <FormSwitchButton
              login={login}
              set={false}
              onClick={handleLoginSwitch}>
              <IoMdCheckmarkCircleOutline /> Register
            </FormSwitchButton>
          </FormHeading>
          {login ? <Login click={handleLoginSwitch} /> : <Register click={handleRegisterSwitch} />}
        </FormContent>
      </Content>
    </Container>
  )
}

export default Landing
