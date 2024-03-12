import React, {   useEffect, useState } from 'react'
import Navbar from '../../Navbar/Navbar'
import SecondNav from '../../Navbar/SecondNav'
import hoverFunction from '../../Navbar/hoverFunction'


const NavbarSwitch = () => {
const[scrollPosition,changeScrollPosition]=useState(0)
window.addEventListener('scroll',()=>{changeScrollPosition(window.scrollY)})
useEffect(()=>{
    hoverFunction()
},[scrollPosition])
if(scrollPosition>1180){
    return (
        <SecondNav secondNavSwitched='secondNavSwitched' searchBar=''/>
        )}
        else{
    return <Navbar area='Indore' address='Silicon City, Rau, Madhya Pradesh 452012, India'/>
  }
}

export default NavbarSwitch
