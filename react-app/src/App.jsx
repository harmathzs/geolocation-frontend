import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
    </>
  )
}

export default App
