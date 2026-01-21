import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [gypsyMessage, setGypsyMessage] = useState({})

  useEffect(()=>{
    (async function(){
      try {
        const gotGypsyMessageJson = await fetch('https://geolocation-backend.vercel.app/hello')
        console.log('gotGypsyMessageJson', gotGypsyMessageJson)
        const gotGypsyMessage = await gotGypsyMessageJson.json()
        console.log('gotGypsyMessage', gotGypsyMessage)
        setGypsyMessage(gotGypsyMessage)
      } catch (error) {
        console.warn(error)
      }
    })()
  }, [])

  const handleLatLongClick = async (e) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async function success(position){
            const {latitude, longitude} = position.coords /*
            const gotDataJson = await fetch('https://xxx.vercel.app/geolocation&#39;, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({latitude, longitude})
            }) */

        }, console.warn)
    }
  }  

  return (
    <>
      <h1>Geolocation</h1>
      <div className="card">
        <button onClick={handleLatLongClick}>
          Store geolocation
        </button>
        <p>
          <ol>
            <li>Latitude: {"todo"}</li>
            <li>Longitude: {"todo"}</li>
          </ol>
        </p>
      </div>

      <div className='card'>
        <p>Gypsy message: {gypsyMessage?.message}</p>
      </div>
    </>
  )
}

export default App
