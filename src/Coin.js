import React from 'react'
import './Coin.css';


const Coin = ({name,price,symbol,icon,marketcap,rank}) => {
    
    
  return (
    <div className='coin-container'>
        <div className='logo-div' >
            <img className='coin-logo' src={icon} alt='logo'></img>
            <h3 style={{color:"#635985"}}>{symbol}</h3>
        </div>
        <div className='coin-details'>
            
            <div className='coin-title-div'><h3>{name}</h3></div>
            <div className='coin-small-div'><h6>Price</h6><h6>{price}</h6></div>
            <div className='coin-small-div'><h6>Market Cap</h6><h6>{marketcap}</h6></div>
            <div className='coin-small-div'><h6>Rank</h6><h6>{rank}</h6></div>
            
            
        </div>
        
      
    </div>
  )
}

export default Coin
