import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Login from './Components/Login'
import AddProduct from './Components/AddProduct'

function App() {
  const [eComm, setEcomm] = useState([]);
  const [count, setCount] = useState(0)


  function incCount(){
    setCount(count+1)
  }
  useEffect(() => {
    async function fetchData() {
      let res = await fetch('http://localhost:3000/data')
      let data = await res.json();
      setEcomm(data);
      console.log(data);
    }
    fetchData();
  }, [])

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home data={eComm} />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <button onClick={incCount}>
        +
      </button>
    </>
  )
}

export default App
