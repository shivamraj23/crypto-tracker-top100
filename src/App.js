import { useEffect, useState } from 'react';
import './App.css';
import Coin from './Coin';
import Axios from "axios";

function App() {
  const [coinList,setCoinList]=useState([]);
  const [searchCoin,setSearchCoin]=useState("");

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => {
        setCoinList(response.data.coins);
      }
    );
  }, []);
  console.log(coinList)

  const filteredCoins = coinList.filter((coin) => {
    return coin.name.toLowerCase().includes(searchCoin.toLowerCase());
  });

  document.title='Top 100 Cryptos';


  return (
    <div className="App">

      <div className='allcoins'>
        {
          coinList.map((coin)=>{
            return(
              <Coin name={coin.name} price={coin.price} symbol={coin.symbol} icon={coin.icon}
                marketcap={coin.marketCap} rank={coin.rank}
              />
            );
          })
        }
      </div>

      <div className='searchcoin'>
        <div className='searchbox'>
          <input style={{color:"#443C68"}} type='text' placeholder='search coin from top 100' onChange={(event)=>{setSearchCoin(event.target.value)}}/>
        </div>
        <div className='displaycoin'>
          {filteredCoins.slice(0,10).map((coin)=>{
            return(
              <Coin name={coin.name} price={coin.price} symbol={coin.symbol} icon={coin.icon}
                marketcap={coin.marketCap} rank={coin.rank}
              />
            );
          })}
        </div>
      </div>
      
    </div>
  );
}

export default App;
