import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header'
import ButtonsSection from './components/ButtonsSection'
import DescriptionSection from './components/DescriptionSection'

function App() {

  return (
    <>
      <Header />
      <ButtonsSection />
      <DescriptionSection />
    </>
  )
}

export default App
