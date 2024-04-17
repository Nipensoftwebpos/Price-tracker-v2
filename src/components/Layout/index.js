import React, { useEffect, useState } from 'react'
import Header from '../common/Header/Header'
import Siderbar from '../common/Sidebar/Siderbar'
import './layout.scss'
const Layout = ({ children }) => {
    const [isActive, setIsActive] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const checkIfMobile = () => {
        const mobileMediaQuery = window.matchMedia('(max-width: 1440px)');
        setIsMobile(mobileMediaQuery.matches);
      };
  
      checkIfMobile(); // Check initially
      window.addEventListener('resize', checkIfMobile); // Listen for resize events
  
      return () => {
        window.removeEventListener('resize', checkIfMobile); // Clean up the listener
      };
    }, []);
    return (
        <div>
            <div className='grid-layout'>
                <div className='header'>
                    <Header isActive={isActive} setIsActive={setIsActive} isMobile={isMobile} />
                </div>
                <div className='sidebar-content'>
                    <Siderbar isActive={isActive} isMobile={isMobile}/>
                </div>
                <div className='main-content'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout