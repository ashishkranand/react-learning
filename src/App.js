import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import Footer from './components/Footer'
import About from './components/About'
import Alert from './components/Alert'
import Error from './components/Error'
import { useState } from 'react'

function App () {
  const [mode, setMode] = useState('light') //Whether dark mode is enable or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode enable ', 'success')
      document.title = 'Textutils - Dark mode'
      // setInterval(()=>{
      //   document.title="Textutils is amazing";
      // },1000)
      // setInterval(()=>{
      //   document.title="Textutils in danger";
      // },1500)
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Dark mode disable ', 'primary')
      document.title = 'Textutils - Light mode'
    }
  }

  return (
    <BrowserRouter>
      <Navbar
        title='LMS'
        abouttext='About'
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className='container my-3'>
        <Routes>
          <Route exact path='/about' element={<About />} />
          <Route
            exact
            path='/'
            element={
              <Textform
                showAlert={showAlert}
                heading='Enter the text to analyze below'
                mode={mode}
              />
            }
          />
          <Route path='*' element={<Error />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
