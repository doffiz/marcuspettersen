import React from 'react';
import { About, Header, Projects } from './containers'
import { Navbar, Skills } from './components'
import './App.css';
const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
            <Navbar />           
            <Header />
            <Skills />
            </div>
            <About />
            {/* <Projects /> */}

        </div>
    )
}

export default App

