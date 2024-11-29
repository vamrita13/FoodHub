import React from 'react'
import Navbar from './Components/Navbar'
import Hiw from './Components/Hiw';
import Hia from './Components/Hta';
import FAQ from './Components/FAQ';
import  Footer  from './Components/Footer';
import SignUp from './Components/SignUp';
import Login from './Components/Login';

const App=()=> {
  return (
    <>
      <Navbar/>
      {/* <Login/> */}
      <SignUp/>
      <Hiw/>
      <Hia/>
     <FAQ/>
    <Footer/>  
     </>
  )
}




export default App;
