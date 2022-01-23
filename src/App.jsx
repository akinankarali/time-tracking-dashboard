import { useState } from 'react'
import './styles/app.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <main>
        <p>main</p>
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </div>
  )
}

export default App
