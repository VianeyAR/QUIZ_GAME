import React, { useState } from 'react'
import HomeQuiz from './pages/HomeQuiz'
import Captura from './pages/Captura'
import Juego from './pages/Juego'
import {Route, Routes} from 'react-router'





const App = () => {
  const [estado, setEstado] = useState()
  console.log(estado);
  if (!estado) {
    return <HomeQuiz setEstado={setEstado}/>
    
  }
  return (
    <>
      
      <Routes>
        <Route path='/Captura' element={<Captura/>} />
        <Route path='/Juego' element={<Juego/>} />
      </Routes>

    </>
  )
}

export default App