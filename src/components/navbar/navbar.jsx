import nimbus_logo from '../../images/Nimbus_Logo.png'
import arrowdown from '../../images/arrowdown.svg'
import iconclose from '../../images/icon-close.svg'
import iconmenu from '../../images/icon-menu.svg'

import { useState } from 'react';

function Navbar(){

    const [aboutsubmenu, setaboutsubmenu] = useState(false)
    const [servicesubmenu, setservicesubmenu] = useState(false)
    const [slideopen,setslideopen] = useState(false);



    function openslide(){
        if (slideopen == false){            
            setslideopen(true)
        }else(
            setslideopen(false)
        )
    }
    
    const handleaboutsubmenu = () =>{
        if(aboutsubmenu == false){
            setaboutsubmenu(true)
        }else{
            setaboutsubmenu(false)
        }

    }

    const handleservicesubmenu = () =>{
        if(servicesubmenu == false){
            setservicesubmenu(true)
        }else{
            setservicesubmenu(false)
        }
    }


    return(
        <div className = 'bg-[#e5efff] flex justify-between  px-12 xl:px-[140px] w-full h-[90px] items-center'>
            <img src={nimbus_logo} alt="Nimbus media logo" className = 'w-[100px] h-[65px]' />
            <nav className = {`absolute xl:static top-0 bg-[#e5efff] h-full w-[320px] xl:min-w-fit font-normal
             xl:font-medium       text-xl text-[#272d4e] font-sans transition-all duration-1000 ease-in-out ${slideopen? "left-0": '-left-[100%]' } `} >
                <ul className = 'flex flex-col xl:flex-row w-full xl:gap-14 xl:items-center h-full'>
                    <li className = 'cursor-pointer border-b-[1px] xl:border-b-[5px] xl:rounded-[4px] py-[20px] xl:p-0 pl-10 pr-7 border-[#16a4de]' >Home</li>
                    
                    <li className = 'dropdown cursor-pointer border-b-[1px] xl:border-b-[5px] xl:rounded-[4px] py-[20px]  xl:p-0 pl-10 pr-7 border-[#16a4de]'>
                        <span className = '' >About</span>
                        <img src={arrowdown} alt="Down arrow" className = 'inline-block w-[25px] float-right xl:float-none' 
                        onClick = {() => handleaboutsubmenu()} />
                        <ul className = {`dropdown-content -top-[100%]  absolute ${aboutsubmenu? 'relative top-[20px]':''}  text-lg xl:text-center transition-all ease-in-out duration-1000 `}
                        >
                            <li className = {`bg-[#16a4de] text-white rounded-sm mb-[2px] py-4 xl:px-11 ${aboutsubmenu? 'text-[#1e2341] bg-white w-[320px] -ml-10 mb-0 border-b-[1px] border-[#16a4de] pl-14 ':''}   `}>Our Network</li>
                            <li className = {`bg-[#16a4de] text-white rounded-sm mb-[2px] py-4 xl:px-11 ${aboutsubmenu? 'text-[#1e2341] bg-white w-[320px] -ml-10 mb-0 pl-14 q ':''}   `}>Full Team Profile</li>
                        </ul>
                    </li>

                    <li className = 'dropdown cursor-pointer border-b-[1px] xl:border-b-[5px] xl:rounded-[4px] py-[20px] xl:p-0 pl-10 pr-7 border-[#16a4de]'
                    
                     >
                        <span className = '' >Services</span>
                        <img src={arrowdown} alt="Down arrow" className = 'w-[25px] inline-block float-right xl:float-none'
                        onClick = {() => handleservicesubmenu()} />
                        <ul className = {`dropdown-content -top-[100%] absolute ${servicesubmenu? 'relative top-[20px]':''} text-lg xl:text-center transition-all ease-in-out duration-1000 `}>
                            <li className = {`bg-[#16a4de] text-white rounded-sm mb-[2px] py-4 xl:px-11 ${servicesubmenu? 'text-[#1e2341] bg-white w-[320px] -ml-10 mb-0 border-b-[1px] border-[#16a4de] pl-14 ':''}   `}>Billboard Advertising</li>
                            <li className = {`bg-[#16a4de] text-white rounded-sm mb-[2px] py-4 xl:px-11 ${servicesubmenu? 'text-[#1e2341] bg-white w-[320px] -ml-10 mb-0 border-b-[1px] border-[#16a4de] pl-14 ':''}   `}>Lamp Post Advertising</li>
                            <li className = {`bg-[#16a4de] text-white rounded-sm mb-[2px] py-4 xl:px-11 ${servicesubmenu? 'text-[#1e2341] bg-white w-[320px] -ml-10 mb-0 border-b-[1px] border-[#16a4de] pl-14 ':''}   `}>Shopping Mall Superstores</li>
                            <li className = {`bg-[#16a4de] text-white rounded-sm mb-[2px] py-4 xl:px-11 ${servicesubmenu? 'text-[#1e2341] bg-white w-[320px] -ml-10 mb-0 border-b-[1px] border-[#16a4de] pl-14 ':''}   `}>Transit Advertising</li>
                            <li className = {`bg-[#16a4de] text-white rounded-sm mb-[2px] py-4 xl:px-11 ${servicesubmenu? 'text-[#1e2341] bg-white w-[320px] -ml-10 mb-0 border-b-[1px] border-[#16a4de] pl-14 ':''}   `}>Guerilla Advertising</li>
                            <li className = {`bg-[#16a4de] text-white rounded-sm mb-[2px] py-4 xl:px-11 ${servicesubmenu? 'text-[#1e2341] bg-white w-[320px] -ml-10 mb-0  pl-14':''}   `}>Brand Activation</li>
                        </ul>
                    </li>
                    <li className = 'border-b-[1px] xl:border-b-[5px] xl:rounded-[4px] py-[20px] xl:p-0 pl-10 pr-7 border-[#16a4de]'>Nimbus Aid Project</li>
                    <li className = 'border-b-[1px] xl:border-b-[5px] xl:rounded-[4px] py-[20px] xl:p-0 pl-10 pr-7 border-[#16a4de]'>Gallery</li>
                    <li className = 'border-b-[1px] xl:border-b-[5px] xl:rounded-[4px] py-[20px] xl:p-0 pl-10 pr-7 border-[#16a4de]'>Blog</li>
                    <li className = 'border-b-[1px] xl:border-b-[5px] xl:rounded-[4px] py-[20px] xl:p-0 pl-10 pr-7 border-[#16a4de] '>Contact Us</li>
                </ul>
            </nav>
            <img src={slideopen?iconclose: iconmenu} alt="Menu and close icon" className= {` transition-all duration-500 ease-in-out fold:w-[25px] fold:h-[20px] phones:w-[30px]
             phones:h-[25px] md:w-[40px] md:h-[30px] self-center xl:hidden cursor-pointer  `} onClick = {()=> openslide()} />
        </div>
    )
}

export default Navbar;