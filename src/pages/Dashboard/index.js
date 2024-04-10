import React, { useState } from 'react'
import './dashboard.scss'

import DashboardComp from '../../components/DashboardComp'
import Layout from '../../components/Layout'
function Dashboard() {

    return (
        <div>
            <Layout>
                <DashboardComp />
            </Layout>
        </div>
    )
}

export default Dashboard