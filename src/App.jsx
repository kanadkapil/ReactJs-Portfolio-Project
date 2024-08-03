import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
import Carousel from './components/Carousel'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Carousel />

      {/* card section  */}
      <div className='flex justify-around my-10'>
        <div className="container mx-auto">
          <div class="grid sm:grid-cols-3 gap-4 my-10 mx-10">
            <div class="min-h-[100px] flex justify-center">
              <Card />
            </div>
            <div class="min-h-[100px] flex justify-center">
              <Card />
            </div>
            <div class="min-h-[100px] flex justify-center">
              <Card />
            </div>
          </div>
        </div>
      </div>

      {/* footer section  */}
      <Footer />
    </>
  )
}

export default App
