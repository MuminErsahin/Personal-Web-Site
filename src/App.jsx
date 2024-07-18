
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
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


if(data===null) return <div>Loading</div>
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
