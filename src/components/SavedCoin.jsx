import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";


const SavedCoin = () => {
    const [coins,setCoins] = useState([]);
    return (
        <div>
            {
                coins.length === 0 
                ?   (<p>You do not have any coin saved yet.please save a coin to add it to your watch list
                        <Link to='/'>click here to search coins </Link>
                    </p> )
                : (
                    <table>
                        <thead>
                            <tr>
                                <th>Rank #</th>
                                <th>Coin</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                coins.map((coin)=>(
                                    <tr key={coin.id}>
                                        <td>{coin?.rank}</td>
                                        <td>
                                            <Link to={`/coin/${coin.id}`}>
                                                <div>
                                                    <img src={coin?.image} alt="" />
                                                    <div>
                                                        <p>{coin?.name}</p>
                                                        <p>{coin?.namesymbol?.toUpperCase()}</p>
                                                    </div>
                                                </div>    
                                            </Link>
                                        </td>
                                        <td>
                                            <AiOutlineClose  className=""/>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                )

            }
        </div>
    );
}

export default SavedCoin;