import './App.css'
import Card from './compenent/Card'
import CreatePost from './compenent/CreatePost'
import Form from './compenent/Form'
import SignOut from './compenent/SignOut'
import Home from './compenent/Home'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Navbar from './compenent/Navbar'
import SigninForm from './compenent/SigninForm'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/login' element={<Form />} />
          <Route path='/signin' element={<SigninForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
