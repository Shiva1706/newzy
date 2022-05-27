import React from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const App=()=>{
  const apiKey = process.env.REACT_APP_NEWS_API;
  
    return (
      <div style={{backgroundImage: "linear-gradient(to right bottom, #6a0261, #5d0162, #4f0262, #3f0462, #2d0761, #520061, #700060, #89005c, #be2349, #dc5b2b, #de9600, #c4d008)", height:"100%"}}>
      <Router>
      
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News apiKey={apiKey} key='general' pageSize={9} country="in" category='general' />} />
          <Route exact path="/business" element={<News apiKey={ apiKey} key='business' pageSize={9} country="in" category='business' />} />
          <Route exact path="/entertainment" element={<News apiKey={ apiKey} key='entertainment' pageSize={9} country="in" category='entertainment' />} />
          <Route exact path="/health" element={<News apiKey={ apiKey} key='health' pageSize={9} country="in" category='health' />} />
          <Route exact path="/science" element={<News apiKey={ apiKey} key='science' pageSize={9} country="in" category='science' />} />
          <Route exact path="/sports" element={<News apiKey={ apiKey} key='sports' pageSize={9} country="in" category='sports' />} />
          <Route exact path="/technology" element={<News apiKey={ apiKey} key='technology' pageSize={9} country="in" category='technology' />} />
        </Routes>
      </Router>
      </div>
    )
  }


  export default App
