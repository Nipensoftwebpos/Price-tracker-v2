import React from 'react'
import './dashboard.scss'

import DashboardComp from '../../components/DashboardComp'
import Layout from '../../components/Layout'
function DashboardLayout() {

    return (
        <Layout>
           <DashboardComp/>
        </Layout>
    )
}

export default DashboardLayout