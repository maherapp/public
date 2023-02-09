import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { MyGallery } from './MyGallery'

function App() {
  const [count, setCount] = useState(0)

  return <MyGallery />
}

export default App

