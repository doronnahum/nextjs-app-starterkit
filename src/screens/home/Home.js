import React, { Component } from 'react'
import Header from 'src/components/layout/Header'
import Footer from 'src/components/layout/Footer'
import Swiper from 'src/components/swiper/Swiper'
import Tables from 'src/components/tables/Tables'
import Logo from 'src/components/Logo'
import './homeStyle.scss'
export default class Home extends Component {
    render() {
        return (
            <div className='home-screen'>
                {/* <Header /> */}
                <div className='home-screen__body'>
                    <Logo logoContainerStyle={{ position: 'absolute', top: 20, left: 20, zIndex: 1 }} />
                    <Swiper className='swiper-container' />
                    <Tables className='tables' />
                    <div style={{
                        height: 100,
                        backgroundColor: 'lightblue',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex'
                    }}>
                        start save today
                    </div>
                </div>
                <Footer />
            </div >
        )
    }
}
