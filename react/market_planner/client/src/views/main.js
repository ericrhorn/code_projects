import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MarketInfo from '../components/market_info';
import Header from './header';


const Main = () => {
    
    return (
        <div>
            <Header style={{ backgroundColor: 'transparent' }}/>
            <body>
                <MarketInfo />
            </body>
            
        </div>
    )
}
export default Main;