import React, { useEffect, useState } from "react";
import "../style.css";



const TableRow = ({rowData, handleChange}) => {




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
            
            return (
                <tr key={idx}>
                    <td value={ticker} name ="ticker">
                        <select>
                            <option>Ticker</option>
                        </select>
                    </td>
                    <td value={ammountOfShares} name="ammountOfShares">
                        <form>
                            <label for="ammountOfShares"></label>
                            <input type="text" id="ammountOfShares" name="ammountOfShares"/>
                        </form>
                    </td>
                    <td value={currentPrice} name ="currentPrice">filler info</td>
                    <td value={weekHigh} name="weekHigh">filler info</td>
                    <td value={weekLow} name="weekLow">filler info</td>
                    <td value={dividendPerShare} name="dividendPerShare">filler info</td>
                    <td value={dividendPerQuarter} name="dividendPerQuarter">filler info</td>
                    <td value={dividendPerYear} name="dividendPerYear">filler info</td>
                    {/* <td value={action} name = "action">
                        <button>delete</button>
                        <button>edit</button>
                    </td> */}
                </tr>
            )
        })
    )
}

export default TableRow;