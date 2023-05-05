import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//components 

import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full flex justify-center px-3'>

        <div className='w-full md:w-1/3'>
          <Header/>

          {/* waither result consult */}
          <h2 className='card__city-name'>Tarazá</h2>
          <div className='card-info flex'>
            <div className='card__content-info'>
            <p className='card__date'>Jueves, 4 de mayo</p>
              <p className='card__temp'>32c</p>
              <p className='card__temp-max'>Temp Máx: 38c</p>
              <p className='card__temp-min'>Temp Mín: 28c</p>
            </div>
            <div className='card__content-image'>
              <figure>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Weather-overcast-rare-showers.svg/1200px-Weather-overcast-rare-showers.svg.png' alt='algo'></img>
              </figure>
            </div>
          </div>

          {/* form */}

        

           {/* dev tech description and dependences*/}
        </div>
        
      </div>
    
    </>
  )
}

export default App
