import { useState } from 'react'
import './styles/app.css'
import Card from './components/Card'
import Widget from './components/Widget'
import WorkSvg from '../images/icon-work.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <main>
        <Card title="John Doe" profilePic="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" />
        <Widget title="John Doe" current="10" previous="5" image={WorkSvg} />
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </div>
  )
}

export default App
