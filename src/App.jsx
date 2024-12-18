import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Services from './pages/services'
import HeroSection from './pages/Herosection'
import WhatWeOffer from './pages/Offer'
import Vajra from './pages/Vajra'
import Team from './pages/Team'
import ContactPages from './pages/ContactPages'
import Advisors from './pages/Advisors'
import Operation from './pages/Operation'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home></Home>
    <Services></Services>
    <HeroSection></HeroSection>
    <WhatWeOffer></WhatWeOffer>
    <Operation></Operation>
    <Vajra />
    <Team></Team>
    <Advisors></Advisors>
    <ContactPages></ContactPages>
    <PrivacyPolicy></PrivacyPolicy>

    </>
  )
}

export default App
