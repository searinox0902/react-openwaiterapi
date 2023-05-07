import { useState, useEffect } from 'react'


/* images import */ 

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import tailwindLogo from './assets/tailwindcss.webp'



import './App.css'

//components 

import Header from './components/header';
import Form from './components/form';
import Error from './components/error';
import Result from './components/result';
import Footer from './components/footer';

function App() {

  const [dataForm, setDataForm] = useState({
    city: 'taraza',
    country: 'CO',
  });

  const { city, country } = dataForm;

  const [weather, setWeather] = useState({
    name: '',
    weather_desc: '',
    temp: '',
    temp_max: '',
    temp_min: '',
    date: '',
  })

  const [error, setError] = useState(false);


  const submitResquest = async () => {

    const API = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&lang=es&appid=cc41c18e04296d1d9fdac51add5e106b`;

    const response = await fetch(API);
    const result = await response.json();
    if (response.status === 200) {
      
      const KELVIN = 273.15;

     
      
      let dt = new Date(result.dt * 1000);
    
      const date = dt.toLocaleString("es-ES");

      console.log(date)
      
      setWeather({
        ...weather,
        name: result.name,
        main : result.weather[0].main,
        id: result.weather[0].id,
        weather_desc: result.weather[0].description,
        temp: parseFloat(result.main.temp - KELVIN, 10).toFixed(1),
        temp_max: parseFloat(result.main.temp_max - KELVIN, 10).toFixed(1),
        temp_min: parseFloat(result.main.temp_min - KELVIN, 10).toFixed(1),
        date: date,
      })

      setError(false);
      return
    }

    setError(true);

  }



  useEffect(() => {
    submitResquest();
  }, [dataForm])






  return (
    <>
      <div className='w-full flex  justify-between items-center flex-col space-y-8 min-h-screen '>

        <Header />

        <div className='w-full md:w-1/3 px-3'>
          
          <div className='min-h-[180px]'>
            { 
              error 
              ? 
              (  <Error message={'Nombre de ciudad o país no encontrados'} />) 
              : 
                <Result weather={weather} setWeather={setWeather} />
            }
          </div>
          
              
          <Form setWeather={setWeather} weather={weather} setDataForm={setDataForm} dataForm={dataForm} />

        </div>

        {/* dev tech description and dependences*/}

        <Footer />
      </div>
    </>
  )
}

export default App
