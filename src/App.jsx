
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header/Header'
import Profile from './components/Profile'
import Project from './components/Project/Project'
import Skills from './components/Skills'
import { useEffect } from 'react'
import { thunkFunction } from './store/Action/actions'
function App() {
  const dispatch = useDispatch()
const data = useSelector((state) => state.textData)
console.log(data)
const darkMode = useSelector((state) => state.darkMode)
useEffect(() => {
  dispatch(thunkFunction())
},[])


if(data===null) return(<div className="loader">
  <div className="box box0">
    <div></div>
  </div>
  <div className="box box1">
    <div></div>
  </div>
  <div className="box box2">
    <div></div>
  </div>
  <div className="box box3">
    <div></div>
  </div>
  <div className="box box4">
    <div></div>
  </div>
  <div className="box box5">
    <div></div>
  </div>
  <div className="box box6">
    <div></div>
  </div>
  <div className="box box7">
    <div></div>
  </div>
  <div className="ground">
    <div></div>
  </div>
</div>
)
  return (
    <>
    <div className={darkMode ? "dark" : ""}>
     <Header />
     <Skills />
     <Profile />
     <Project />
     <Footer />
     </div>
     <ToastContainer />
    </>
  )
}

export default App
