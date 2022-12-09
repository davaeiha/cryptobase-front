import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import {Sparklines,SparklinesLine} from 'react-sparklines';

const CoinItem = ({symboleData}) => {
    return (
        <tr className="h-[80px] border-b">
            <td><AiOutlineStar/></td>
            <td>{symboleData.symbol}</td>
            <td>{Number(symboleData.open).toFixed(2)}</td>
            <td>{Number(symboleData.high).toFixed(2)}</td>
            <td>{Number(symboleData.low).toFixed(2)}</td>
            <td>{Number(symboleData.volume).toFixed(2)}</td>
            <td>{Number(symboleData.volumeQuote).toFixed(2)}</td>
        </tr>
    );
}

export default CoinItem;