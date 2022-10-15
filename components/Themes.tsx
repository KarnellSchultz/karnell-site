// @ts-ignore`
import { ThemeProvider } from 'styled-components'
import {
  DarkThemeProvider,
  useDarkState,
} from '../components/DarkThemeContext'

function Themes({ children }: any) {
  const Themer = () => {
    const { dark } = useDarkState()
    return (
      <>
        <ThemeProvider
          theme={dark ? themes.pinkDarkTheme : themes.lightTheme}>
          <div
            className={
              dark
                ? `dark-theme theme-body`
                : 'light-theme theme-body'
            }>
            {children}
          </div>
        </ThemeProvider>
      </>
    )
  }

  return (
    <DarkThemeProvider>
      <Themer />
    </DarkThemeProvider>
  )
}

const themes = {
  darkBlue: {
    colors: {
      primary: '#5c73ff',
      primaryHover: '#8899ff',
      pink: 'papayawhip',
      text: '#b3b9c5',
      textHighlight: '#fafafa',
      body: '#202020',
      darkBackground: '#252525',
      black: '#0e1111',
    },
  },

  lightTheme: {
    maxMobileSize: '576px',
    colors: {
      primary: 'palevioletred',
      primaryHover: '#EDB6C8',

      buttonText: '#FAFAFA',
      buttonTextHover: '#DB7093',
      buttonBackground: 'palevioletred',

      text: '#454545',
      textHighlight: '#FFF',
      headerText: '#111',

      body: '#ffffff',
      body2: '#F5F5F5',
      body2Hover: '#DCDCDC',
      codeBackground: '#3A3A3A',
    },
  },
  pinkDarkTheme: {
    maxMobileSize: '576px',
    colors: {
      primary: '#E28DA9',
      primaryHover: '#EDB6C8',

      buttonText: '#FAFAFA',
      buttonTextHover: '#DB7093',
      buttonBackground: '#E28DA9',

      text: '#b3b9c5',
      textHighlight: '#FFF',
      headerText: '#cecece',

      body: '#202020',
      body2: '#252525',
      body2Hover: '#0e1111',
      codeBackground: '#3A3A3A',
    },
  },
}

export { Themes }
