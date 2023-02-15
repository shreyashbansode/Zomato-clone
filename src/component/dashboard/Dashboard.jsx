import React from 'react'
import Header from '../Header/Header'
import Collection from "../Collection/Collection"
import Location from "../Locations/Locations"
import "./dashboard.css"
import AppContent from '../getApp/AppContent'
import Footer from '../Footer/Footer'

const Dashboard = () => {

    return (

        <>
            <div className="Dashboard">

                <Header/>
                <Collection/>
                <Location/>
                <AppContent/>
                <Footer/>
            </div>

        </>
    )
}

export default Dashboard