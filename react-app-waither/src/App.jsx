import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Aplicación de Clima {count}</h1>
     <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores error quidem et suscipit, magnam adipisci earum ratione quasi praesentium deleniti incidunt! Ullam, itaque quam explicabo exercitationem fuga doloremque soluta!
     </p>
    </>
  )
}

export default App
