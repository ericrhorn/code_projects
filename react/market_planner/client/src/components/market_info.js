import React, { useEffect, useState } from "react";
import "../style.css";
import TableRow from "./tableRow";
import axios from "axios";


const MarketInfo = () => {

    // const [rowData, setRowData] = useState([])

    // const addRow = () => {
    //     const rowInput={
    //         ticker: "",
    //         ammountOfShares: "",
    //         currentPrice: "",
    //         weekHigh: "",
    //         weekLow: "",
    //         dividendPerShare: "",
    //         dividendPerQuarter:"",
    //         dividendPerYear: "",
    //         action: "",
    //     }
    //     setRowData([...rowData, rowInput])
    // }

    // const deleteRow = (e) => {
    //     const row = [...rowData];
    //     row.splice(e, 1);
    //     setRowData(row);
    // }

    // const handleChange = (e) => {
    //     let newRowData = {...rowData};
    //     newRowData[e.target.name] = e.target.value;
    //     console.log(e.target.name, e.target.value);
    //     setRowData(newRowData);
    // };

    const [stockData, setStockData] = useState([]); 

    // useEffect(() => {
    //     axios
    //         .get('https://yh-finance.p.rapidapi.com/stock/v2/get-summary',{
    //             params: {symbol: 'AMRN', region: 'US'},
    //             headers: {
    //                 'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
    //                 'X-RapidAPI-Key': '1b1c044ecdmsh43350913208335ep13f42djsn66d781d4af68',
    //         }})
    //         .then((response) => {
    //             setStockData(response.data);
    //         })
    //         .catch((error) => {
    //         console.log(error);
    //         });
    // }, []);

    const options = {
        method: 'GET',
        url: 'https://yh-finance.p.rapidapi.com/stock/v2/get-summary?limit=807',
        headers: {
          'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
          'X-RapidAPI-Key': '1b1c044ecdmsh43350913208335ep13f42djsn66d781d4af68'
        }
      };
      
      axios.request(options).then(function (response) {
          setStockData(response.data.results)
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
      axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then((response) => {
          setPokemon(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);


    return(

        <div>
            <div>
                <select>
                    {stockData.map((stockData, index) => (
                        <option key={index}>{stockData.symbol}</option>
                ))}
                </select>
            </div>
            <div>
                <select>
                    {pokemon.map((pokemon, index) => (
                        <option key={index}>{pokemon.name}</option>
                    ))}
                </select>
            </div>
        </div>
        
        // <div>
        //     <div class="title">
        //         <h1>Check Your Investments!</h1>
        //     </div>
        //     <div class ="submit">
        //         <button>Run Info</button>
        //     </div>
            
        //     <div>
        //     <table class="table table-bordered">
        //         <thead>
        //             <tr>
        //                 <th>Ticker</th>
        //                 <th>Ammount of Shares</th>
        //                 <th>Current Price</th>
        //                 <th>52 Week High</th>
        //                 <th>52 Weel Low</th>
        //                 <th>Dividend Per Share</th>
        //                 <th>Dividend Per Quarter</th>
        //                 <th>Dividend Per Year</th>
        //                 {/* <th>Action</th> */}
        //             </tr>
        //         </thead>
        //         <tbody>
        //             <TableRow rowData={rowData} handleChange={handleChange}/>
                
        //         {/* <tr>
        //             <td>
        //                 <select>
        //                     <option>Ticker</option>
        //                 </select>
        //             </td>
        //             <td>
        //                 <form>
        //                     <label for="shares"></label>
        //                     <input type="text" id="shares" name="shares"/>
        //                 </form>
        //             </td>
        //             <td>filler info</td>
        //             <td>filler info</td>
        //             <td>filler info</td>
        //             <td>filler info</td>
        //             <td>filler info</td>
        //             <td>filler info</td>
        //             <td>
        //                 <button>delete</button>
        //                 <button>edit</button>
        //             </td>
        //         </tr> */}
        //         </tbody>
        //     </table>
        //     </div>
            
        //     <div class = "rowButton">
        //         <button onClick = {addRow}>Add Row </button>
        //         <button onClick = {deleteRow}>Delete Row </button>
        //     </div>
            
        // </div>
    )
}

export default MarketInfo;