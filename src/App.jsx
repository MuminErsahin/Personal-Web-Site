
import { useSelector } from 'react-redux'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header/Header'
import Profile from './components/Profile'
import Project from './components/Project/Project'
import Skills from './components/Skills'
function App() {
const data = useSelector((state) => state.textData)
console.log(data)
const darkMode = useSelector((state) => state.darkMode)
  return (
    <>
    <div className={darkMode ? "dark" : ""}>
     <Header />
     <Skills />
     <Profile />
     <Project />
     <Footer />
     </div>
    </>
  )
}

export default App
