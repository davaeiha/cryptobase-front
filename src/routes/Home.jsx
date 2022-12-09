import React,{useState} from "react";
import CoinSearch from "../components/CoinSearch";
import ReactPaginate from 'react-paginate';

const Home = ({symboles}) => {
    return (
        <div>
            <CoinSearch symboles={symboles}/>
        </div>
    );
}

export default Home;