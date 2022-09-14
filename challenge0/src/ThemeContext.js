import React, { useContext, useState } from 'react'

const ThemeContext = React.createContext()

/* Custom Hook */
export function useTheme() {
    return useContext(ThemeContext)
}

export function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(true)

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return(
        <ThemeContext.Provider value={[darkTheme, toggleTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}