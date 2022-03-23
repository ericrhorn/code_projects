import React, { useEffect, useState } from "react";
import "../style.css";
import axios from "axios";


const TableRow = ({rowData, handleChange}) => {

    const [stockData, setStockData] = useState([]); 

    useEffect(() => {
        axios
            .get('https://yh-finance.p.rapidapi.com/stock/v2/get-summary', {
                headers: {
                    'x-rapidapi-host': 'yh-finance.p.rapidapi.com',
                    'x-rapidapi-key': '1b1c044ecdmsh43350913208335ep13f42djsn66d781d4af68'
                }
            })
            .then((response) => {
                setStockData(response.data.results);
            })
            .catch((error) => {
            console.log(error);
            });
    }, []);

// const options = {
//   method: 'GET',
//   url: 'https://yh-finance.p.rapidapi.com/stock/v2/get-summary',
//   params: {symbol: 'T', region: 'US'},
//   headers: {
//     'x-rapidapi-host': 'yh-finance.p.rapidapi.com',
//     'x-rapidapi-key': '1b1c044ecdmsh43350913208335ep13f42djsn66d781d4af68'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

    return(
        rowData.map((data, idx) => {
            const {
                ticker,
                ammountOfShares,
                currentPrice,
                weekHigh,
                weekLow,
                dividendPerShare,
                dividendPerQuarter,
                dividendPerYear,
                // action,
            } = data;
            

        //     <div className="App">
        //     {pokemon.map((pokemon, index) => (
        //       <div key={index}>{pokemon.name}</div>
        //     ))}
        //   </div>


            return (
                <div>
                    {stockData.map((stockData, index) => (
                            <select>
                                <option key={index}>Ticker {stockData.symbol}</option>
                            </select>
                        ))}
                </div>
                // <tr key={idx}>
                //     <td value={ticker} name ="ticker">
                //         {stockData.map((stockData, index) => (
                //             <select>
                //                 <option key={index}>Ticker {stockData.ticker}</option>
                //             </select>
                //         ))}
                        
                //     </td>
                //     <td value={ammountOfShares} name="ammountOfShares">
                //         <form>
                //             <label for="ammountOfShares"></label>
                //             <input type="text" id="ammountOfShares" name="ammountOfShares"/>
                //         </form>
                //     </td>
                //     <td value={currentPrice} name ="currentPrice"></td>
                //     <td value={weekHigh} name="weekHigh"></td>
                //     <td value={weekLow} name="weekLow"></td>
                //     <td value={dividendPerShare} name="dividendPerShare"></td>
                //     <td value={dividendPerQuarter} name="dividendPerQuarter"></td>
                //     <td value={dividendPerYear} name="dividendPerYear"></td>
                //     {/* <td value={action} name = "action">
                //         <button>delete</button>
                //         <button>edit</button>
                //     </td> */}
                // </tr>
            )
        })
    )
}

export default TableRow;