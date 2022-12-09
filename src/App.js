import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./routes/Home";
import SignIn from "./routes/Signin";
import SignUp from "./routes/Signup";
import Footer from "./components/Footer";
import { io } from "socket.io-client";

function App() {

  const [symboles,setSymboles] = useState({})
 
  React.useEffect(()=>{
    const socket = io('http://localhost:5000')
    socket.on('connect', ()=>console.log(socket.id))
    socket.on('connect_error', ()=>{
      setTimeout(()=>socket.connect(),5000)
    })
    socket.on('tickers', (data)=>{
      const dic = data?.reduce((initialTicker,ticker)=>({...initialTicker,[ticker.symbol]:ticker}),{})
      setSymboles((oldDic)=>({...oldDic,...dic}))
      
    })
   socket.on('disconnect',()=>console.log('server disconnected'))
 
 },[])

  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home symboles={symboles} itemsPerPage={10} />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
