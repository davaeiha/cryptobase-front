import React, { useState } from "react";
import CoinItem from "./CoinItem";

const CoinSearch = ({symboles}) => {

    const [searchText,setSearchText] = useState('');
    return (
        <div className="rounded-div">
            <div className=" flex flex-col md:flex-row justify-between items-center pt-4 pb-6 text-center md:text-right">
                <h1 className=" text-2xl font-bold my-2 ">Search Crypto</h1>
                <form >
                    <input 
                        className=" w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl"
                        onChange={(e)=>setSearchText(e.target.value)}
                        type="text" 
                        placeholder="search a coin"
                    />
                </form>
            </div>
            <table className=" w-full border-collapse text-center">
                <thead>
                    <tr className=" border-b">
                        <th className=" px-4">#</th>
                        <th className=" text-left">Symbol</th>
                        <th>Open Price</th>
                        <th>High Price</th>
                        <th>Low Price</th>
                        <th>Quote base Volume</th>
                        <th>Quote Asset Volume</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(symboles)
                        .filter((value)=>{
                            console.log(value,searchText)
                            if (searchText === '') {
                                return value;
                            }else if ( value.toLowerCase().includes(searchText.toLowerCase())){
                                return value;
                            }
                        })
                        .map((symbole,index)=>(<CoinItem key={index} symboleData={symboles[symbole]} />))
        
                    }
                </tbody>
            </table>
        </div>
    );
}

export default CoinSearch;