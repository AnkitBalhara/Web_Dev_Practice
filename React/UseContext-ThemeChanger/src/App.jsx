
import { ThemeProvider } from './context/ThemeContext'
import ToggleThemed from './ToggleThemed'

function App() {

  return (
    <ThemeProvider>
      <ToggleThemed/>  
    </ThemeProvider>
  )
}

export default App
