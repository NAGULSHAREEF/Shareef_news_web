import './App.css'
import PagesSwipe from './PagesSwipe'
import Search from './Search'
import Story from './Story'
// import { useContext } from 'react'
// import { AppProvider } from './Context'
import { useGlobalContext } from './Context'

function App() {
  const data = useGlobalContext;
  return (
    <>
      <h1>Hello welcome to Shareef_Tech_News app {data}</h1>
      <Search />
      <PagesSwipe />
      <Story />
    </>
  )
}

export default App
