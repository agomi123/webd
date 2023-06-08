import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../assests/award_bg.png';
import a1 from '../assests/castingLogo.png';
import a2 from '../assests/girlClap.png';
import '../App.css'
const Screen1 = () => {
  const navigate = useNavigate();

  // const doStuff = event => navigate('/screen2', { replace: true });
  //  setTimeout(()=>{
  //    doStuff();
  //  },120000);
  return (
    <>
    <h1>dfgkgh</h1>
     <img src={logo} className='bg' alt=''></img>
     <img src={a1}  className='rm' alt=''></img>
     <img src={a2}  className='bk' alt=''></img>
    </> 
  )
}

export default Screen1
