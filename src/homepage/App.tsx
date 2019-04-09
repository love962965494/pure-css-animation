import React, { useState, useContext } from 'react'
import './App.scss'
import { Link } from 'react-router-dom'
import RouteConfig from '../routes/config'

export const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: (prevTheme: string) => (prevTheme === 'light' ? 'dark' : 'light')
})

export default function App() {
  const { theme: defaultTheme, toggleTheme } = useContext(ThemeContext)
  const [theme, setTheme] = useState(defaultTheme)

  const handleToggleBtnClick = () => {
    setTheme(toggleTheme(theme))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" data-theme={theme}>
        <div className="container">
          <header className={'App__title ' + theme}>
            <h1>Interesting Css Animations</h1>
            <button
              type="button"
              className={'App__toggleBtn ' + theme}
              onClick={handleToggleBtnClick}
              data-role="toggle theme"
            />
          </header>
          <main className="App__content">
            {RouteConfig.map((route) => (
              <section key={route.id} className="App__example">
                <header>
                  <h2>
                    <Link to={route.path} target="_blank">
                      {route.title}
                    </Link>
                  </h2>
                </header>
                <div className="App__exampleInfo">
                  <img src={route.preview} alt="" />
                  <p>{route.description}</p>
                </div>
              </section>
            ))}
          </main>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}
