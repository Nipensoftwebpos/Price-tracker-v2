import React, { useState } from 'react'
import Header from '../common/Header/Header'
import Siderbar from '../common/Sidebar/Siderbar'
import './layout.scss'
const Layout = ({ children }) => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div>
            <div className='grid-layout'>
                <div className='header'>
                    <Header isActive={isActive} setIsActive={setIsActive} />
                </div>
                <div className='sidebar-content'>
                    <Siderbar isActive={isActive} />
                </div>
                <div className='main-content'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout