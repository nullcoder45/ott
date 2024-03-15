import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navigation from './navigation.jsx'
import Carosuel from './carosuel.jsx'
import Value from './value.jsx'
import Footer from './footer.jsx'
import Hero from './hero.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="text-2xl bg-black text-white p-7">
    <Navigation/>
    <Hero/>
    <Value/>
    <Carosuel/>
    <Footer/>
    </div>
  </React.StrictMode>,
)
